import { ArrowDown } from "lucide-react";
import SectionHeading from "../components/SectionHeading.jsx";
import { activities, heroLines } from "../data/home.js";
import useTypingEffect from "../hooks/useTypingEffect.js";

export default function HomePage() {
  const typedText = useTypingEffect(heroLines);

  return (
    <main className="mx-auto max-w-7xl px-5 sm:px-8">
      <section className="home-hero glass-panel fade-in">
        <div className="hero-content">
          <p className="eyebrow">Build · Learn · Belong</p>
          <div className="hero-title-row">
            <h1 className="title-blue">Developer Student Club</h1>
            <p className="hero-typing" aria-label={heroLines.join(" ")}>
              <span aria-hidden="true">{typedText}</span>
              <span className="typing-caret" aria-hidden="true" />
            </p>
          </div>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg">A community of student developers passionate about technology. We organize workshops, hackathons, and tech talks to foster learning and collaboration.</p>
          <a href="#what-we-do" className="button-primary mt-7">Learn More <ArrowDown size={16} /></a>
        </div>
        <div className="hero-mark" aria-hidden="true"><img src="/transparent-logo.png" alt="" /></div>
      </section>

      <section className="content-section fade-in">
        <div className="about-panel glass-panel">
          <div>
            <p className="eyebrow">Our community</p>
            <h2 className="title-blue">About DSC</h2>
          </div>
          <p className="max-w-3xl text-base leading-8 text-muted">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis reprehenderit corrupti tempore delectus est dicta tempora facere accusamus eaque nisi velit, aspernatur illo maiores! Voluptate unde ipsa iste qui officiis? Quo modi fugit amet veritatis sunt illum dicta ut iste! Fuga itaque harum fugiat perspiciatis adipisci quis officia ab delectus.</p>
        </div>
      </section>

      <section id="what-we-do" className="content-section fade-in">
        <SectionHeading>What We Do</SectionHeading>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {activities.map(({ title, description }, index) => (
            <article className="activity-card glass-panel" key={`${title}-${index}`}>
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