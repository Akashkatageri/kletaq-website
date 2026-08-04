import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * A dashed "paste your screenshot here" slot with a handwritten caption,
 * styled as notebook paper.
 */
export function ScreenshotSlot({
  label,
  caption,
  items,
  src,
  aspect = "aspect-[16/10]",
  className,
  children,
}: {
  label: string;
  caption?: string;
  items?: string[];
  src?: string;
  aspect?: string;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <figure className={cn("flex flex-col gap-3", className)}>
      <div
        className={cn(
          "relative flex w-full items-center justify-center overflow-hidden",
          src ? "paper-card p-2" : "slot-dashed p-4",
          aspect,
        )}
      >
        {!src && <div className="ruled absolute inset-0 opacity-60" />}
        {children ??
          (src ? (
            <img
              src={src}
              alt={`${label} — ${caption ?? "Klytaq app screenshot"}`}
              loading="lazy"
              decoding="async"
              className="h-full w-full rounded-[10px] object-cover object-top"
            />
          ) : (
            <div className="relative flex flex-col items-center gap-2 text-center">
              <span className="ink-border rounded-full px-3 py-1 font-mono text-[10px] tracking-widest uppercase">
                Screenshot
              </span>
              <span className="font-hand text-2xl leading-none">{label}</span>
              <span className="font-mono text-[11px] text-muted-foreground">paste image here</span>
            </div>
          ))}
      </div>

      <figcaption className="min-w-0">
        <p className="font-hand text-xl leading-tight">{label}</p>
        {caption ? <p className="text-sm text-muted-foreground">{caption}</p> : null}
        {items ? (
          <ul className="mt-2 flex flex-wrap gap-1.5">
            {items.map((i) => (
              <li
                key={i}
                className="ink-border rounded-full px-2.5 py-0.5 font-mono text-[11px] text-muted-foreground"
              >
                {i}
              </li>
            ))}
          </ul>
        ) : null}
      </figcaption>
    </figure>
  );
}
