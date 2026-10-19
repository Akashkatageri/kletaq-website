import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Download,
  Github,
  Flame,
  Calendar,
  Moon,
  Map,
  Repeat,
  CheckCircle2,
  QrCode,
  ArrowRight,
} from "lucide-react";
import { NotebookBackground } from "@/components/klytaq/NotebookBackground";
import { PhoneMockup } from "@/components/klytaq/PhoneMockup";
import { WidgetShowcase } from "@/components/klytaq/WidgetShowcase";

export const Route = createFileRoute("/")({
  component: LandingPage,
});

const branches = [
  {
    code: "CSE",
    name: "Computer Science & Engineering",
    icon: "💻",
    subjects: [
      "Mathematics for CSE",
      "Digital Design & Computer Org",
      "Operating Systems",
      "Data Structures & Apps",
    ],
  },
  {
    code: "ISE",
    name: "Information Science & Engineering",
    icon: "⚡",
    subjects: [
      "Transform Calculus & Numerical",
      "OOP with Java",
      "Data Structures",
      "UNIX & Shell Programming",
    ],
  },
  {
    code: "AIML",
    name: "Artificial Intelligence & ML",
    icon: "🤖",
    subjects: [
      "Linear Algebra & Probability",
      "Data Structures",
      "Python for AI/ML",
      "Principles of AI",
    ],
  },
  {
    code: "IoT",
    name: "Internet of Things & Security",
    icon: "🌐",
    subjects: [
      "Discrete Mathematics",
      "Microcontrollers & Embedded",
      "Sensors & Actuators",
      "Computer Networks",
    ],
  },
];

const screenShots = [
  {
    id: "roadmap",
    label: "Quest Tree",
    src: "/screens/hero_journey.png",
    title: "Visual Quest Roadmap",
    caption: "Every semester mapped into an unlocking skill tree with concept nodes and exam PYQs.",
  },
  {
    id: "home",
    label: "Dashboard",
    src: "/screens/home_dashboard.png",
    title: "Daily Study Headquarters",
    caption:
      "Keep your daily streak burning, check today's XP progress, and resume your active quest.",
  },
  {
    id: "calendar",
    label: "Study Calendar",
    src: "/screens/calendar_agenda.png",
    title: "Interactive Calendar & Exact Alarms",
    caption: "Schedule prep blocks, assignments, and exams with local alarm notifications.",
  },
  {
    id: "focus",
    label: "Focus Timer",
    src: "/screens/focus_timer.png",
    title: "Deep Work Focus Timer",
    caption: "Pomodoro sessions tied directly to your syllabus concepts with XP rewards.",
  },
  {
    id: "oled",
    label: "OLED Ambient",
    src: "/screens/oled_ambient.png",
    title: "Pitch-Black OLED Ambient Mode",
    caption: "AMOLED power-saving study timer with anti-burn-in clock drift for marathon sessions.",
  },
  {
    id: "quest",
    label: "Exam PYQs",
    src: "/screens/quest_detail.png",
    title: "Concept Breakdown & Practice",
    caption:
      "Key formulas, concise theory lessons, and verified past-year university exam questions.",
  },
  {
    id: "stats",
    label: "Stats & Profile",
    src: "/screens/profile_stats.png",
    title: "Progress & Study Analytics",
    caption: "Track total hours, streak preservation, and syllabus completion percentages.",
  },
];

