import { useState } from "react";
import { Sparkles, Flame, Clock, Eye, CheckCircle2 } from "lucide-react";

type WidgetState = {
  id: string;
  name: string;
  timeRange: string;
  flameStatus: "grey" | "lit";
  message: string;
  themeScene: string;
  characterProps: string;
  badge: string;
  image: string;
};

const widgetStates: WidgetState[] = [
  {
    id: "morning",
    name: "Morning Fresh",
    timeRange: "5:00 AM – 11:59 AM",
    flameStatus: "grey",
    message: "Ready to learn? ⚡",
    themeScene:
      "Radiant golden sunburst rays, fluttering green bamboo leaves & morning dew sparkles",
    characterProps: "Athletic cyan workout headband winking playfully",
    badge: "Daybreak Nudge",
    image: "/widgets/widget_preview_morning.png",
  },
  {
    id: "afternoon",
    name: "Afternoon Focus",
    timeRange: "12:00 PM – 4:59 PM",
    flameStatus: "grey",
    message: "Time to practice! 📚",
    themeScene: "Warm amber gradient, spiral notebooks, yellow wooden pencils & study notes",
    characterProps: "Focused panda reading open blue textbook",
    badge: "Study Prime",
    image: "/widgets/widget_preview_afternoon.png",
  },
  {
    id: "sunset",
    name: "Sunset Warning",
    timeRange: "5:00 PM – 7:59 PM",
    flameStatus: "grey",
    message: "Don't let it break! 🔥",
    themeScene: "Sunset coral heatwaves, warning heat ripples & glowing ember sparks",
    characterProps: "Worried panda with pleading teary eyes",
    badge: "Urgency Nudge",
    image: "/widgets/widget_preview_sunset.png",
  },
  {
    id: "evening",
    name: "Evening Danger",
    timeRange: "8:00 PM – 10:59 PM",
    flameStatus: "grey",
    message: "Save your streak! 🚨",
    themeScene: "Roaring comic inferno flames licking up both borders & floating fire sparks",
    characterProps: "Panicking panda with comical dripping sweat drops",
    badge: "High Alert",
    image: "/widgets/widget_preview_evening.png",
  },
  {
    id: "midnight",
    name: "Midnight Last Call",
    timeRange: "11:00 PM – 4:59 AM",
    flameStatus: "grey",
    message: "Last chance! 🌙",
    themeScene: "Deep midnight violet sky, glowing golden crescent moon & soft cloud bed",
    characterProps: "Sleepy panda wearing striped blue-and-white nightcap with pompom",
    badge: "Final Countdown",
    image: "/widgets/widget_preview_midnight.png",
  },
  {
    id: "secured",
    name: "Streak Secured",
    timeRange: "Triggered on Study XP > 0",
    flameStatus: "lit",
    message: "Streak secured today! 🏆",
    themeScene: "Radiant emerald victory sunburst rays with 4-point golden stars & ambient motes",
    characterProps:
      "Cool panda wearing sunglasses & holding shiny Golden Trophy Cup with both paws",
    badge: "Victory Celebration",
    image: "/widgets/widget_preview_secured.png",
  },
];

