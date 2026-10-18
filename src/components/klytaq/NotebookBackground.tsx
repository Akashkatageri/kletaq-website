/**
 * Precision Modern Ambient Lighting Background:
 * Subtle aurora glow, radial light spotlights, and soft dot-matrix grid.
 */
export function NotebookBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Top Center Emerald & Mint Aurora Glow */}
      <div
        className="animate-aurora absolute -top-40 left-1/2 -translate-x-1/2 h-[550px] w-[850px] rounded-full blur-[140px] opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(16, 185, 129, 0.35) 0%, rgba(56, 189, 248, 0.18) 50%, transparent 80%)",
        }}
      />

      {/* Subtle Right Side Indigo Light Cone */}
      <div
        className="absolute top-[35%] -right-40 h-[600px] w-[600px] rounded-full blur-[160px] opacity-25"
        style={{
          background: "radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, transparent 70%)",
        }}
      />

      {/* Subtle Left Side Deep Emerald Spotlight */}
      <div
        className="absolute bottom-[20%] -left-40 h-[500px] w-[500px] rounded-full blur-[150px] opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(5, 150, 105, 0.35) 0%, transparent 70%)",
        }}
      />

      {/* High-Precision Dot Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60" />
    </div>
  );
}