function LandingPage() {
  const [activeScreenTab, setActiveScreenTab] = useState<string>("roadmap");
  const [activeBranch, setActiveBranch] = useState<string>("CSE");

  const currentScreen = (screenShots.find((s) => s.id === activeScreenTab) ?? screenShots[0])!;
  const currentBranch = (branches.find((b) => b.code === activeBranch) ?? branches[0])!;

  return (
    <div className="relative min-h-screen bg-[#0D121C] text-[#F8FAFC]">
      <NotebookBackground />

      {/* Top Navigation */}
      <header className="sticky top-0 z-50 bg-[#0D121C]/90 backdrop-blur-md border-b-2 border-[#202B3B]">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <a href="#top" className="flex items-center gap-2.5 group">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#22C55E] text-[#0D121C] font-extrabold text-lg border-2 border-[#16A34A] shadow-[0_3px_0_0_#15803D]">
              🐼
            </span>
            <span className="font-extrabold tracking-tight text-xl text-white">Kletaq</span>
            <span className="hidden sm:inline-block px-2 py-0.5 rounded-full text-[11px] font-mono font-bold bg-[#1C2638] text-emerald-400 border border-[#2B3B54]">
              v1.2
            </span>
          </a>

          {/* Nav Links */}
          <nav className="flex items-center gap-3 sm:gap-6">
            <a
              href="#tools"
              className="hidden md:inline-block text-xs font-mono font-bold text-slate-300 hover:text-white transition-colors"
            >
              Features
            </a>
            <a
              href="#curriculum"
              className="hidden md:inline-block text-xs font-mono font-bold text-slate-300 hover:text-white transition-colors"
            >
              Syllabus
            </a>
            <a
              href="#widgets"
              className="hidden md:inline-block text-xs font-mono font-bold text-amber-400 hover:text-amber-300 transition-colors"
            >
              🔥 Widget
            </a>
            <a
              href="#screens"
              className="hidden md:inline-block text-xs font-mono font-bold text-slate-300 hover:text-white transition-colors"
            >
              Screens
            </a>
            <a
              href="https://github.com/Akashkatageri/kletaq"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono font-bold text-slate-300 hover:text-white inline-flex items-center gap-1.5 transition-colors"
            >
              <Github className="h-4 w-4" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
            <a
              href="https://github.com/Akashkatageri/kletaq/releases/latest/download/kletaq.apk"
              download="kletaq.apk"
              className="btn-3d-green inline-flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-mono"
            >
              <Download className="h-3.5 w-3.5" />
              Download APK
            </a>
          </nav>
        </div>
      </header>

      <main id="top" className="space-y-20 sm:space-y-28 pb-24">
        {/* ---------- HERO SECTION ---------- */}
        <section className="mx-auto w-full max-w-6xl px-4 pt-12 sm:pt-16 sm:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full bg-[#182232] px-3.5 py-1.5 text-xs font-mono font-bold text-slate-300 border-2 border-[#29384E]">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-400 uppercase tracking-wider">
                  Engineered For University Students
                </span>
              </div>

              {/* Headline */}
              <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08]">
                Turn your engineering syllabus into <span className="text-[#22C55E]">quests.</span>
              </h1>

              {/* Subheadline */}
              <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
                Engineering syllabi are massive PDFs designed to overwhelm you. Kletaq breaks down
                every semester into an unlocking quest tree — complete with daily study streaks, an
                OLED focus timer, interactive calendar scheduling, and Android mascot widgets.
              </p>

              {/* 3D Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="https://github.com/Akashkatageri/kletaq/releases/latest/download/kletaq.apk"
                  download="kletaq.apk"
                  className="btn-3d-green inline-flex items-center gap-2.5 rounded-2xl px-6 py-3.5 text-sm"
                >
                  <Download className="h-4 w-4" />
                  Download Android APK
                  <span className="px-2 py-0.5 rounded-md bg-black/20 text-xs font-mono">
                    ~32 MB
                  </span>
                </a>

                <a
                  href="https://github.com/Akashkatageri/kletaq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-3d-dark inline-flex items-center gap-2 rounded-2xl px-5 py-3.5 text-sm"
                >
                  <Github className="h-4 w-4" />
                  Star on GitHub
                </a>
              </div>

              {/* Trust Specs */}
              <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-mono text-slate-400">
                <span>✓ Android 7.0 to 15</span>
                <span>✓ 100% Offline-First</span>
                <span>✓ Zero Ads & No Telemetry</span>
                <span>✓ Free & Open-Source</span>
              </div>

              {/* Fast Stats Row */}
              <div className="mt-8 grid grid-cols-3 gap-3 max-w-md">
                <div className="duo-card p-3 text-center">
                  <p className="text-2xl font-extrabold font-mono text-[#22C55E]">100%</p>
                  <p className="text-[11px] font-mono text-slate-400 mt-0.5">Offline-first</p>
                </div>
                <div className="duo-card p-3 text-center">
                  <p className="text-2xl font-extrabold font-mono text-amber-400">🔥 12d</p>
                  <p className="text-[11px] font-mono text-slate-400 mt-0.5">Daily streaks</p>
                </div>
                <div className="duo-card p-3 text-center">
                  <p className="text-2xl font-extrabold font-mono text-white">0</p>
                  <p className="text-[11px] font-mono text-slate-400 mt-0.5">Distractions</p>
                </div>
              </div>
            </div>

            {/* Android Device Showcase */}
            <div className="relative">
              <PhoneMockup />
            </div>
          </div>
        </section>

        {/* ---------- PROBLEM / SOLUTION STRIP ---------- */}
        <section className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <div className="duo-card p-6 sm:p-8 grid md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="h-9 w-9 rounded-xl bg-red-500/20 text-red-400 flex items-center justify-center font-bold text-lg border border-red-500/30">
                ✕
              </div>
              <h3 className="font-extrabold text-white text-base">The Syllabus Problem</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                60-page PDF syllabi, vague module weightages, and messy chaotic cramming the night
                before finals.
              </p>
            </div>

            <div className="space-y-2">
              <div className="h-9 w-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-lg border border-emerald-500/30">
                ✓
              </div>
              <h3 className="font-extrabold text-white text-base">The Kletaq Quest Engine</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Subjects mapped into visual unlocking nodes. Clear one concept at a time with
                theory, formulas, and verified past-year questions.
              </p>
            </div>

            <div className="space-y-2">
              <div className="h-9 w-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-lg border border-amber-500/30">
                🔥
              </div>
              <h3 className="font-extrabold text-white text-base">Habits That Stick</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Daily study streaks, spaced repetition review intervals, and a dynamic companion
                panda widget right on your Android home screen.
              </p>
            </div>
          </div>
        </section>

        {/* ---------- CORE TOOLS (BENTO GRID) ---------- */}
        <section id="tools" className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <span className="font-mono text-xs font-bold text-emerald-400 uppercase tracking-wider">
              Engineered For Focus
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Five tools built for serious engineering students
            </h2>
            <p className="mt-2 text-slate-400 text-sm">
              Everything in Kletaq is purpose-built to get you through your semester modules with
              clarity and consistent momentum.
            </p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* 1. Quest Roadmap */}
            <div className="duo-card p-6 flex flex-col justify-between">
              <div>
                <div className="h-10 w-10 rounded-xl bg-emerald-500/20 border-2 border-emerald-500/40 text-emerald-400 flex items-center justify-center">
                  <Map className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-xl font-extrabold text-white">Visual Quest Roadmap</h3>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                  Your entire semester mapped as an unlocking skill tree. Each module breaks down
                  into bite-sized concepts with verified past-year university exam questions.
                </p>
              </div>
              <p className="mt-4 font-mono text-xs font-bold text-emerald-400 uppercase tracking-wider">
                # Roadmap Mode
              </p>
            </div>

            {/* 2. Study Calendar */}
            <div className="duo-card p-6 flex flex-col justify-between">
              <div>
                <div className="h-10 w-10 rounded-xl bg-indigo-500/20 border-2 border-indigo-500/40 text-indigo-400 flex items-center justify-center">
                  <Calendar className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-xl font-extrabold text-white">Study Calendar & Alarms</h3>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                  Interactive monthly schedule and agenda. Set custom local alarm notifications for
                  assignment deadlines, lab internals, and semester finals.
                </p>
              </div>
              <p className="mt-4 font-mono text-xs font-bold text-indigo-400 uppercase tracking-wider">
                # Schedule & Alarms
              </p>
            </div>

            {/* 3. OLED Ambient Timer */}
            <div className="duo-card p-6 flex flex-col justify-between">
              <div>
                <div className="h-10 w-10 rounded-xl bg-amber-500/20 border-2 border-amber-500/40 text-amber-400 flex items-center justify-center">
                  <Moon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-xl font-extrabold text-white">OLED Ambient Sleep Timer</h3>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                  Deep work Pomodoro sessions on a pitch-black AMOLED sleep display. Study for 4
                  hours with under 2% battery drain and anti-burn-in clock drift.
                </p>
              </div>
              <p className="mt-4 font-mono text-xs font-bold text-amber-400 uppercase tracking-wider">
                # Battery Saver Focus
              </p>
            </div>

            {/* 4. Spaced Repetition */}
            <div className="duo-card p-6 flex flex-col justify-between">
              <div>
                <div className="h-10 w-10 rounded-xl bg-cyan-500/20 border-2 border-cyan-500/40 text-cyan-400 flex items-center justify-center">
                  <Repeat className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-xl font-extrabold text-white">Spaced Repetition Review</h3>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                  Automated review intervals prevent memory decay before finals, eliminating chaotic
                  all-nighters and locking formulas into long-term memory.
                </p>
              </div>
              <p className="mt-4 font-mono text-xs font-bold text-cyan-400 uppercase tracking-wider">
                # Memory Retention
              </p>
            </div>

            {/* 5. Mascot Widget (Balanced) */}
            <div className="duo-card p-6 flex flex-col justify-between sm:col-span-2 lg:col-span-2">
              <div className="grid sm:grid-cols-[1.2fr_0.8fr] gap-4 items-center">
                <div>
                  <div className="h-10 w-10 rounded-xl bg-orange-500/20 border-2 border-orange-500/40 text-orange-400 flex items-center justify-center">
                    <Flame className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-xl font-extrabold text-white">
                    Android Glance Mascot Widget
                  </h3>
                  <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                    A companion widget on your Android home screen that reacts throughout the day.
                    Keeps your streak visible and judges your procrastination until you clear your
                    daily quest!
                  </p>
                  <a
                    href="#widgets"
                    className="inline-flex items-center gap-1.5 mt-4 text-xs font-mono font-bold text-amber-400 hover:text-amber-300"
                  >
                    Explore Widget States <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>

                <div className="bg-[#0B0F17] p-3 rounded-2xl border-2 border-[#1E2838] flex flex-col items-center">
                  <img
                    src="/widgets/widget_preview_secured.png"
                    alt="Panda Mascot 2x1 Widget"
                    className="rounded-xl w-full max-w-[240px] shadow-lg"
                  />
                  <p className="text-[10px] font-mono text-slate-400 mt-2">
                    Atomic DataStore Streak Sync
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- WIDGET SHOWCASE SECTION (BALANCED) ---------- */}
        <section id="widgets" className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <WidgetShowcase />
        </section>

        {/* ---------- UNIVERSITIES & SYLLABUS HUB ---------- */}
        <section id="curriculum" className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <div className="duo-card p-6 sm:p-10">
            <div className="max-w-2xl">
              <span className="font-mono text-xs font-bold text-emerald-400 uppercase tracking-wider">
                Engineering Syllabi
              </span>
              <h2 className="mt-2 text-3xl font-extrabold text-white tracking-tight">
                Built for engineering colleges everywhere
              </h2>
              <p className="mt-2 text-slate-300 text-sm leading-relaxed">
                Kletaq is engineered to support university curricula across branches. Currently
                launched with full syllabus mapping for VTU 2025 scheme, with additional university
                syllabi rolling out!
              </p>
            </div>

            {/* Branch Selector Tabs */}
            <div className="mt-6 flex flex-wrap gap-2">
              {branches.map((b) => (
                <button
                  key={b.code}
                  onClick={() => setActiveBranch(b.code)}
                  className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all border-2 ${
                    activeBranch === b.code
                      ? "bg-[#22C55E] text-[#0D121C] border-[#16A34A] shadow-[0_3px_0_0_#15803D]"
                      : "bg-[#1E2738] text-slate-300 border-[#2D3C52] hover:bg-[#263346]"
                  }`}
                >
                  <span className="mr-1.5">{b.icon}</span>
                  {b.code} — {b.name}
                </button>
              ))}
            </div>

            {/* Active Branch Display */}
            <div className="mt-6 bg-[#0E1420] p-5 sm:p-6 rounded-2xl border-2 border-[#202B3B]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#202B3B]">
                <div>
                  <span className="text-xl mr-2">{currentBranch.icon}</span>
                  <span className="font-extrabold text-white text-lg">
                    {currentBranch.name} ({currentBranch.code})
                  </span>
                </div>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                  Semester 3 • Full Modules Included
                </span>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {currentBranch.subjects.map((sub, idx) => (
                  <div
                    key={sub}
                    className="p-3.5 rounded-xl bg-[#151D2A] border border-[#263448] flex items-center gap-2.5"
                  >
                    <span className="font-mono text-xs font-bold text-emerald-400">0{idx + 1}</span>
                    <span className="text-xs font-bold text-white truncate">{sub}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ---------- INTERACTIVE SCREEN TOUR ---------- */}
        <section id="screens" className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="font-mono text-xs font-bold text-emerald-400 uppercase tracking-wider">
              Inside The App
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Explore the Kletaq Interface
            </h2>
            <p className="mt-2 text-slate-400 text-sm">
              Real screenshots from the Android Benchmark release. 100% native Jetpack Compose.
            </p>
          </div>

          {/* Screen Tabs */}
          <div className="mt-6 flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
            {screenShots.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveScreenTab(s.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-bold transition-all border-2 ${
                  activeScreenTab === s.id
                    ? "bg-white text-slate-950 border-white shadow-[0_3px_0_0_#cbd5e1]"
                    : "bg-[#18212E] text-slate-300 border-[#273549] hover:border-[#384A64]"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>

          {/* Screenshot Preview Card */}
          <div className="mt-8 mx-auto max-w-xl duo-card p-4 sm:p-6">
            <div className="rounded-2xl overflow-hidden border-2 border-[#202B3B] shadow-2xl">
              <img
                src={currentScreen.src}
                alt={currentScreen.title}
                className="w-full aspect-[9/16] object-cover object-top select-none"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="font-extrabold text-white text-base">{currentScreen.title}</h3>
              <p className="text-xs font-mono text-slate-400 mt-1">{currentScreen.caption}</p>
            </div>
          </div>
        </section>

        {/* ---------- DOWNLOAD & QR CODE HERO ---------- */}
        <section id="download" className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <div className="duo-card p-8 sm:p-12">
            <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-center">
              <div>
                <span className="font-mono text-xs font-bold text-emerald-400 uppercase tracking-wider">
                  Ready to conquer your semester?
                </span>
                <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Download Kletaq for Android
                </h2>
                <p className="mt-3 text-slate-300 text-sm leading-relaxed">
                  Get the official high-speed Benchmark build directly. Includes seamless in-app OTA
                  updates via Settings &gt; Check for Updates.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href="https://github.com/Akashkatageri/kletaq/releases/latest/download/kletaq.apk"
                    download="kletaq.apk"
                    className="btn-3d-green inline-flex items-center gap-2.5 rounded-2xl px-6 py-3.5 text-sm"
                  >
                    <Download className="h-4 w-4" />
                    Download APK Directly
                    <span className="px-2 py-0.5 rounded-md bg-black/20 text-xs font-mono">
                      ~32 MB
                    </span>
                  </a>

                  <a
                    href="https://github.com/Akashkatageri/kletaq/releases/tag/Latest"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-3d-dark inline-flex items-center gap-2 rounded-2xl px-5 py-3.5 text-sm"
                  >
                    <Github className="h-4 w-4" />
                    GitHub Releases
                  </a>
                </div>

                <div className="mt-6 flex flex-wrap gap-4 text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                    <span>Android 7.0+ (Nougat through 15)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                    <span>SHA-256 Verified Binary</span>
                  </div>
                </div>
              </div>

              {/* Desktop QR Code Frame */}
              <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-[#0F1522] border-2 border-[#202B3B] text-center">
                <div className="p-3 bg-white rounded-2xl shadow-xl">
                  <img
                    src="/download-qr.png"
                    alt="Scan QR code to download Kletaq APK"
                    className="h-36 w-36 object-contain"
                  />
                </div>
                <p className="mt-4 font-extrabold text-sm text-white flex items-center gap-1.5">
                  <QrCode className="h-4 w-4 text-emerald-400" />
                  Browsing on a PC or Laptop?
                </p>
                <p className="text-xs text-slate-400 mt-1 max-w-xs">
                  Scan this QR code with your phone camera to download the APK directly to your
                  device.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t-2 border-[#202B3B] bg-[#0A0E17] py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#22C55E] text-[#0D121C] font-extrabold text-sm border border-[#16A34A]">
              🐼
            </span>
            <span className="font-extrabold text-white text-base">Kletaq</span>
            <span className="text-xs text-slate-400 font-mono">
              • Built for engineering students by Akash Katageri
            </span>
          </div>

          <div className="flex items-center gap-6 text-xs font-mono text-slate-400">
            <a
              href="https://github.com/Akashkatageri/kletaq"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors"
            >
              GitHub Repository
            </a>
            <a
              href="https://github.com/Akashkatageri/kletaq/blob/master/LICENSE"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors"
            >
              MIT License
            </a>
            <a href="#top" className="hover:text-white transition-colors">
              Back to Top ↑
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
