const formulas = [
  { text: "∂f/∂x", top: "12%", left: "6%", tilt: "-6deg", delay: "0s" },
  { text: "dz/dt = ∂z/∂x · dx/dt", top: "28%", left: "72%", tilt: "4deg", delay: "1.4s" },
  { text: "J = ∂(u,v)/∂(x,y)", top: "58%", left: "4%", tilt: "3deg", delay: "2.2s" },
  { text: "∇·F = 0", top: "74%", left: "82%", tilt: "-5deg", delay: "0.7s" },
  { text: "O(n log n)", top: "44%", left: "46%", tilt: "-3deg", delay: "3s" },
  { text: "Σ xᵢ / n", top: "88%", left: "38%", tilt: "5deg", delay: "1.9s" },
];

/**
 * Full-page animated notebook background: grid rules, pencil scribbles,
 * floating formulas and monochrome paper grain. Purely decorative.
 */
export function NotebookBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* notebook grid */}
      <div className="anim-drift absolute -inset-24 grid-paper opacity-70" />

      {/* margin rule */}
      <div className="absolute inset-y-0 left-8 hidden w-px bg-border/25 md:block" />
      <div className="absolute inset-y-0 left-[38px] hidden w-px bg-border/15 md:block" />

      {/* pencil scribbles */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.16]"
        viewBox="0 0 1200 900"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          className="anim-draw"
          d="M60 180 C 180 120, 240 260, 360 200 S 560 120, 680 210"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          className="anim-draw"
          d="M820 90 c 40 30, -30 60, 10 90 s -40 50, 4 78"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          className="anim-draw"
          d="M120 640 q 90 -70 180 -6 t 180 -10 t 150 40"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="980" cy="620" r="70" stroke="currentColor" strokeWidth="2" className="anim-draw" />
        <path
          className="anim-draw"
          d="M940 760 l 60 -40 l 60 40 l -60 40 z"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>

      {/* floating formulas */}
      {formulas.map((f) => (
        <span
          key={f.text}
          className="anim-float absolute font-mono text-xs text-muted-foreground/45 sm:text-sm"
          style={
            {
              top: f.top,
              left: f.left,
              animationDelay: f.delay,
              "--tilt": f.tilt,
            } as React.CSSProperties
          }
        >
          {f.text}
        </span>
      ))}

      {/* paper grain */}
      <div className="paper-grain absolute inset-0 opacity-[0.045] mix-blend-multiply dark:opacity-[0.06] dark:mix-blend-screen" />
    </div>
  );
}
