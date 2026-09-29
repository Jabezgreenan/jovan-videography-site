import { services, servicesIntro } from "../content";
import { body, card, eyebrow, h2, wrap } from "../ui";
import Icon from "./Icon";

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-24">
      <div className={wrap}>
        <p className={eyebrow}>Services</p>
        <h2 className={h2}>What I Offer</h2>
        <p className={`mt-4 max-w-md text-sm ${body}`}>{servicesIntro}</p>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {services.map((s) => (
            <li key={s.name} className={`${card} p-6`}>
              <span className="grid h-10 w-10 place-items-center rounded-md border border-white/15">
                <Icon name={s.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-6 text-base font-medium">{s.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{s.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
