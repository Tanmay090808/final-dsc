import { useState } from "react";
import { Mail, Send } from "lucide-react";
import PageTitle from "../components/PageTitle.jsx";

export default function ContactPage() {
  const [emailPrepared, setEmailPrepared] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`DSC website: ${formData.get("topic")}`);
    const body = encodeURIComponent(`Name: ${formData.get("name")}\nEmail: ${formData.get("email")}\n\n${formData.get("message")}`);
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
    setEmailPrepared(true);
  };

  return (
    <main className="mx-auto max-w-7xl px-5 sm:px-8">
      <section className="team-hero fade-in">
        <PageTitle eyebrow="We would love to hear from you" description="Have a question, an idea, or want to get involved? Send a note to the club team.">Contact Us</PageTitle>
      </section>
      <section className="contact-layout fade-in">
        <div className="contact-copy">
          <div className="contact-icon"><Mail size={24} /></div>
          <p className="eyebrow mt-7">Get in touch</p>
          <h2 className="mt-3 font-display text-3xl font-bold">Let&apos;s make something happen.</h2>
          <p className="mt-4 max-w-md leading-7 text-muted">Whether you want to join a session, suggest an event, or start a project, send us a message and we&apos;ll help you find the right next step.</p>
        </div>
        <form className="contact-form glass-panel" onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="form-field">Your name<input name="name" autoComplete="name" required placeholder="Name" /></label>
            <label className="form-field">Email address<input name="email" type="email" autoComplete="email" required placeholder="you@example.com" /></label>
          </div>
          <label className="form-field">What is this about?
            <select name="topic" defaultValue="Joining the community">
              <option>Joining the community</option>
              <option>Events and workshops</option>
              <option>Projects and collaboration</option>
              <option>Other question</option>
            </select>
          </label>
          <label className="form-field">Your message<textarea name="message" rows="5" required placeholder="Write a few lines..." /></label>
          <div className="flex flex-wrap items-center gap-4">
            <button className="button-primary" type="submit">Prepare email <Send size={16} /></button>
            {emailPrepared && <p role="status" className="text-sm text-muted">Your email app is opening with the message ready to send.</p>}
          </div>
        </form>
      </section>
    </main>
  );
}