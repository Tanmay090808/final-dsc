import Avatar from "./Avatar.jsx";

/** @param {{ name: string, role?: string, image?: string, featured?: boolean }} props */
export default function PersonCard({ name, role, image, featured = false }) {
  return (
    <article className={`person-card glass-panel ${featured ? "person-card-featured" : ""}`}>
      <Avatar name={name} image={image} size={featured ? "lg" : "md"} />
      <h3 className="mt-4 text-lg font-bold">{name}</h3>
      {role && <p className="mt-1 text-sm font-semibold text-primary">{role}</p>}
    </article>
  );
}