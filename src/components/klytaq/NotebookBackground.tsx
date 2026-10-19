/**
 * Full-page animated notebook background: grid rules, margin lines,
 * and monochrome paper grain. Purely decorative.
 */
export function NotebookBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* notebook grid */}
      <div className="anim-drift absolute -inset-24 grid-paper opacity-70" />

      {/* margin rule */}
      <div className="absolute inset-y-0 left-8 hidden w-px bg-border/25 md:block" />
      <div className="absolute inset-y-0 left-[38px] hidden w-px bg-border/15 md:block" />

      {/* paper grain */}
      <div className="paper-grain absolute inset-0 opacity-[0.045] mix-blend-multiply dark:opacity-[0.06] dark:mix-blend-screen" />
    </div>
  );
}
