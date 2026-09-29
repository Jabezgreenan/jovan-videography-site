/**
 * A dusk landscape drawn with CSS and SVG. It stands in for photos until you add your own,
 * so every section already has the right mood. It is hidden from screen readers.
 */
const RIDGES: [string, string][] = [
  [
    "M0 100V72Q8 64 16 68T34 60T52 70T70 58T86 66T100 60V100Z",
    "M0 100V84Q12 76 24 82T50 78T76 84T100 78V100Z",
  ],
  [
    "M0 100V66Q10 52 22 60T40 50T58 62T78 48T100 58V100Z",
    "M0 100V82Q14 74 30 80T60 76T100 82V100Z",
  ],
  [
    "M0 100V74L14 60L24 68L40 52L52 64L66 56L82 70L100 58V100Z",
    "M0 100V86Q20 78 40 84T80 80T100 86V100Z",
  ],
];

interface Props {
  glow: string;
  dark: string;
  seed?: number;
  className?: string;
}

export default function Scene({ glow, dark, seed = 0, className = "" }: Props) {
  const [far, near] = RIDGES[seed % RIDGES.length];

  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 overflow-hidden ${className}`}
      style={{
        backgroundImage: `radial-gradient(60% 55% at 68% 62%, ${glow} 0%, transparent 70%), linear-gradient(to bottom, ${dark} 0%, color-mix(in oklab, ${dark}, ${glow} 28%) 62%, color-mix(in oklab, ${dark}, ${glow} 45%) 78%)`,
      }}
    >
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-x-0 bottom-0 h-3/5 w-full"
      >
        <path d={far} style={{ fill: `color-mix(in oklab, ${dark}, black 30%)` }} />
        <path d={near} style={{ fill: `color-mix(in oklab, ${dark}, black 70%)` }} />
      </svg>
    </div>
  );
}
