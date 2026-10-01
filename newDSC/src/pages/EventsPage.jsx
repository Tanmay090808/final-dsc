import { ArrowUpRight, CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";
import PageTitle from "../components/PageTitle.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { eventFormats } from "../data/events.js";

export default function EventsPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 sm:px-8">
      <section className="team-hero fade-in">
        <PageTitle eyebrow="Learn together, build together" description="Workshops, hackathons, and conversations that make technology easier to explore.">Events</PageTitle>
      </section>
      <section className="events-notice glass-panel fade-in">
        <div className="events-notice-icon"><CalendarDays size={23} /></div>
        <div>
          <p className="eyebrow">Coming up</p>
          <h2 className="mt-2 text-2xl font-bold">New events are being planned</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">Check back here for the next club announcement, or get in touch with the team to hear about upcoming sessions.</p>
        </div>
        <Link to="/contact" className="button-primary">Contact the team <ArrowUpRight size={16} /></Link>
      </section>
      <section className="content-section fade-in">
        <SectionHeading>What to expect</SectionHeading>
        <div className="grid gap-4 md:grid-cols-3">
          {eventFormats.map(({ title, description }, index) => (
            <article className="activity-card glass-panel" key={title}>
              <span className="activity-index">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-5 text-xl font-bold text-primary">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}