import { Sparkles } from "lucide-react";
import { heroShot } from "@/lib/screens";

/**
 * Authentic Android Smartphone Device Frame (Punch-Hole Display).
 * No iPhone dynamic island, no floating gradient blobs.
 */
export function PhoneMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[380px]">
      {/* Android Device Body with solid dark bezel */}
      <div className="relative rounded-[40px] p-3 bg-[#1A2230] border-2 border-[#2F3D52] shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
        {/* Screen Viewport */}
        <div className="relative overflow-hidden rounded-[30px] bg-[#090D14] border border-black/80 aspect-[9/19]">
          {/* Android Status Bar */}
          <div className="absolute top-0 inset-x-0 z-30 flex items-center justify-between px-6 pt-2 pb-1 bg-gradient-to-b from-black/80 to-transparent text-[11px] font-mono font-semibold text-white/90">
            <span>9:41</span>
            {/* Centered Android Punch-hole Camera */}
            <div className="h-3 w-3 rounded-full bg-black border border-white/20 shadow-inner" />
            <div className="flex items-center gap-1.5 text-[10px]">
              <span>5G</span>
              <span>100%</span>
            </div>
          </div>

          {/* Authentic In-App Screenshot: Semester Quest Roadmap */}
          <img
            src={heroShot}
            alt="Kletaq Engineering Journey Map Screen"
            className="w-full h-full object-cover object-top select-none"
            loading="eager"
            decoding="async"
          />

          {/* Android Gesture Bar */}
          <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 z-30 h-1 w-24 rounded-full bg-white/40" />
        </div>
      </div>

      {/* Caption Tag */}
      <div className="mt-3.5 flex items-center justify-center gap-2 text-center text-xs font-mono text-slate-400">
        <span className="inline-flex items-center gap-1 text-emerald-400 font-semibold">
          <Sparkles className="h-3.5 w-3.5" />
          Interactive Quest Tree
        </span>
        <span>•</span>
        <span>Concept Nodes & Exam PYQs</span>
      </div>
    </div>
  );
}
