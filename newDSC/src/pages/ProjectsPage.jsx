import { ArrowUpRight, FolderKanban } from "lucide-react";
import { Link } from "react-router-dom";
import PageTitle from "../components/PageTitle.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { projectTracks } from "../data/projects.js";

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 sm:px-8">
      <section className="team-hero fade-in">
        <PageTitle eyebrow="Ideas into working prototypes" description="A place for members to experiment, collaborate, and create with technology.">Projects</PageTitle>
      </section>
      <section className="projects-intro glass-panel fade-in">
        <div className="projects-icon"><FolderKanban size={25} /></div>
        <div>
          <p className="eyebrow">Build in public</p>
          <h2 className="mt-2 text-2xl font-bold">Bring an idea. Find your people.</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">Projects are a chance to learn by making. Find teammates, share what you know, and grow an idea one small step at a time.</p>
        </div>
        <Link to="/contact" className="button-primary">Start a conversation <ArrowUpRight size={16} /></Link>
      </section>
      <section className="content-section fade-in">
        <SectionHeading>Areas to explore</SectionHeading>
        <div className="grid gap-4 md:grid-cols-3">
          {projectTracks.map(({ title, description }, index) => (
            <article className="project-card glass-panel" key={title}>
              <span className="activity-index">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-6 text-xl font-bold">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{description}</p>
              <span className="project-rule" />
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}