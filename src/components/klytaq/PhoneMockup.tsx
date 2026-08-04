import heroShot from "@/assets/1.hero_screenshot.png.asset.json";
import homeShot from "@/assets/2.home_dashboard.png.asset.json";

const floatingCards = [
  { icon: "⚡", label: "840 XP", pos: "-left-2 top-[12%] sm:-left-8", accent: true },
  { icon: "🔥", label: "12-day streak", pos: "-right-2 top-[30%] sm:-right-6" },
  { icon: "📚", label: "4/12 subjects complete", pos: "-left-3 bottom-[26%] sm:-left-12" },
  { icon: "🎯", label: "3 active backlogs", pos: "-right-1 bottom-[10%] sm:-right-8" },
];

/**
 * Hero visual: the Journey screenshot pinned in a phone frame, with the home
 * dashboard tucked behind it like stacked engineering notes, plus floating
 * stat cards, handwritten margin notes and pencil arrows.
 */
export function PhoneMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[375px] px-2 pt-10 pb-6 sm:px-6">
      {/* handwritten margin notes */}
      <span className="absolute left-0 top-0 font-hand text-lg leading-none text-muted-foreground">
        VTU exam in 24 days
      </span>
      <span className="absolute right-0 top-[6%] hidden -rotate-3 font-hand text-lg leading-none text-primary sm:block">
        Module 1 complete ✓
      </span>
      <span className="absolute bottom-0 left-1 rotate-2 font-hand text-lg leading-none text-muted-foreground">
        PYQs remaining
      </span>

      {/* pencil arrows pointing at journey nodes */}
      <svg
        aria-hidden
        viewBox="0 0 320 460"
        className="pointer-events-none absolute inset-0 h-full w-full text-foreground/45"
        fill="none"
      >
        <path
          d="M44 34 C 92 52, 108 92, 132 118"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path d="M132 118 l -13 -3 M132 118 l 2 -13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path
          d="M282 300 C 250 312, 228 300, 206 288"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path d="M206 288 l 13 1 M206 288 l 6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>

      {/* stacked note behind: home dashboard */}
      <div
        aria-hidden
        className="absolute left-[14%] right-[14%] top-[7%] -rotate-6 overflow-hidden rounded-[28px] border-[1.5px] border-border bg-card shadow-[0_2px_0_0_var(--ink)]"
      >
        <img
          src={homeShot.url}
          alt=""
          loading="lazy"
          decoding="async"
          className="aspect-[9/20] w-full object-cover object-top opacity-70"
        />
      </div>

      {/* front phone: journey map */}
      <figure className="paper-card relative rotate-1 rounded-[34px] p-2.5">
        <div className="ink-border overflow-hidden rounded-[26px] bg-card">
          <img
            src={heroShot.url}
            alt="Klytaq journey map — Semester 3 Computer Science, Partial Differentiation, Total Derivative, Jacobians"
            className="aspect-[9/20] w-full object-cover object-top"
            decoding="async"
          />
        </div>
      </figure>

      {/* floating stat cards */}
      {floatingCards.map((c) => (
        <span
          key={c.label}
          className={`absolute ${c.pos} inline-flex max-w-[9.5rem] items-center gap-1.5 rounded-xl border-[1.5px] border-border bg-card px-2.5 py-1.5 font-mono text-[10px] leading-none shadow-[0_2px_0_0_var(--ink)] sm:text-[11px] ${
            c.accent ? "text-primary" : ""
          }`}
        >
          <span aria-hidden>{c.icon}</span>
          <span className="truncate">{c.label}</span>
        </span>
      ))}

      <figcaption className="mt-5 text-center font-mono text-[11px] text-muted-foreground">
        Semester 3 · Computer Science / Partial Differentiation / Total Derivative / Jacobians
      </figcaption>
    </div>
  );
}
