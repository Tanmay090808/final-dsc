import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

function generatedSpaDocument() {
  const documentTemplate = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#edf2f1" />
    <title>DSC | Developer Student Club</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>`;

  return {
    name: "generated-spa-document",
    configureServer(server) {
      server.middlewares.use(async (request, response, next) => {
        const requestUrl = request.url ?? "/";
        const pathname = new URL(requestUrl, "http://localhost").pathname;
        const acceptsHtml = request.headers.accept?.includes("text/html");

        if (request.method !== "GET" || !acceptsHtml || pathname.startsWith("/@") || pathname.includes(".")) {
          return next();
        }

        try {
          const html = await server.transformIndexHtml(requestUrl, documentTemplate);
          response.statusCode = 200;
          response.setHeader("Content-Type", "text/html");
          response.end(html);
        } catch (error) {
          next(error);
        }
      });
    },
    generateBundle(_options, bundle) {
      const entry = Object.values(bundle).find((output) =>
        output.type === "chunk" && output.isEntry && output.facadeModuleId?.replace(/\\/g, "/").endsWith("/src/main.jsx"),
      );

      if (!entry || entry.type !== "chunk") {
        this.error("Could not find the React application entry chunk.");
      }

      const stylesheetLinks = Object.values(bundle)
        .filter((output) => output.type === "asset" && output.fileName.endsWith(".css"))
        .map((output) => `    <link rel="stylesheet" href="/${output.fileName}" />`)
        .join("\n");
      const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#edf2f1" />
    <title>DSC | Developer Student Club</title>
${stylesheetLinks}
  </head>
  <body>
    <div id="root"></div>
    <script type="module" crossorigin src="/${entry.fileName}"></script>
  </body>
</html>`;

      this.emitFile({ type: "asset", fileName: "index.html", source: html });
    },
  };
}

export default defineConfig({
  publicDir: resolve(import.meta.dirname, "public"),
  plugins: [react(), tailwindcss(), generatedSpaDocument()],
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input: resolve(import.meta.dirname, "src/main.jsx"),
    },
  },
});