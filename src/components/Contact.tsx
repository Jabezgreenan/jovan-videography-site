import { useState, type FormEvent } from "react";
import { images, site } from "../content";
import { btnPrimary, body, eyebrow, wrap } from "../ui";
import Icon from "./Icon";
import Scene from "./Scene";

const field =
  "w-full rounded-md border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/55 focus:border-white/50 focus:outline-none";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");

    const subject = `Project enquiry from ${name}`;
    const bodyText = `${message}\n\n${name}\n${email}`;

    // This opens the visitor's email app. To send from the site instead,
    // replace this line with a request to a form service (see README.md).
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`;
    setSent(true);
  }

  const details = [
    { icon: "mail", text: site.email, href: `mailto:${site.email}` },
    { icon: "phone", text: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` },
    { icon: "pin", text: site.location, href: "" },
  ] as const;

  return (
    <section id="contact" className="relative isolate overflow-hidden py-16 sm:py-24">
      {images.contact ? (
        <img
          src={images.contact}
          alt=""
          loading="lazy"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
      ) : (
        <Scene glow="#e8843a" dark="#0c1017" seed={2} className="-z-10" />
      )}
      <div className="absolute inset-0 -z-10 bg-night/70" />
      <div className="absolute inset-x-0 top-0 -z-10 h-1/4 bg-linear-to-b from-night to-transparent" />

      <div className={`${wrap} grid items-center gap-12 lg:grid-cols-2 lg:gap-16`}>
        <div>
          <p className={eyebrow}>Get in touch</p>
          <h2 className="mt-3 max-w-md text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
            Let's Create Something Great Together
          </h2>
          <p className={`mt-5 max-w-sm text-sm ${body}`}>
            Have a project in mind? I'd love to hear from you. Send me a message and I'll get back to
            you as soon as possible.
          </p>

          <ul className="mt-8 space-y-4 text-sm">
            {details.map((d) => (
              <li key={d.icon} className="flex items-center gap-4">
                <Icon name={d.icon} className="h-5 w-5 shrink-0 text-white/80" />
                {d.href ? (
                  <a href={d.href} className="underline decoration-white/0 underline-offset-4 hover:decoration-white/60">
                    {d.text}
                  </a>
                ) : (
                  <span>{d.text}</span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-xl border border-white/10 bg-night/70 p-4 backdrop-blur-md sm:p-5"
        >
          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input id="name" name="name" type="text" required autoComplete="name" placeholder="Name" className={field} />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input id="email" name="email" type="email" required autoComplete="email" placeholder="Email" className={field} />
            </div>
          </div>
          <div className="mt-3">
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea id="message" name="message" required rows={5} placeholder="Message" className={`${field} resize-y`} />
          </div>
          <button type="submit" className={`${btnPrimary} mt-3 w-full justify-center`}>
            Send Message
            <Icon name="arrow-right" className="h-4 w-4" />
          </button>
          {sent && (
            <p role="status" className="mt-3 text-sm text-white/70">
              Your email app should have opened with the message ready to send.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
