# Jovan Oostehuizen: videographer website

React, TypeScript, Tailwind CSS (v4) and Vite. A dark, cinematic one-page site.

## Run it locally

You need Node.js 20 or newer (https://nodejs.org).

```bash
npm install
npm run dev
```

Open the address it prints (usually http://localhost:5173). Changes show up as you save.

```bash
npm run build     # type-checks and builds the site into /dist
npm run preview   # serves the built site so you can check it
```

## Change the content

Almost everything you will want to edit is in **src/content.ts**:

| Export         | What it controls                                             |
| -------------- | ------------------------------------------------------------ |
| `site`         | name, headline, intro, email, phone, location                |
| `images`       | the four big photos: hero, about, showreel, contact          |
| `showreel`     | the "Watch My Work" video                                    |
| `about`        | bio text and the three highlights                            |
| `services`     | the four service cards                                       |
| `projects`     | the six tiles under "Selected Projects"                      |
| `testimonials` | client quotes (delete them all to hide the section)          |
| `socials`      | footer icons (an empty `href` hides one)                     |

The email, phone number, location and testimonials were copied from the design mockup. **The testimonials are not real.** Replace them with genuine quotes or remove them before launch.

### Add photos

Copy images into `public/media/` and point to them from `content.ts`:

```ts
export const images = {
  hero: "/media/hero.jpg",
  about: "/media/jovan.jpg",
  showreel: "/media/showreel-bg.jpg",
  contact: "/media/contact-bg.jpg",
};
```

Any path left empty shows a drawn placeholder landscape instead. For the hero, a photo with the subject on the right works best, because the text sits on the left.

For a project, set `thumb: "/media/night-drive.jpg"` (16:9, at least 1200px wide).

### Add videos

Link a hosted video or use a file. Both open in a pop-up when someone clicks.

```ts
// Hosted on Vimeo or YouTube (use the embed link, not the normal page link)
embedUrl: "https://player.vimeo.com/video/123456789",

// Or a file you put in public/media
videoSrc: "/media/night-drive.mp4",
```

The showreel takes the same two options in the `showreel` export.

## Change the look

Colours and the font are defined at the top of **src/index.css**, inside `@theme`. Class names such as `bg-night`, `bg-surface` and `text-glow` come from those names.

Shared spacing and type styles (section widths, small headings, buttons, cards) are in **src/ui.ts**, so a change there updates every section.

The font is Outfit, installed through npm so the site works offline. To swap it, install another `@fontsource-variable/...` package, change the `@import` line in `index.css` and update `--font-sans`.

## Contact form

The form opens the visitor's email app with the message filled in, so it needs no server. To have it send messages directly instead, replace the `window.location.href = ...` line in `src/components/Contact.tsx` with a request to a form service such as Formspree or Netlify Forms.

## Put it online

Run `npm run build`, then upload the `dist` folder to any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages). Before launch, check the page title and description in `index.html`.

## Project layout

```
src/
  content.ts        all editable text and project data
  types.ts          TypeScript types for that data
  ui.ts             shared class names
  index.css         Tailwind import, colours, font
  App.tsx           page order and the video pop-up
  components/       Header, Hero, About, Showreel, Services, Work, Testimonials, Contact, Footer
                    Scene (placeholder landscape), Icon, VideoModal
  hooks/            useActiveSection (highlights the current link in the menu)
public/
  media/            your photos and videos
  favicon.svg
```
