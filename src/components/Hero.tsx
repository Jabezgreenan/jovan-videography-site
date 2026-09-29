import { images, site } from "../content";
import { btnPrimary, eyebrow, wrap } from "../ui";
import Icon from "./Icon";
import Scene from "./Scene";

export default function Hero() {
  const [first, ...rest] = site.name.split(" ");

  return (
    <section
      id="top"
      className="relative isolate flex h-svh max-h-240 min-h-152 items-center overflow-hidden"
    >
      {images.hero ? (
        <img
          src={images.hero}
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right"
        />
      ) : (
        <Scene glow="#e8843a" dark="#0c1017" seed={0} className="-z-10" />
      )}
      {/* Darkens the left for readable text, and fades the bottom into the page */}
      <div className="absolute inset-0 -z-10 bg-linear-to-r from-night/90 via-night/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-1/3 bg-linear-to-t from-night to-transparent" />

      <div className={`${wrap} pt-16`}>
        <p className={eyebrow}>{site.role}</p>
        <h1 className="mt-5 text-5xl font-medium leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
          {first}
          <br />
          {rest.join(" ")}
        </h1>
        <p className="mt-6 text-lg text-white/90">{site.headline}</p>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-white/70 sm:text-base">{site.intro}</p>

        <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
          <a href="#work" className={btnPrimary}>
            View My Work
            <Icon name="arrow-right" className="h-4 w-4" />
          </a>
          <a href="#contact" className="text-sm underline underline-offset-8 decoration-white/50 hover:decoration-white">
            Get In Touch
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 right-8 hidden flex-col items-center gap-2 text-xs text-white/70 transition-colors hover:text-white sm:flex lg:right-10"
      >
        <Icon name="mouse" className="h-7 w-7" />
        <span className="text-center leading-tight">
          Scroll
          <br />
          Down
        </span>
      </a>
    </section>
  );
}
