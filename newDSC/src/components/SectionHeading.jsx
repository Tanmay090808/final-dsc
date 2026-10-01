/** @param {{ children: import("react").ReactNode }} props */
export default function SectionHeading({ children }) {
  return <h2 className="section-heading title-blue">{children}</h2>;
}