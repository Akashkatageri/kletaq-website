import { GradientBackground } from "@/components/ui/dark-gradient-background";

/**
 * Full-page 21st.dev Dark Gradient Background with geometric grid,
 * mirror texture, and subtle diagonal lines.
 */
export function NotebookBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <GradientBackground className="absolute inset-0 w-full h-full" />
    </div>
  );
}
