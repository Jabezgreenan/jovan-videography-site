import { testimonials } from "../content";
import { card, eyebrow, h2, wrap } from "../ui";
import Icon from "./Icon";

export default function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="py-16 sm:py-24">
      <div className={wrap}>
        <p className={eyebrow}>Testimonials</p>
        <h2 className={h2}>What Clients Say</h2>

        <ul className="mt-10 grid gap-4 md:grid-cols-3 lg:gap-5">
          {testimonials.map((t) => (
            <li key={t.name}>
              <figure className={`${card} flex h-full flex-col p-6`}>
                <Icon name="quote" className="h-5 w-5 text-glow" />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-white/80">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 text-sm">
                  <span className="font-medium">{t.name}</span>
                  <span className="block text-xs text-white/55">{t.role}</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
