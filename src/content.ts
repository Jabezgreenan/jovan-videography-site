import type { Highlight, Project, Service, Social, Testimonial } from "./types";

/**
 * Everything you are likely to edit lives in this file.
 * The text is a starting point taken from the design mockup:
 * check every line, and replace what is not right.
 */

export const site = {
  name: "Jovan Oosthuizen",
  role: "Videographer",
  headline: "Turning moments into stories.",
  intro:
    "I'm a videographer based in South Africa, creating high-quality, cinematic content for brands, businesses, events and individuals.",
  /** The contact form opens the visitor's email app addressed to this email. */
  email: "jovan.oosthuizen@gmail.com",
  phone: "+27 66 332 6986",
  location: "Kimberley, Northern Cape, South Africa",
  /** Link for "View All Projects" (a Vimeo or YouTube page). Leave empty to hide the link. */
  allWorkUrl: "https://vimeo.com/",
};

/**
 * Photos in /public/media. Leave a path empty to show a coloured placeholder scene.
 * Suggested sizes: hero 2400x1400, about 1200x1000, showreel 2400x900, contact 2400x1200.
 */
export const images = {
  hero: "/media/hero.png",
  about: "/media/jovan.png", 
  showreel: "",
  contact: "",
};

export const showreel = {
  heading: "Watch My Work",
  text: "A collection of recent projects, showcasing my style, technique and storytelling.",
  /** A video file in /public/media, e.g. "/media/showreel.mp4". */
  videoSrc: "/media/showreel.mp4",
  /** Or a YouTube / Vimeo embed link. */
  embedUrl: "",
};

export const about = {
  heading: "Hi, I'm Jovan.",
  paragraphs: [
    "I'm a passionate videographer with a love for storytelling and capturing real moments. Whether it's a brand, event, product or personal project, I focus on creating authentic, high-quality visuals that leave a lasting impression.",
    "I work with a hands-on, detail-oriented approach, from the initial idea to the final edit, making sure every shot serves the bigger picture.",
  ],
  highlights: [
    { icon: "camera", label: "Cinematic Storytelling" },
    { icon: "sparkles", label: "Creative Vision" },
    { icon: "bolt", label: "Reliable & Professional" },
  ] satisfies Highlight[],
};

export const servicesIntro =
  "I provide professional videography services for a variety of needs. Here's what I can help you with:";

export const services: Service[] = [
  {
    icon: "video",
    name: "Brand Videos",
    description: "Showcase your business with engaging and professional visuals.",
  },
  {
    icon: "calendar",
    name: "Event Coverage",
    description: "Capture the moments that matter, from corporate events to private functions.",
  },
  {
    icon: "cube",
    name: "Product Videos",
    description: "Bring your products to life with clean, cinematic footage.",
  },
  {
    icon: "mountain",
    name: "Travel & Lifestyle",
    description: "Natural, authentic content for your adventures, travel or personal brand.",
  },
];

export const projects: Project[] = [
  { id: "night-drive", title: "Night Drive", category: "Product", thumb: "", tone: ["#4a6fa5", "#090c11"] },
  { id: "behind-the-lens", title: "Behind the Lens", category: "Brand", thumb: "", tone: ["#3f7f8c", "#0a0f12"] },
  { id: "coastline", title: "Coastline", category: "Travel", thumb: "", tone: ["#e8843a", "#0d1118"] },
  { id: "live-sessions", title: "Live Sessions", category: "Event", thumb: "", tone: ["#6a62e0", "#0a0a13"] },
  { id: "golden-hour", title: "Golden Hour", category: "Lifestyle", thumb: "", tone: ["#f0a04b", "#130f0c"] },
  { id: "on-set", title: "On Set", category: "Brand", thumb: "", tone: ["#5b8a67", "#0a0f0c"] },
];

/**
 * PLACEHOLDER TESTIMONIALS from the mockup. They are not real.
 * Replace them with genuine client quotes, or delete them all to hide the section.
 */
export const testimonials: Testimonial[] = [
  {
    quote:
      "Jovan's work speaks for itself. He captured our event perfectly and the final video was beyond what we imagined. Professional, easy to work with and super creative!",
    name: "Michael D.",
    role: "Event Client",
  },
  {
    quote:
      "The quality and attention to detail were incredible. He really understood our vision and brought it to life with stunning visuals.",
    name: "Sarah L.",
    role: "Brand Client",
  },
  {
    quote:
      "Highly recommend Jovan! His storytelling and editing style are next level. We'll definitely be working with him again.",
    name: "Daniel K.",
    role: "Product Client",
  },
];

/** Links with an empty href are hidden. */
export const socials: Social[] = [
  { label: "Instagram", href: "https://www.instagram.com/jovan_oosthuizen_?stkn=YmI3MzlvcWZna3Zj", icon: "instagram" },
  { label: "YouTube", href: "https://www.youtube.com/", icon: "youtube" },
  { label: "TikTok", href: "https://www.tiktok.com/@its_jovan_o?_r=1&_t=ZS-9A8QL4fLELH", icon: "tiktok" },
];
