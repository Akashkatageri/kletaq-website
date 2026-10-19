import { useState } from "react";
import { Smartphone } from "lucide-react";

interface WidgetState {
  id: string;
  name: string;
  timeRange: string;
  badge: string;
  flameStatus: "greyed" | "lit";
  image: string;
  description: string;
  flameDesc: string;
}

const widgetStates: WidgetState[] = [
  {
    id: "morning",
    name: "Morning Fresh",
    timeRange: "08:00 AM",
    badge: "Day Begins",
    flameStatus: "greyed",
    image: "/widgets/widget_preview_morning.png",
    description:
      "Yawning sleepy panda ready to study. Streak flame stays frozen in grey until your first quest of the day.",
    flameDesc: "Muted Grey (Awaiting today's study)",
  },
  {
    id: "afternoon",
    name: "Afternoon Focus",
    timeRange: "02:30 PM",
    badge: "Study Hours",
    flameStatus: "greyed",
    image: "/widgets/widget_preview_afternoon.png",
    description:
      "Panda with glasses and textbook encouraging an afternoon review block before evening activities.",
    flameDesc: "Muted Grey (Still pending)",
  },
  {
    id: "sunset",
    name: "Sunset Warning",
    timeRange: "06:45 PM",
    badge: "Golden Hour",
    flameStatus: "greyed",
    image: "/widgets/widget_preview_sunset.png",
    description:
      "Panda glancing anxiously at the clock as daylight fades without a completed quest.",
    flameDesc: "Muted Grey (Streak expiring soon)",
  },
  {
    id: "evening",
    name: "Evening Danger",
    timeRange: "09:15 PM",
    badge: "High Alert",
    flameStatus: "greyed",
    image: "/widgets/widget_preview_evening.png",
    description:
      "Panicked panda with an ice pack on head warning you that the midnight deadline is approaching.",
    flameDesc: "Muted Grey (Danger zone)",
  },
  {
    id: "midnight",
    name: "Midnight Last Call",
    timeRange: "11:40 PM",
    badge: "Final Minutes",
    flameStatus: "greyed",
    image: "/widgets/widget_preview_midnight.png",
    description:
      "Panda in nightcap pleading for just one quick quest to protect your streak before day reset.",
    flameDesc: "Muted Grey (Final 20 minutes)",
  },
  {
    id: "secured",
    name: "Streak Secured!",
    timeRange: "On Quest Complete",
    badge: "Victory State",
    flameStatus: "lit",
    image: "/widgets/widget_preview_secured.png",
    description:
      "Panda puts on sunglasses, golden trophy pops up, and flame ignites into radiant burning fire!",
    flameDesc: "🔥 Lit Burning Fire (Streak protected!)",
  },
];

export function WidgetShowcase() {
  const [selectedId, setSelectedId] = useState<string>("secured");
  const [showHomescreen, setShowHomescreen] = useState(false);

  const active: WidgetState = (widgetStates.find((s) => s.id === selectedId) ?? widgetStates[5])!;

  return (
    <div className="duo-card p-6 sm:p-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b-2 border-[#263345]">
        <div>
          <span className="font-mono text-xs font-bold text-amber-400 uppercase tracking-wider">
            Android Glance Companion
          </span>
          <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
            Dynamic Mascot Widget that judges your procrastination
          </h3>
          <p className="text-slate-400 text-sm mt-1 max-w-xl">
            Just like Duolingo, the widget reacts to the time of day. If you haven't studied, the
            flame stays muted grey. Complete any quest to ignite the burning fire!
          </p>
        </div>

        {/* Real Homescreen Toggle */}
        <button
          onClick={() => setShowHomescreen(!showHomescreen)}
          className={`shrink-0 px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all border-2 ${
            showHomescreen
              ? "bg-emerald-500 text-slate-950 border-emerald-400"
              : "bg-[#1E2738] text-slate-300 border-[#2E3C52] hover:bg-[#28344B]"
          }`}
        >
          <Smartphone className="inline h-3.5 w-3.5 mr-1.5" />
          {showHomescreen ? "Show Widget States" : "View on Real Homescreen"}
        </button>
      </div>

      {showHomescreen ? (
        <div className="mt-6 flex flex-col items-center">
          <div className="rounded-2xl overflow-hidden border-2 border-[#263345] shadow-2xl max-w-md w-full">
            <img
              src="/widgets/live_emulator_widget_rich.png"
              alt="Kletaq 2x1 Panda Widget live on Android launcher"
              className="w-full h-auto object-cover"
            />
          </div>
          <p className="mt-3 text-xs font-mono text-slate-400">
            Live Android 15 Pixel 8 homescreen • 2×1 Glance AppWidget with atomic DataStore sync
          </p>
        </div>
      ) : (
        <div className="mt-6">
          {/* State Switcher Pills */}
          <div className="flex flex-wrap gap-2">
            {widgetStates.map((state) => {
              const isSelected = selectedId === state.id;
              const isLit = state.flameStatus === "lit";
              return (
                <button
                  key={state.id}
                  onClick={() => setSelectedId(state.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-bold transition-all border-2 ${
                    isSelected
                      ? isLit
                        ? "bg-amber-500 text-slate-950 border-amber-400 shadow-[0_3px_0_0_#b45309]"
                        : "bg-white text-slate-950 border-white shadow-[0_3px_0_0_#cbd5e1]"
                      : "bg-[#1A2230] text-slate-300 border-[#2A374A] hover:border-[#3D4E68]"
                  }`}
                >
                  <span className="mr-1">{isLit ? "🔥" : "🩶"}</span>
                  {state.name}
                </button>
              );
            })}
          </div>

          {/* Widget Preview Grid */}
          <div className="mt-6 grid lg:grid-cols-[1.1fr_0.9fr] gap-6 items-center bg-[#0F1520] p-5 sm:p-6 rounded-2xl border-2 border-[#202B3B]">
            {/* Widget Graphic Frame */}
            <div className="flex flex-col items-center justify-center">
              <div className="rounded-2xl overflow-hidden border-2 border-[#2B394D] shadow-xl w-full max-w-[420px]">
                <img
                  src={active.image}
                  alt={`${active.name} widget preview`}
                  className="w-full h-auto object-cover select-none"
                />
              </div>
              <p className="mt-2.5 text-xs font-mono text-slate-400 text-center">
                2×1 Android Glance Widget • 68×42dp mascot illustration area
              </p>
            </div>

            {/* Widget State Details */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-lg text-xs font-mono font-bold bg-[#1C2638] text-emerald-400 border border-[#2E3E58]">
                  {active.badge}
                </span>
                <span className="text-xs font-mono text-slate-400">• {active.timeRange}</span>
              </div>

              <h4 className="text-xl sm:text-2xl font-extrabold text-white">{active.name}</h4>
              <p className="text-sm text-slate-300 leading-relaxed">{active.description}</p>

              <div className="pt-2 border-t border-[#202B3B]">
                <p className="text-xs font-mono text-slate-400">
                  Flame State: <span className="font-bold text-white">{active.flameDesc}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
