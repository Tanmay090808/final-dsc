import Avatar from "../components/Avatar.jsx";
import PageTitle from "../components/PageTitle.jsx";
import PersonCard from "../components/PersonCard.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { departments, teamGroups } from "../data/team.js";

export default function TeamPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 sm:px-8">
      <section className="team-hero fade-in">
        <PageTitle eyebrow="People behind the community" description="The driving force behind our community. Passionate individuals dedicated to innovation, collaboration, and growth.">Meet Our Team</PageTitle>
      </section>

      <div className="flex flex-col gap-16 sm:gap-20">
        <section className="fade-in">
          <SectionHeading>Founder</SectionHeading>
          <article className="advisor-panel glass-panel">
            <Avatar name="Ganesh Jorvekar" image="Jorvekarsir.png" size="lg" />
            <div className="text-center sm:text-left">
              <h3 className="text-2xl font-bold">Ganesh Jorverkar</h3>
              <p className="mt-1 text-lg font-semibold text-primary">Founder</p>
              <p className="mt-3 max-w-lg text-sm leading-6 text-muted">Building a community where ideas become software, developers grow, and technology creates real-world impact.</p>
            </div>
          </article>
        </section>

        <section className="fade-in">
          <SectionHeading>Faculty Advisor</SectionHeading>
          <article className="advisor-panel glass-panel">
            <Avatar name="Mukul Khasne" image="khasneSir.jpg" size="lg" />
            <div className="text-center sm:text-left">
              <h3 className="text-2xl font-bold">Mukul Khasne</h3>
              <p className="mt-1 text-lg font-semibold text-primary">Club In-Charge</p>
              <p className="mt-3 max-w-lg text-sm leading-6 text-muted">Guiding our steps with experience and wisdom, Dr. Bennett is the cornerstone of our club&apos;s success.</p>
            </div>
          </article>
        </section>

        <section className="fade-in">
          <SectionHeading>Current Leader</SectionHeading>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <PersonCard name="Disha Dond" role="President" image="DishaDond.jpeg" featured />
            <article className="person-card glass-panel">
              <div className="grid grid-cols-2 gap-4">
                <div><Avatar name="Adwait Shroff" image="adwaitShroff.jpeg" size="sm" /><h3 className="mt-3 font-bold">Adwait Shroff</h3></div>
                <div><Avatar name="Shraddha Chaudhari" image="shraddhaChaudhari.jpeg" size="sm" /><h3 className="mt-3 font-bold">Shraddha Chaudhari</h3></div>
              </div>
              <p className="mt-3 text-sm font-semibold text-primary">Vice-Presidents</p>
            </article>
            <article className="person-card glass-panel">
              <div className="grid grid-cols-1 gap-4">
                <div><Avatar name="Atharva Mhaske" image="atharvaMhaske.jpeg" size="sm" /><h3 className="mt-3 font-bold">Atharva Mhaske</h3></div>
              </div>
              <p className="mt-3 text-sm font-semibold text-primary">Technical Head</p>
            </article>
          </div>
        </section>

        <section className="fade-in">
          <SectionHeading>Department Heads</SectionHeading>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
            <PersonCard name="Samiksha Kardel" role="Accountant" />
            {departments.map((member) => <PersonCard key={member.name} {...member} />)}
          </div>
        </section>

        <section className="fade-in">
          <SectionHeading>Our Talented Teams</SectionHeading>
          <div className="grid gap-5 lg:grid-cols-2">
            {teamGroups.map((team) => (
              <div className="team-column glass-panel" key={team.title}>
                <h3 className="mb-7 text-center text-2xl font-bold">{team.title}</h3>
                <div className="space-y-8">
                  {team.groups.map((group) => (
                    <section key={group.title}>
                      <h4 className="mb-4 text-center text-sm font-bold uppercase tracking-widest text-primary">{group.title}</h4>
                      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
                        {group.people.map((member) => (
                          <div className="team-person" key={member.name}>
                            <Avatar name={member.name} image={member.image} size="sm" />
                            <h5 className="mt-3 max-w-36 text-center text-sm font-semibold leading-5">{member.name}</h5>
                          </div>
                        ))}
                      </div>
                    </section>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="fade-in">
          <SectionHeading>Honorable Alumni</SectionHeading>
          <article className="advisor-panel glass-panel">
            <Avatar name="OM" size="lg" />
            <div className="text-center sm:text-left">
              <h3 className="text-2xl font-bold">OM</h3>
              <p className="mt-1 text-lg font-semibold text-amber-600 dark:text-amber-300">Former President (2022-2023)</p>
              <p className="mt-3 max-w-lg text-sm leading-6 text-muted">Pioneered initiatives that shaped our club&apos;s direction. We build on the foundation he helped establish.</p>
            </div>
          </article>
        </section>
      </div>
    </main>
  );
}