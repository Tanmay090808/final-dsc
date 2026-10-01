import { useEffect, useRef } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import EventsPage from "./pages/EventsPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";
import TeamPage from "./pages/TeamPage.jsx";
import useLogoUpload from "./hooks/useLogoUpload.js";

const pageTitles = {
  "/": "DSC | Developer Student Club",
  "/events": "DSC | Events",
  "/team": "DSC | Meet Our Team",
  "/projects": "DSC | Projects",
  "/contact": "DSC | Contact",
};

function AppLayout() {
  const { pathname } = useLocation();
  const appRef = useRef(null);
  const { logo, handleLogoChange } = useLogoUpload("/transparent-logo.png");

  useEffect(() => {
    const app = appRef.current;
    const supportsPointerLighting = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    if (!app || !supportsPointerLighting) return undefined;

    const updateGlassHighlight = (event) => {
      if (!(event.target instanceof Element)) return;

      const surface = event.target.closest(".glass-panel, .site-nav");
      if (!surface || !app.contains(surface)) return;

      const bounds = surface.getBoundingClientRect();
      surface.style.setProperty("--glass-pointer-x", `${event.clientX - bounds.left}px`);
      surface.style.setProperty("--glass-pointer-y", `${event.clientY - bounds.top}px`);
    };

    app.addEventListener("pointermove", updateGlassHighlight, { passive: true });
    return () => app.removeEventListener("pointermove", updateGlassHighlight);
  }, []);

  useEffect(() => {
    document.title = pageTitles[pathname] ?? "DSC | Developer Student Club";
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div ref={appRef} className="app-shell min-h-screen">
      <Header logo={logo} onLogoChange={handleLogoChange} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
      <Footer logo={logo} />
    </div>
  );
}

export default function AppShell() {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <AppLayout />
    </BrowserRouter>
  );
}