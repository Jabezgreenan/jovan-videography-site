import { useEffect, useRef } from "react";
import type { VideoItem } from "../types";
import Icon from "./Icon";

interface Props {
  item: VideoItem | null;
  onClose: () => void;
}

export default function VideoModal({ item, onClose }: Props) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (item && !dialog.open) dialog.showModal();
    if (!item && dialog.open) dialog.close();
    document.body.style.overflow = item ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [item]);

  return (
    <dialog
      ref={ref}
      aria-label={item ? item.title : "Video"}
      onClose={onClose}
      onClick={(e) => {
        // A click on the dark backdrop lands on the dialog element itself.
        if (e.target === ref.current) onClose();
      }}
      className="m-auto w-[min(72rem,94vw)] overflow-hidden rounded-xl border border-white/10 bg-surface p-0 text-white backdrop:bg-black/85"
    >
      {item && (
        <div>
          <div className="aspect-video bg-black">
            {item.embedUrl ? (
              <iframe
                src={item.embedUrl}
                title={item.title}
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              />
            ) : item.videoSrc ? (
              <video
                src={item.videoSrc}
                poster={item.poster || undefined}
                controls
                autoPlay
                playsInline
                className="h-full w-full"
              />
            ) : (
              <div
                className="grid h-full w-full place-items-center p-6 text-center"
                style={{
                  backgroundImage: `linear-gradient(140deg, ${item.tone[0]}, ${item.tone[1]})`,
                }}
              >
                <p className="max-w-md text-lg">
                  No video is linked here yet. Add an embedUrl or videoSrc in src/content.ts.
                </p>
              </div>
            )}
          </div>
          <div className="flex items-center justify-between gap-6 p-5">
            <div>
              <h3 className="text-xl font-medium">{item.title}</h3>
              {item.subtitle && <p className="text-sm text-white/60">{item.subtitle}</p>}
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close video"
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/30 transition-colors hover:bg-white hover:text-black"
            >
              <Icon name="close" />
            </button>
          </div>
        </div>
      )}
    </dialog>
  );
}
