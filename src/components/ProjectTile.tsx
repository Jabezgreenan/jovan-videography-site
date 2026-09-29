import type { Project, VideoItem } from "../types";
import Icon from "./Icon";
import Scene from "./Scene";

interface Props {
  project: Project;
  index: number;
  onPlay: (item: VideoItem) => void;
}

export default function ProjectTile({ project, index, onPlay }: Props) {
  const { title, category, thumb, tone, embedUrl, videoSrc } = project;

  const item: VideoItem = {
    title,
    subtitle: category,
    embedUrl: embedUrl || undefined,
    videoSrc: videoSrc || undefined,
    poster: thumb || undefined,
    tone,
  };

  return (
    <button
      type="button"
      onClick={() => onPlay(item)}
      aria-label={`Play ${title}, ${category} film`}
      className="group relative block aspect-video w-full overflow-hidden rounded-md bg-surface text-left"
    >
      {thumb ? (
        <img
          src={thumb}
          alt=""
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <Scene glow={tone[0]} dark={tone[1]} seed={index} />
      )}

      {/* Caption: always visible on touch screens, revealed on hover and focus elsewhere */}
      <span className="absolute inset-0 flex items-end justify-between bg-linear-to-t from-black/75 via-black/10 to-transparent p-4 opacity-100 transition-opacity duration-300 group-focus-visible:opacity-100 group-hover:opacity-100 [@media(hover:hover)]:opacity-0">
        <span>
          <span className="block text-base font-medium leading-tight">{title}</span>
          <span className="mt-0.5 block text-xs text-white/70">{category}</span>
        </span>
        <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-black">
          <Icon name="play" className="h-3.5 w-3.5 translate-x-px" />
        </span>
      </span>
    </button>
  );
}
