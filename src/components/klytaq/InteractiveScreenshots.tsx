import { useState } from "react";

interface ScreenTab {
  id: string;
  label: string;
  title: string;
  description: string;
  src: string;
  tag: string;
}

const TABS: ScreenTab[] = [
  {
    id: "quest-tree",
    label: "Roadmap Builder",
    title: "Visual Roadmap Builder & Quests",
    description:
      "Design custom syllabi visually with buttons to add subjects, modules, and topic nodes, or import syllabi with AI. Features interactive milestone trees and exam model questions.",
    src: "/screens/hero_journey.png",
    tag: "Visual Builder & Universal Curricula",
  },
  {
    id: "dashboard",
    label: "Dashboard",
    title: "Home Study Headquarters",
    description:
      "Daily study streak flame, XP progression, class timetable card, and one-tap continue learning.",
    src: "/screens/home_dashboard.png",
    tag: "Clean Daily Momentum",
  },
  {
    id: "calendar",
    label: "Study Calendar",
    title: "Interactive Calendar & Agenda",
    description:
      "Month and agenda views. Schedule assignment due dates, internal tests, and set custom local notification alarms.",
    src: "/screens/calendar_agenda.png",
    tag: "Exact Local Alarms",
  },
  {
    id: "timer",
    label: "Focus Timer",
    title: "Parkinson's Law Focus Timer",
    description:
      "Time-boxed Pomodoro intervals anchored to syllabus topics. Complete on time for a 2× Bonus XP reward (40 XP).",
    src: "/screens/focus_timer.png",
    tag: "2× Parkinson's Bonus XP",
  },
  {
    id: "oled",
    label: "OLED Ambient",
    title: "OLED Battery-Saver Ambient Mode",
    description:
      "Pitch-black AMOLED sleep display keeps your timer active for 4+ hours with under 2% battery drain and anti-burn-in drift.",
    src: "/screens/oled_ambient.png",
    tag: "AMOLED Power-Saver",
  },
  {
    id: "pyqs",
    label: "Exam PYQs",
    title: "Smart Quests & PYQs",
    description:
      "Every topic broken into digestible theory, math formulas, evaluator rubrics, and verified past-year university questions.",
    src: "/screens/quest_detail.png",
    tag: "Verified Past-Year Questions",
  },
  {
    id: "stats",
    label: "Stats & Profile",
    title: "10 Competitive Leagues & Heatmaps",
    description:
      "Advance from Bronze to Diamond League, track weekly hours, inspect achievement trophies, and challenge classmates.",
    src: "/screens/profile_stats.png",
    tag: "Bronze to Diamond Leagues",
  },
];

export function InteractiveScreenshots() {
  const [activeTabId, setActiveTabId] = useState<string>("timer");
  const activeScreen = TABS.find((t) => t.id === activeTabId) || TABS[0]!;

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
      {/* Category header */}
      <div className="text-center space-y-2">
        <span className="font-mono text-xs font-bold tracking-widest uppercase text-emerald-400">
          INSIDE THE APP
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Explore the Kletaq Interface
        </h2>
        <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
          Real screenshots from the Android Benchmark release. 100% native Jetpack Compose.
        </p>
      </div>

      {/* Tabs navigation */}
      <div className="mt-8 flex flex-wrap justify-center gap-2 sm:gap-2.5 max-w-2xl px-2">
        {TABS.slice(0, 6).map((tab) => {
          const isActive = tab.id === activeTabId;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTabId(tab.id)}
              className={
                isActive
                  ? "px-4 py-2 rounded-full text-xs font-mono font-bold bg-white text-slate-950 border-2 border-white shadow-[0_3px_0_0_#CBD5E1] transition-all cursor-pointer"
                  : "px-4 py-2 rounded-full text-xs font-mono font-bold bg-[#1B1431]/80 hover:bg-[#291F47] text-slate-200 border border-white/20 transition-all cursor-pointer"
              }
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      <div className="mt-2 flex justify-center">
        {TABS.slice(6).map((tab) => {
          const isActive = tab.id === activeTabId;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTabId(tab.id)}
              className={
                isActive
                  ? "px-5 py-2 rounded-full text-xs font-mono font-bold bg-white text-slate-950 border-2 border-white shadow-[0_3px_0_0_#CBD5E1] transition-all cursor-pointer"
                  : "px-5 py-2 rounded-full text-xs font-mono font-bold bg-[#1B1431]/80 hover:bg-[#291F47] text-slate-200 border border-white/20 transition-all cursor-pointer"
              }
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Device frame preview */}
      <div className="mt-10 relative w-full max-w-[340px] sm:max-w-[370px]">
        <div className="relative rounded-[42px] p-3.5 bg-[#130E24] border-2 border-[#2F2150] shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
          {/* Screen window — clean without fake timing overlay since the screenshot already has real status bar */}
          <div className="relative overflow-hidden rounded-[30px] bg-[#0A0714] border border-black/80 aspect-[9/19.5]">
            <img
              key={activeScreen.id}
              src={activeScreen.src}
              alt={activeScreen.title}
              className="w-full h-full object-cover object-top select-none animate-in fade-in duration-200"
              loading="eager"
            />
          </div>
        </div>

        {/* Screen info pill */}
        <div className="mt-5 text-center space-y-1">
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-white/10 text-emerald-300 border border-white/20">
            {activeScreen.tag}
          </span>
          <h3 className="text-xl font-extrabold text-white">{activeScreen.title}</h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-sm mx-auto leading-relaxed">
            {activeScreen.description}
          </p>
        </div>
      </div>
    </div>
  );
}
