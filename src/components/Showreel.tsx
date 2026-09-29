import { images, showreel } from "../content";
import type { VideoItem } from "../types";
import { body, eyebrow, h2, wrap } from "../ui";
import Icon from "./Icon";
import Scene from "./Scene";

interface Props {
  onPlay: (item: VideoItem) => void;
}

const tone: [string, string] = ["#e8843a", "#0c1017"];

export default function Showreel({ onPlay }: Props) {
  const item: VideoItem = {
    title: "Showreel",
    embedUrl: showreel.embedUrl || undefined,
    videoSrc: showreel.videoSrc || undefined,
    tone,
  };

  return (
    <section id="showreel" className="relative isolate overflow-hidden">
      {images.showreel ? (
        <img
          src={images.showreel}
          alt=""
          loading="lazy"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
      ) : (
        <Scene glow={tone[0]} dark={tone[1]} seed={1} className="-z-10" />
      )}
      <div className="absolute inset-0 -z-10 bg-linear-to-r from-night/85 via-night/45 to-night/10" />

      <div className={`${wrap} py-20 sm:py-28`}>
        <p className={eyebrow}>Showreel</p>
        <h2 className={h2}>{showreel.heading}</h2>
        <p className={`mt-4 max-w-sm text-sm ${body}`}>{showreel.text}</p>

        <button
          type="button"
          onClick={() => onPlay(item)}
          className="group mt-8 flex items-center gap-4"
        >
          <span className="grid h-14 w-14 place-items-center rounded-full bg-white text-black transition-transform group-hover:scale-105">
            <Icon name="play" className="h-5 w-5 translate-x-0.5" />
          </span>
          <span className="text-sm font-medium">Play Showreel</span>
        </button>
      </div>
    </section>
  );
}
