import { Zap, Flame, BookOpen, Target } from "lucide-react";

import heroShot from "@/assets/1.hero_screenshot.png.asset.json";
import homeShot from "@/assets/2.home_dashboard.png.asset.json";

const floatingCards = [
  { Icon: Zap, label: "840 XP", pos: "left-0 top-[16%]", accent: true },
  { Icon: Flame, label: "12-day streak", pos: "right-0 top-[34%]" },
  { Icon: BookOpen, label: "4/12 subjects", pos: "left-0 bottom-[24%]" },
  { Icon: Target, label: "3 active backlogs", pos: "right-0 bottom-[9%]" },
];

/**
 * Hero visual: the Journey screenshot pinned in a phone frame, with the home
 * dashboard tucked behind it like stacked engineering notes, plus floating
 * stat cards, handwritten margin notes and pencil arrows.
 */
export function PhoneMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[420px] px-6 pt-12 pb-10 sm:px-10">
      {/* handwritten margin notes */}
      <span className="absolute left-2 top-1 -rotate-2 font-hand text-lg leading-none text-muted-foreground">
        VTU exam in 24 days
      </span>
      <span className="absolute right-2 top-6 rotate-2 font-hand text-lg leading-none text-primary">
        Module 1 complete ✓
      </span>
      <span className="absolute bottom-1 left-6 rotate-1 font-hand text-lg leading-none text-muted-foreground">
        PYQs remaining
      </span>

      {/* pencil arrows pointing at journey nodes */}
      <svg
        aria-hidden
        viewBox="0 0 380 560"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 h-full w-full text-foreground/40"
        fill="none"
      >
        <path
          d="M62 34 C 110 54, 130 92, 156 124"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M156 124 l -14 -2 M156 124 l 1 -14"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M334 372 C 300 386, 274 372, 250 356"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M250 356 l 14 1 M250 356 l 5 13"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>

      {/* stacked note behind: home dashboard */}
      <div
        aria-hidden
        className="absolute left-4 right-14 top-[11%] -rotate-6 overflow-hidden rounded-[26px] border-[1.5px] border-border bg-card shadow-[0_2px_0_0_var(--ink)] sm:left-6 sm:right-16"
      >
        <img
          src={homeShot.url}
          alt=""
          loading="lazy"
          decoding="async"
          className="aspect-[9/13] w-full object-cover object-top opacity-55"
        />
      </div>

      {/* front phone: journey map */}
      <figure className="paper-card relative z-10 rotate-1 rounded-[32px] p-2.5">
        <div className="ink-border overflow-hidden rounded-[24px] bg-card">
          <img
            src={heroShot.url}
            alt="Klytaq journey map — Semester 3 Computer Science, Partial Differentiation, Total Derivative, Jacobians"
            className="aspect-[9/19] w-full object-cover object-top"
            decoding="async"
          />
        </div>
      </figure>

      {/* floating stat cards */}
      {floatingCards.map(({ Icon, label, pos, accent }) => (
        <span
          key={label}
          className={`absolute ${pos} inline-flex items-center gap-1.5 rounded-xl border-[1.5px] border-border bg-card px-2.5 py-1.5 font-mono text-[10px] leading-none shadow-[0_2px_0_0_var(--ink)] sm:text-[11px] ${
            accent ? "text-primary" : ""
          }`}
        >
          <Icon className="h-3.5 w-3.5 shrink-0" strokeWidth={1.75} />
          <span className="whitespace-nowrap">{label}</span>
        </span>
      ))}

      <figcaption className="relative z-10 mt-8 text-center font-mono text-[11px] leading-relaxed text-muted-foreground">
        Semester 3 · Computer Science / Partial Differentiation / Total Derivative / Jacobians
      </figcaption>
    </div>
  );
}
