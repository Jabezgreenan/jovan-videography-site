import { site, socials } from "../content";
import { wrap } from "../ui";
import Icon from "./Icon";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-night">
      <div className={`${wrap} flex flex-col items-center justify-between gap-5 py-8 sm:flex-row`}>
        <div className="flex items-center gap-4">
          <span className="text-xl font-semibold tracking-tight">JO</span>
          <span className="h-5 w-px bg-white/20" aria-hidden="true" />
          <span className="text-xs text-white/70">{site.name}</span>
        </div>

        <ul className="flex items-center gap-5">
          {socials
            .filter((s) => s.href)
            .map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="text-white/70 transition-colors hover:text-white"
                >
                  <Icon name={s.icon} className="h-4 w-4" />
                </a>
              </li>
            ))}
          <li>
            <a
              href={`mailto:${site.email}`}
              aria-label="Email"
              className="text-white/70 transition-colors hover:text-white"
            >
              <Icon name="mail" className="h-4 w-4" />
            </a>
          </li>
        </ul>
      </div>
      <p className="pb-8 text-center text-xs text-white/50">
        &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
      </p>
    </footer>
  );
}
