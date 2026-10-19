import { GradientBackground } from "@/components/ui/iris-petal";

/**
 * Full-page 21st.dev Iris Petal Gradient Background with built-in
 * fractalNoise SVG grain texture and subtle margin lines.
 */
export function NotebookBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* 21st.dev Iris Petal Gradient */}
      <GradientBackground className="absolute inset-0 w-full h-full" />

      {/* Delicate margin guides */}
      <div className="absolute inset-y-0 left-8 hidden w-px bg-white/10 md:block" />
      <div className="absolute inset-y-0 left-[38px] hidden w-px bg-white/5 md:block" />
    </div>
  );
}
