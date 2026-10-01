/** @param {{ name: string, image?: string, size?: "sm" | "md" | "lg" }} props */
export default function Avatar({ name, image, size = "md" }) {
  const dimensions = size === "lg" ? "h-36 w-36" : size === "sm" ? "h-20 w-20" : "h-28 w-28";

  if (image) {
    return <img className={`person-photo ${dimensions}`} src={`/images/${image}`} alt={name} loading="lazy" />;
  }

  const initials = name.split(" ").map((part) => part[0]).join("").slice(0, 2);
  return <div className={`person-fallback ${dimensions}`} aria-label={name} role="img">{initials}</div>;
}