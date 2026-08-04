import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * A screenshot shown as a pinned notebook clipping: thin ink border,
 * subtle shadow, a small pin dot and an editorial caption below.
 */
export function ScreenshotSlot({
  label,
  caption,
  items,
  src,
  index,
  aspect = "aspect-[9/20]",
  className,
  children,
}: {
  label: string;
  caption?: string;
  items?: string[];
  src?: string;
  index?: string;
  aspect?: string;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <figure className={cn("group flex flex-col", className)}>
      <div className="relative">
        {/* pin */}
        <span
          aria-hidden
          className="absolute -top-2 left-1/2 z-10 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-[1.5px] border-border bg-primary shadow-[0_1px_0_0_var(--ink)]"
        />
        <div
          className={cn(
            "relative flex w-full items-center justify-center overflow-hidden transition-transform duration-300 group-hover:-translate-y-1",
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
                <span className="font-mono text-[11px] text-muted-foreground">
                  paste image here
                </span>
              </div>
            ))}
        </div>
      </div>

      <figcaption className="mt-5 min-w-0 border-t-[1.5px] border-border/25 pt-4">
        <div className="flex items-baseline gap-2">
          {index ? (
            <span className="shrink-0 font-mono text-[11px] text-primary">{index}</span>
          ) : null}
          <p className="truncate font-hand text-2xl leading-none">{label}</p>
        </div>
        {caption ? (
          <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{caption}</p>
        ) : null}
        {items ? (
          <ul className="mt-3 flex flex-wrap gap-1.5">
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
