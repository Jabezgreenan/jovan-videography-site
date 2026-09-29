import { projects, site } from "../content";
import type { VideoItem } from "../types";
import { eyebrow, h2, wrap } from "../ui";
import Icon from "./Icon";
import ProjectTile from "./ProjectTile";

interface Props {
  onPlay: (item: VideoItem) => void;
}

export default function Work({ onPlay }: Props) {
  return (
    <section id="work" className="py-16 sm:py-24">
      <div className={wrap}>
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className={eyebrow}>Recent work</p>
            <h2 className={h2}>Selected Projects</h2>
          </div>
          {site.allWorkUrl && (
            <a
              href={site.allWorkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex shrink-0 items-center gap-2 text-sm text-white/80 transition-colors hover:text-white"
            >
              View All Projects
              <Icon name="arrow-right" className="h-4 w-4" />
            </a>
          )}
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {projects.map((p, i) => (
            <li key={p.id}>
              <ProjectTile project={p} index={i} onPlay={onPlay} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
