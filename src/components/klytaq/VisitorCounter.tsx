import { useEffect, useState } from "react";
import { Users } from "lucide-react";

const COUNTER_KEY = "kletaq_website_unique_visitors";
const DEDUPE_KEY = "kletaq_visit_timestamp";
const CACHED_COUNT_KEY = "kletaq_cached_visit_count";
const ONE_DAY_MS = 24 * 60 * 60 * 1000;

/**
 * Polymorphic (tactile 3D physical) live unique visitor counter.
 * Deduplicates page refreshes and multi-tab visits for 24 hours via localStorage.
 */
export function VisitorCounter() {
  const [count, setCount] = useState<number | null>(() => {
    if (typeof window === "undefined") return null;
    try {
      const cached = localStorage.getItem(CACHED_COUNT_KEY);
      return cached ? parseInt(cached, 10) : null;
    } catch {
      return null;
    }
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function syncVisitorCount() {
      try {
        const now = Date.now();
        const lastVisit = localStorage.getItem(DEDUPE_KEY);
        const lastVisitTime = lastVisit ? parseInt(lastVisit, 10) : 0;
        const isReturning = lastVisitTime > 0 && now - lastVisitTime < ONE_DAY_MS;

        // If visited within 24h (or page refresh), perform a read-only GET.
        // Otherwise, perform a HIT to increment unique visits.
        const endpoint = isReturning
          ? `https://countapi.mileshilliard.com/api/v1/get/${COUNTER_KEY}`
          : `https://countapi.mileshilliard.com/api/v1/hit/${COUNTER_KEY}`;

        const res = await fetch(endpoint);
        if (!res.ok) {
          if (isReturning && res.status === 404) {
            const fallbackRes = await fetch(
              `https://countapi.mileshilliard.com/api/v1/hit/${COUNTER_KEY}`
            );
            if (fallbackRes.ok) {
              const fallbackData = await fallbackRes.json();
              const val = parseInt(fallbackData.value, 10);
              if (isMounted && !isNaN(val)) {
                setCount(val);
                localStorage.setItem(DEDUPE_KEY, now.toString());
                localStorage.setItem(CACHED_COUNT_KEY, val.toString());
              }
            }
          }
          return;
        }

        const data = await res.json();
        const val = parseInt(data.value, 10);
        if (isMounted && !isNaN(val)) {
          setCount(val);
          if (!isReturning) {
            localStorage.setItem(DEDUPE_KEY, now.toString());
          }
          localStorage.setItem(CACHED_COUNT_KEY, val.toString());
        }
      } catch (err) {
        console.error("Failed to fetch visitor count:", err);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    syncVisitorCount();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div
      title="Unique daily visits · Page refreshes deduplicated"
      className="inline-flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-[#16102b] border-2 border-[#7c3aed] border-b-[5px] border-b-[#5b21b6] shadow-[0_4px_0_0_#4c1d95,0_8px_16px_rgba(0,0,0,0.35)] font-mono text-xs select-none cursor-default transition-all duration-100 hover:brightness-105 active:translate-y-[3px] active:border-b-2 active:shadow-[0_1px_0_0_#4c1d95]"
    >
      {/* Live Pulsing Indicator */}
      <span className="relative flex h-2 w-2 items-center justify-center shrink-0">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
      </span>

      {/* 3D Tactile Icon */}
      <Users className="h-3.5 w-3.5 text-purple-300 shrink-0" />

      {/* Label and Count */}
      <div className="flex items-center gap-2">
        <span className="font-black text-white tracking-wide text-xs sm:text-sm tabular-nums">
          {count !== null ? count.toLocaleString() : loading ? "..." : "---"}
        </span>
        <span className="text-[10px] font-bold uppercase tracking-widest text-purple-300/90">
          Unique Visits
        </span>
      </div>
    </div>
  );
}
