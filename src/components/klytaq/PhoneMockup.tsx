import { Zap, Flame, Shield, Sparkles } from "lucide-react";
import { heroShot } from "@/lib/screens";

/**
 * Precision Titanium Smartphone Mockup displaying the live VTU 2025 Journey Map.
 */
export function PhoneMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[420px] lg:max-w-[460px]">
      {/* Subtle Ambient Backlight */}
      <div
        aria-hidden
        className="absolute -inset-4 -z-10 rounded-[50px] bg-gradient-to-tr from-emerald-500/25 via-cyan-500/15 to-indigo-500/20 blur-2xl opacity-60"
      />

      {/* Floating Badge: Streak */}
      <div className="absolute -top-3 -right-2 z-20 hidden sm:flex items-center gap-2 rounded-2xl glass-panel px-3.5 py-2 text-xs font-mono font-semibold text-white shadow-xl border border-white/10 glow-emerald-sm">
        <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400 text-sm">
          🔥
        </span>
        <div>
          <p className="text-[10px] uppercase tracking-wider text-slate-400 font-normal">
            Active Streak
          </p>
          <p className="text-emerald-400 font-bold leading-none">12 Days Lit</p>
        </div>
      </div>

      {/* Floating Badge: XP */}
      <div className="absolute top-28 -left-6 z-20 hidden sm:flex items-center gap-2 rounded-2xl glass-panel px-3.5 py-2 text-xs font-mono font-semibold text-white shadow-xl border border-white/10">
        <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400">
          <Zap className="h-3.5 w-3.5 fill-amber-400" />
        </span>
        <div>
          <p className="text-[10px] uppercase tracking-wider text-slate-400 font-normal">
            Session XP
          </p>
          <p className="text-amber-300 font-bold leading-none">+240 XP Earned</p>
        </div>
      </div>

      {/* Smartphone Device Frame */}
      <div className="relative rounded-[44px] p-2.5 bg-gradient-to-b from-slate-700/80 via-slate-800/90 to-slate-950 border border-white/15 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85)]">
        {/* Inner Titanium Bezel */}
        <div className="relative overflow-hidden rounded-[36px] bg-[#090D16] border border-black/60 shadow-inner">
          {/* Dynamic Island Pill */}
          <div className="absolute top-2.5 left-1/2 -translate-x-1/2 z-30 h-4 w-20 rounded-full bg-black/90 flex items-center justify-end px-2 gap-1.5 border border-white/5">
            <span className="h-2 w-2 rounded-full bg-slate-900 border border-slate-700" />
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500/70" />
          </div>

          {/* Screenshot Display */}
          <img
            src={heroShot}
            alt="Kletaq VTU Journey Map - Semester 3 Mathematics Quests"
            className="w-full aspect-[9/19] object-cover object-top select-none"
            loading="eager"
            decoding="async"
          />

          {/* Bottom Nav Home Bar */}
          <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 z-30 h-1 w-28 rounded-full bg-white/30" />
        </div>
      </div>

      {/* Bottom Info Tag */}
      <div className="mt-4 flex items-center justify-center gap-2 text-center text-xs font-mono text-slate-400">
        <span className="inline-flex items-center gap-1 text-emerald-400">
          <Sparkles className="h-3.5 w-3.5" />
          VTU 2025 Scheme
        </span>
        <span>•</span>
        <span>CSE / ISE / AIML / IoT</span>
      </div>
    </div>
  );
}