export function WidgetShowcase() {
  const [selectedId, setSelectedId] = useState("secured");
  const [showEmulator, setShowEmulator] = useState(false);

  const active = (widgetStates.find((s) => s.id === selectedId) ?? widgetStates[5])!;

  return (
    <section id="widgets" className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3.5 py-1 text-xs font-mono font-medium text-emerald-400">
          <Sparkles className="h-3.5 w-3.5" />
          Android Glance 2x1 & 2x2 Desktop Widgets
        </div>
        <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
          Duolingo-Style Mascot Widgets.{" "}
          <span className="text-gradient-emerald">Live on Your Home Screen.</span>
        </h2>
        <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
          The widget reacts dynamically to your study progress throughout the day. The streak flame
          stays greyed out until you study, and bursts into burning fire with a golden trophy when
          secured!
        </p>
      </div>

      {/* State Switcher Pills */}
      <div className="mt-10 flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto">
        {widgetStates.map((s) => {
          const isSelected = s.id === selectedId && !showEmulator;
          return (
            <button
              key={s.id}
              onClick={() => {
                setSelectedId(s.id);
                setShowEmulator(false);
              }}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold transition-all border ${
                isSelected
                  ? "bg-emerald-500 text-slate-950 border-emerald-400 shadow-[0_0_20px_-3px_rgba(16,185,129,0.5)] scale-105"
                  : "bg-slate-900/80 text-slate-300 border-white/10 hover:border-emerald-500/40 hover:bg-slate-800"
              }`}
            >
              {s.flameStatus === "lit" ? "🔥" : "🩶"} {s.name}
            </button>
          );
        })}

        <button
          onClick={() => setShowEmulator(true)}
          className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold transition-all border ${
            showEmulator
              ? "bg-cyan-500 text-slate-950 border-cyan-400 shadow-[0_0_20px_-3px_rgba(6,182,212,0.5)] scale-105"
              : "bg-slate-900/80 text-cyan-300 border-cyan-500/20 hover:border-cyan-400/50 hover:bg-slate-800"
          }`}
        >
          📱 Live Homescreen Capture
        </button>
      </div>

      {/* Main Interactive Stage */}
      <div className="mt-10 rounded-3xl glass-panel-elevated p-6 sm:p-10 border border-white/10">
        {!showEmulator ? (
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
            {/* Widget Preview Card */}
            <div className="flex flex-col items-center justify-center">
              <div className="relative group w-full max-w-[480px]">
                {/* Glow Backdrop */}
                <div
                  aria-hidden
                  className={`absolute -inset-3 rounded-[36px] blur-xl opacity-50 transition-all ${
                    active.flameStatus === "lit" ? "bg-emerald-500/30" : "bg-slate-500/20"
                  }`}
                />
                {/* Widget Graphic */}
                <div className="relative rounded-[28px] overflow-hidden border border-white/20 shadow-2xl transition-transform group-hover:scale-[1.02]">
                  <img
                    src={active.image}
                    alt={`${active.name} Widget Preview`}
                    className="w-full h-auto object-cover select-none"
                  />
                </div>
              </div>
              <p className="mt-3 text-xs font-mono text-slate-400 text-center">
                2×1 Android Glance AppWidget • Fixed 42dp mascot illustration area
              </p>
            </div>

            {/* State Specs Details */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs font-semibold">
                  {active.badge}
                </span>
                <span className="text-xs font-mono text-slate-400">• {active.timeRange}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {active.name}
              </h3>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-white/5">
                  <span className="text-lg shrink-0">
                    {active.flameStatus === "lit" ? "🔥" : "🩶"}
                  </span>
                  <div>
                    <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                      Streak Flame State
                    </p>
                    <p className="text-sm font-semibold text-white">
                      {active.flameStatus === "lit"
                        ? "Lit Burning Flame (Today's study streak secured!)"
                        : "Greyed Out Flame (Waiting for today's study session)"}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-white/5">
                  <span className="text-lg shrink-0">🎨</span>
                  <div>
                    <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                      Thematic Scene
                    </p>
                    <p className="text-sm text-slate-200">{active.themeScene}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-white/5">
                  <span className="text-lg shrink-0">🐼</span>
                  <div>
                    <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                      Character Expression
                    </p>
                    <p className="text-sm text-slate-200">{active.characterProps}</p>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-slate-400">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Single-Pass Atomic DataStore Sync — Zero battery drain</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
            {/* Live Android Emulator Capture */}
            <div className="relative group w-full max-w-[460px] mx-auto">
              <div
                aria-hidden
                className="absolute -inset-3 rounded-[36px] bg-cyan-500/20 blur-xl opacity-60"
              />
              <div className="relative rounded-[28px] overflow-hidden border border-white/20 shadow-2xl">
                <img
                  src="/widgets/live_emulator_widget_rich.png"
                  alt="Live Kletaq widget on Pixel 8 Emulator"
                  className="w-full h-auto object-cover select-none"
                />
              </div>
              <p className="mt-3 text-xs font-mono text-slate-400 text-center">
                Actual physical capture on Android 14 / Pixel 8 launcher screen
              </p>
            </div>

            <div className="space-y-4">
              <span className="px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs font-semibold">
                Physical Device Capture
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Runs Natively on Android Launcher
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Kletaq widgets are built with modern <strong>Jetpack Compose Glance</strong>. When
                you complete a module quest or study session in the app, your home screen widget
                updates in real-time without polling loops or battery-hogging background alarms.
              </p>
              <ul className="space-y-2 pt-2 text-xs font-mono text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-cyan-400" />
                  <span>2×1 Compact Panda Widget & 2×2 Full Dashboard</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-cyan-400" />
                  <span>Tap widget anytime to launch directly into current quest</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-cyan-400" />
                  <span>Instant logout wipe ensures privacy on shared devices</span>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
