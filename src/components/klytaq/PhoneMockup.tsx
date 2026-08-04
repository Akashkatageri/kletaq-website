import { Zap, Flame, BookOpen, Target } from "lucide-react";

import heroShot from "@/assets/1.hero_screenshot.png.asset.json";
import homeShot from "@/assets/2.home_dashboard.png.asset.json";

type Card = { Icon: typeof Zap; label: string; accent?: boolean };

const leftCards: [Card, Card] = [
  { Icon: Zap, label: "840 XP", accent: true },
  { Icon: BookOpen, label: "4/12 subjects" },
];

const rightCards: [Card, Card] = [
  { Icon: Flame, label: "12-day streak" },
  { Icon: Target, label: "3 active backlogs" },
];

function StatCard({ Icon, label, accent }: Card) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-xl border-[1.5px] border-border bg-card px-2.5 py-1.5 font-mono text-[10px] leading-none shadow-[0_2px_0_0_var(--ink)] md:px-2 md:py-1.5 md:text-[10px] lg:px-3 lg:py-2 lg:text-[12px] ${
        accent ? "text-primary" : ""
      }`}
    >
      <Icon className="h-3.5 w-3.5 shrink-0" strokeWidth={1.75} />
      <span className="whitespace-nowrap">{label}</span>
    </span>
  );
}

/**
 * Hero visual: the Journey screenshot pinned in a phone frame with the home
 * dashboard tucked behind it, flanked by stat cards laid out on a grid so
 * nothing ever overlaps the phone screen.
 */
export function PhoneMockup() {
  return (
    <div className="mx-auto w-full max-w-[560px]">
      {/* note above the phone */}
      <p className="mb-3 flex items-baseline justify-between gap-4 px-1">
        <span className="-rotate-2 font-hand text-lg leading-none text-muted-foreground">
          VTU exam in 24 days
        </span>
        <span className="rotate-2 text-right font-hand text-lg leading-none text-primary">
          Module 1 complete ✓
        </span>
      </p>

      {/* top row: cards sit above the phone, outside its bounds */}
      <div className="mb-6 hidden items-center justify-between gap-6 sm:flex">
        <StatCard {...leftCards[0]} />
        <StatCard {...rightCards[0]} />
      </div>

      {/* phone */}
      <div className="relative mx-auto w-full max-w-[300px] sm:max-w-[340px]">
        <div
          aria-hidden
          className="absolute inset-x-6 top-4 -z-10 -rotate-6 overflow-hidden rounded-[26px] border-[1.5px] border-border bg-card shadow-[0_2px_0_0_var(--ink)]"
        >
          <img
            src={homeShot.url}
            alt=""
            loading="lazy"
            decoding="async"
            className="aspect-[9/13] w-full object-cover object-top opacity-55"
          />
        </div>

        <figure className="paper-card relative rotate-1 rounded-[32px] p-2.5">
          <div className="ink-border overflow-hidden rounded-[24px] bg-card">
            <img
              src={heroShot.url}
              alt="Kletaq journey map — Semester 3 Computer Science, Partial Differentiation, Total Derivative, Jacobians"
              className="aspect-[9/19] w-full object-cover object-top"
              decoding="async"
            />
          </div>
        </figure>
      </div>

      {/* bottom row (desktop/tablet) */}
      <div className="mt-6 hidden items-center justify-between gap-6 sm:flex">
        <StatCard {...leftCards[1]} />
        <StatCard {...rightCards[1]} />
      </div>

      {/* stacked cards (mobile) */}
      <div className="mt-6 flex flex-wrap justify-center gap-3 sm:hidden">
        {[...leftCards, ...rightCards].map((c) => (
          <StatCard key={c.label} {...c} />
        ))}
      </div>

      <p className="mt-4 px-1 font-hand text-lg leading-none text-muted-foreground">
        PYQs remaining
      </p>

      <p className="mt-4 text-center font-mono text-[11px] leading-relaxed text-muted-foreground">
        Semester 3 · Computer Science / Partial Differentiation / Total Derivative / Jacobians
      </p>
    </div>
  );
}
