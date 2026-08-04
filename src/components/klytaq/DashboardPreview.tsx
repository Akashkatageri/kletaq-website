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
          klytaq / semester-3 / journey
        </span>
      </div>

      <div className="grid gap-4 p-4 sm:p-6 lg:grid-cols-[minmax(0,1fr)_260px]">
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { k: "Streak", v: "12 d", accent: true },
              { k: "XP today", v: "240" },
              { k: "Hours", v: "3.5" },
              { k: "Topics", v: "48" },
            ].map((s) => (
              <div key={s.k} className="ink-border rounded-2xl p-3">
                <p className="font-mono text-[10px] tracking-wider uppercase text-muted-foreground">
                  {s.k}
                </p>
                <p
                  className={`font-mono text-xl ${s.accent ? "text-primary" : "text-foreground"}`}
                >
                  {s.v}
                </p>
              </div>
            ))}
          </div>

          <div className="ink-border ruled rounded-2xl p-4">
            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
              <h3 className="truncate font-hand text-2xl leading-none">Continue learning</h3>
              <span className="shrink-0 ink-border rounded-full bg-primary px-3 py-1 font-mono text-[10px] text-primary-foreground">
                Resume
              </span>
            </div>
            <div className="mt-4 space-y-3">
              {[
                { t: "Total Derivative", p: 68 },
                { t: "Jacobians", p: 24 },
                { t: "Euler's Theorem", p: 91 },
              ].map((row) => (
                <div key={row.t}>
                  <div className="flex items-center justify-between font-mono text-[11px]">
                    <span className="truncate">{row.t}</span>
                    <span className="shrink-0 text-muted-foreground">{row.p}%</span>
                  </div>
                  <div className="mt-1.5 h-2 overflow-hidden rounded-full border-[1.5px] border-border">
                    <div
                      className={row.p > 60 ? "h-full bg-primary" : "h-full bg-foreground"}
                      style={{ width: `${row.p}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="ink-border rounded-2xl p-4">
            <h4 className="font-hand text-xl leading-none">Daily tasks</h4>
            <ul className="mt-3 space-y-2 text-sm">
              {[
                ["Revise Jacobians", true],
                ["DSA — 10 PYQs", false],
                ["Focus session 25m", false],
              ].map(([label, done]) => (
                <li key={label as string} className="flex items-start gap-2">
                  <span
                    className={`mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-[5px] border-[1.5px] border-border font-mono text-[9px] ${
                      done ? "bg-primary text-primary-foreground" : ""
                    }`}
                  >
                    {done ? "✓" : ""}
                  </span>
                  <span
                    className={`min-w-0 ${done ? "text-muted-foreground line-through" : ""}`}
                  >
                    {label as string}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="ink-border rounded-2xl p-4">
            <h4 className="font-hand text-xl leading-none">Spaced repetition</h4>
            <p className="mt-1 font-mono text-[11px] text-muted-foreground">6 cards due today</p>
            <div className="mt-3 flex gap-1">
              {Array.from({ length: 14 }).map((_, i) => (
                <span
                  key={i}
                  className={`h-6 flex-1 rounded-[4px] border-[1.5px] border-border ${
                    i % 4 === 0 ? "bg-primary" : i % 3 === 0 ? "bg-foreground/80" : ""
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
