export type IconName =
  | "arrow-right"
  | "play"
  | "camera"
  | "sparkles"
  | "bolt"
  | "video"
  | "calendar"
  | "cube"
  | "mountain"
  | "mail"
  | "phone"
  | "pin"
  | "instagram"
  | "youtube"
  | "tiktok"
  | "mouse"
  | "menu"
  | "close"
  | "quote";

export type Category = "Brand" | "Product" | "Event" | "Travel" | "Lifestyle";

/** Anything that can be played in the video pop-up. */
export interface VideoItem {
  title: string;
  subtitle?: string;
  embedUrl?: string;
  videoSrc?: string;
  poster?: string;
  /** [glow, dark] colours for the placeholder scene. */
  tone: [string, string];
}

export interface Project {
  id: string;
  title: string;
  category: Category;
  /**
   * Option A: a YouTube or Vimeo embed link.
   *   YouTube: https://www.youtube.com/embed/VIDEO_ID
   *   Vimeo:   https://player.vimeo.com/video/VIDEO_ID
   */
  embedUrl?: string;
  /** Option B: a video file in /public/media, e.g. "/media/night-drive.mp4". */
  videoSrc?: string;
  /** A still from the film in /public/media. Leave empty to show a placeholder scene. */
  thumb?: string;
  /** [glow, dark] hex colours for the placeholder scene shown when there is no thumb. */
  tone: [string, string];
}

export interface Service {
  icon: IconName;
  name: string;
  description: string;
}

export interface Highlight {
  icon: IconName;
  label: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export interface Social {
  label: string;
  href: string;
  icon: IconName;
}
