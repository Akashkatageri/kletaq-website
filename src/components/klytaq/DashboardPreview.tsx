import { Calendar, Moon, Flame } from "lucide-react";

/** Fake dashboard preview drawn entirely in the Ink & Paper style. */
export function DashboardPreview() {
  return (
    <div className="paper-card overflow-hidden">
      {/* window bar */}
      <div className="flex items-center gap-2 border-b-[1.5px] border-border px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full border-[1.5px] border-border" />
        <span className="h-2.5 w-2.5 rounded-full border-[1.5px] border-border" />
        <span className="h-2.5 w-2.5 rounded-full border-[1.5px] border-border bg-primary" />
        <span className="ml-2 truncate font-mono text-[11px] text-muted-foreground">
          kletaq / semester-3 / vtu-2025 / live-preview
        </span>
      </div>

      <div className="grid gap-4 p-4 sm:p-6 lg:grid-cols-[minmax(0,1fr)_280px]">
        {/* Main Column */}
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { k: "Streak", v: "12 d", accent: true, icon: Flame },
              { k: "XP today", v: "240" },
              { k: "Focus Mode", v: "OLED Ambient", icon: Moon },
              { k: "Calendar", v: "3 events", icon: Calendar },
            ].map((s) => (
              <div key={s.k} className="ink-border rounded-2xl p-3">
                <p className="font-mono text-[10px] tracking-wider uppercase text-muted-foreground">
                  {s.k}
                </p>
                <p
                  className={`mt-1 font-mono text-lg font-bold sm:text-xl ${
                    s.accent ? "text-primary" : "text-foreground"
                  }`}
                >
                  {s.v}
                </p>
              </div>
            ))}
          </div>

          {/* Continue Learning */}
          <div className="ink-border ruled rounded-2xl p-4">
            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
              <div>
                <h3 className="font-hand text-2xl leading-none">Continue learning</h3>
                <p className="mt-1 font-mono text-[11px] text-muted-foreground">
                  VTU 2025 Scheme · BCS301 Mathematics
                </p>
              </div>
              <span className="shrink-0 ink-border rounded-full bg-primary px-3 py-1 font-mono text-[10px] text-primary-foreground font-semibold">
                Resume Quest
              </span>
            </div>
            <div className="mt-4 space-y-3">
              {[
                { t: "Partial Differentiation & Total Derivative", p: 72 },
                { t: "Jacobians & Maxima-Minima", p: 45 },
                { t: "Linear Algebra & Eigenvalues", p: 90 },
              ].map((row) => (
                <div key={row.t}>
                  <div className="flex items-center justify-between font-mono text-[11px]">
                    <span className="truncate">{row.t}</span>
                    <span className="shrink-0 text-muted-foreground font-bold">{row.p}%</span>
                  </div>
                  <div className="mt-1.5 h-2 overflow-hidden rounded-full border-[1.5px] border-border bg-card">
                    <div
                      className={row.p > 60 ? "h-full bg-primary" : "h-full bg-foreground"}
                      style={{ width: `${row.p}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Panda Companion & Widget Callout */}
          <div className="ink-border rounded-2xl p-4 bg-muted/20">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border-[1.5px] border-border bg-card font-hand text-xl">
                  🐼
                </span>
                <div>
                  <h4 className="font-hand text-xl leading-none">2×1 Panda Companion Widget</h4>
                  <p className="mt-0.5 font-mono text-[10px] text-muted-foreground">
                    Android Glance home-screen widget with real-time atomic streak sync
                  </p>
                </div>
              </div>
              <span className="shrink-0 ink-border rounded-full bg-card px-2.5 py-1 font-mono text-[10px] text-primary font-bold">
                🔥 12 Streak
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Calendar & Spaced Repetition */}
        <div className="space-y-4">
          {/* Calendar & Agenda */}
          <div className="ink-border rounded-2xl p-4">
            <div className="flex items-center justify-between">
              <h4 className="font-hand text-xl leading-none">Today's Schedule</h4>
              <span className="font-mono text-[10px] text-primary font-semibold">Calendar</span>
            </div>
            <ul className="mt-3 space-y-2.5 text-xs">
              {[
                { time: "10:30 AM", title: "DSA Lab Revision", done: true },
                { time: "02:00 PM", title: "Math Module 2 PYQs", done: false },
                { time: "06:30 PM", title: "Spaced Repetition Review", done: false },
              ].map((item) => (
                <li key={item.title} className="flex items-start gap-2.5">
                  <span
                    className={`mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-[5px] border-[1.5px] border-border font-mono text-[9px] ${
                      item.done ? "bg-primary text-primary-foreground font-bold" : ""
                    }`}
                  >
                    {item.done ? "✓" : ""}
                  </span>
                  <div className="min-w-0">
                    <p className={`font-mono text-[10px] ${item.done ? "text-muted-foreground line-through" : "text-primary font-semibold"}`}>
                      {item.time}
                    </p>
                    <p className={`truncate ${item.done ? "text-muted-foreground line-through" : "text-foreground font-medium"}`}>
                      {item.title}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Spaced Repetition */}
          <div className="ink-border rounded-2xl p-4">
            <h4 className="font-hand text-xl leading-none">Spaced Repetition</h4>
            <p className="mt-1 font-mono text-[11px] text-muted-foreground">6 review cards due today</p>
            <div className="mt-3 flex gap-1">
              {Array.from({ length: 14 }).map((_, i) => (
                <span
                  key={i}
                  className={`h-6 flex-1 rounded-[4px] border-[1.5px] border-border ${
                    i % 4 === 0 ? "bg-primary" : i % 3 === 0 ? "bg-foreground/80" : "bg-card"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
