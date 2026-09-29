import { about, images } from "../content";
import { body, eyebrow, h2, wrap } from "../ui";
import Icon from "./Icon";
import Scene from "./Scene";

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24">
      <div className={`${wrap} grid items-center gap-10 lg:grid-cols-2 lg:gap-16`}>
        <div className="relative aspect-5/4 overflow-hidden rounded-md bg-surface">
          {images.about ? (
            <img
              src={images.about}
              alt="Jovan Oostehuizen filming on location"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          ) : (
            <Scene glow="#e8843a" dark="#0d1118" seed={2} />
          )}
        </div>

        <div>
          <p className={eyebrow}>About me</p>
          <h2 className={h2}>{about.heading}</h2>
          <div className={`mt-6 max-w-xl space-y-4 ${body}`}>
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <ul className="mt-10 grid max-w-xl gap-6 sm:grid-cols-3">
            {about.highlights.map((h) => (
              <li key={h.label} className="flex items-center gap-3">
                <Icon name={h.icon} className="h-7 w-7 shrink-0" />
                <span className="text-sm leading-snug text-white/80">{h.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
