import { useEffect, useState } from "react";
import { useActiveSection } from "../hooks/useActiveSection";
import { wrap } from "../ui";
import Icon from "./Icon";

const links = [
  { id: "top", label: "Home" },
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
] as const;

const sectionIds = links.map((l) => l.id);

export default function Header() {
  const active = useActiveSection(sectionIds);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled || open ? "bg-night/85 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className={`${wrap} flex h-16 items-center justify-between sm:h-20 md:grid md:grid-cols-[1fr_auto_1fr]`}>
        <a href="#top" aria-label="Jovan Oostehuizen, back to top" className="text-2xl font-semibold tracking-tight">
          JO
        </a>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex gap-10 text-sm">
            {links.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  aria-current={active === l.id ? "true" : undefined}
                  className={`border-b pb-1 transition-colors ${
                    active === l.id
                      ? "border-white text-white"
                      : "border-transparent text-white/70 hover:text-white"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3 justify-self-end">
          <a
            href="#contact"
            className="hidden rounded-full border border-white/40 px-5 py-2 text-sm transition-colors hover:bg-white hover:text-black md:inline-flex"
          >
            Get In Touch
          </a>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            <Icon name={open ? "close" : "menu"} className="h-6 w-6" />
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Main" className="border-t border-white/10 bg-night/95 md:hidden">
          <ul className={`${wrap} flex flex-col py-3`}>
            {links.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-lg text-white/85"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2 pb-2">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-flex rounded-full border border-white/40 px-5 py-2 text-sm"
              >
                Get In Touch
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
