/** @param {{ eyebrow?: string, description?: string, children: import("react").ReactNode }} props */
export default function PageTitle({ eyebrow, description, children }) {
  return (
    <div className="page-title text-center">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h1 className="title-blue">{children}</h1>
      {description && <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg">{description}</p>}
    </div>
  );
}