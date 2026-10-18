import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Map,
  Calendar,
  Moon,
  Smartphone,
  Sparkles,
  Download,
  Github,
  Zap,
  Flame,
  CheckCircle2,
  Repeat,
  Shield,
  Layers,
  Award,
  ChevronRight,
  ArrowDown,
  QrCode,
  BookOpen,
} from "lucide-react";

import {
  heroShot,
  homeShot,
  focusShot,
  oledShot,
  calendarShot,
  questShot,
  profileShot,
} from "@/lib/screens";

import { NotebookBackground } from "@/components/klytaq/NotebookBackground";
import { PhoneMockup } from "@/components/klytaq/PhoneMockup";
import { WidgetShowcase } from "@/components/klytaq/WidgetShowcase";

const TITLE = "Kletaq — Turn Your Engineering Syllabus Into Quests";
const DESCRIPTION =
  "Kletaq transforms VTU engineering subjects, modules, and backlogs into a visual learning journey. Built with interactive study calendar scheduling, an OLED battery-saving focus timer, and live home widgets.";

const SITE_URL = "https://kletaq.5122006.xyz";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/` }],
  }),
  component: Index,
});

const coreFeatures = [
  {
    icon: Map,
    title: "Journey Quest Roadmap",
    desc: "Your entire semester mapped as an unlocking skill tree. Each module breaks down into bite-sized concepts with verified past-year VTU exam questions.",
    tag: "Roadmap",
  },
  {
    icon: Calendar,
    title: "Interactive Study Calendar",
    desc: "Month & agenda schedule views. Set custom notification reminder alarms for assignments, internal assessments, labs, and VTU finals.",
    tag: "Planner",
  },
  {
    icon: Moon,
    title: "OLED Ambient Sleep Mode",
    desc: "Study for hours with zero battery drain. Pitch-black AMOLED display keeps your timer active safely with an anti-burn-in clock.",
    tag: "Battery Saver",
  },
  {
    icon: Smartphone,
    title: "Duolingo-Style Panda Widgets",
    desc: "Glance 2x1 & 2x2 home screen widgets that atomically sync your streak count and react with expressive character moods throughout the day.",
    tag: "Glance Widgets",
  },
  {
    icon: Repeat,
    title: "Spaced Repetition Review",
    desc: "Automated review intervals prevent memory decay before finals, eliminating chaotic last-minute all-nighter cramming sessions.",
    tag: "Retention",
  },
  {
    icon: Zap,
    title: "Benchmark Native Performance",
    desc: "Engineered in 100% Jetpack Compose with offline-first Room database. Instant 120Hz scrolling, zero ads, and zero telemetry tracking.",
    tag: "Native Speed",
  },
];

const branches = [
  { code: "CSE", name: "Computer Science & Engineering", icon: "💻" },
  { code: "ISE", name: "Information Science & Engineering", icon: "⚡" },
  { code: "AIML", name: "Artificial Intelligence & Machine Learning", icon: "🤖" },
  { code: "IoT", name: "Internet of Things & Cyber Security", icon: "🌐" },
];

const screenShots = [
  {
    id: "journey",
    label: "Quest Roadmap",
    src: heroShot,
    caption: "Semester 3 Mathematics concept skill tree",
  },
  {
    id: "home",
    label: "Home Dashboard",
    src: homeShot,
    caption: "Daily streak, continuous study queue & upcoming tasks",
  },
  {
    id: "calendar",
    label: "Study Calendar",
    src: calendarShot,
    caption: "Interactive calendar with custom alarm time selector",
  },
  {
    id: "focus",
    label: "Focus Timer",
    src: focusShot,
    caption: "Dial timer tied directly to active syllabus topics",
  },
  {
    id: "oled",
    label: "OLED Ambient",
    src: oledShot,
    caption: "True pitch-black battery saving sleep screen",
  },
  {
    id: "quest",
    label: "Concept Details",
    src: questShot,
    caption: "Formula sheets, definitions and VTU PYQ questions",
  },
  {
    id: "profile",
    label: "Profile & Stats",
    src: profileShot,
    caption: "XP progression milestones and badge achievements",
  },
];

function Index() {
  const [activeScreenTab, setActiveScreenTab] = useState("journey");
  const currentScreen = (screenShots.find((s) => s.id === activeScreenTab) ?? screenShots[0])!;

  return (
    <div className="relative min-h-screen bg-[#090D16] text-[#F8FAFC]">
      <NotebookBackground />

      {/* ---------- Glass Navbar ---------- */}
      <header className="sticky top-0 z-50 glass-panel border-b border-white/5">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6">
          <a href="#top" className="flex items-center gap-2.5 group">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 text-slate-950 font-extrabold text-lg shadow-[0_0_15px_rgba(16,185,129,0.4)] group-hover:scale-105 transition-transform">
              K
            </span>
            <span className="font-extrabold tracking-tight text-xl text-white">Kletaq</span>
            <span className="hidden sm:inline-block px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              v1.2
            </span>
          </a>

          <nav className="flex items-center gap-4 sm:gap-6">
            <a
              href="#features"
              className="hidden md:inline-block text-xs font-mono text-slate-400 hover:text-white transition-colors"
            >
              Features
            </a>
            <a
              href="#widgets"
              className="hidden md:inline-block text-xs font-mono text-slate-400 hover:text-emerald-400 transition-colors"
            >
              Mascot Widgets
            </a>
            <a
              href="#screens"
              className="hidden md:inline-block text-xs font-mono text-slate-400 hover:text-white transition-colors"
            >
              Screens
            </a>
            <a
              href="https://github.com/Akashkatageri/kletaq"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-slate-400 hover:text-white inline-flex items-center gap-1.5 transition-colors"
            >
              <Github className="h-4 w-4" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
            <a
              href="/kletaq.apk"
              download="kletaq.apk"
              className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 px-4 py-2 text-xs font-mono font-bold text-slate-950 shadow-[0_0_20px_-3px_rgba(16,185,129,0.5)] transition-all hover:-translate-y-0.5"
            >
              <Download className="h-3.5 w-3.5" />
              Download APK
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        {/* ---------- Hero Section ---------- */}
        <section className="mx-auto w-full max-w-6xl px-4 pt-12 pb-20 sm:px-6 lg:pt-16">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              {/* Release Pill */}
              <div className="inline-flex items-center gap-2 rounded-full glass-panel px-3.5 py-1.5 text-xs text-slate-300 border border-white/10">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-mono text-emerald-400 font-bold uppercase tracking-wider text-[11px]">
                  v1.2 Benchmark Edition:
                </span>
                <span className="font-mono text-slate-400 text-[11px] hidden sm:inline">
                  Dynamic Panda Widgets • VTU 2025 Scheme
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="mt-5 text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05]">
                Turn your syllabus into <span className="text-gradient-emerald">quests.</span>
              </h1>

              {/* Subtitle */}
              <p className="mt-5 text-base sm:text-lg text-slate-400 leading-relaxed max-w-xl">
                Transform complex engineering modules and backlog anxiety into an interactive visual
                roadmap. Complete with live Duolingo-style panda desktop widgets, battery-saving
                OLED focus timer, and smart study calendar scheduling.
              </p>

              {/* CTA Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <a
                  href="/kletaq.apk"
                  download="kletaq.apk"
                  className="inline-flex items-center gap-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-[0_0_25px_-5px_rgba(16,185,129,0.6)] transition-all hover:-translate-y-0.5"
                >
                  <Download className="h-4 w-4" />
                  Download Android APK
                  <span className="px-2 py-0.5 rounded-md bg-slate-950/20 text-slate-950 font-mono text-xs font-semibold">
                    ~32.4 MB
                  </span>
                </a>
                <a
                  href="https://github.com/Akashkatageri/kletaq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl glass-panel hover:bg-slate-800 px-5 py-3.5 text-sm font-semibold text-slate-200 border border-white/10 transition-all hover:-translate-y-0.5"
                >
                  <Github className="h-4 w-4" />
                  View on GitHub
                </a>
                <a
                  href="#widgets"
                  className="inline-flex items-center gap-1.5 rounded-xl px-4 py-3.5 text-sm font-semibold text-slate-400 hover:text-white transition-colors"
                >
                  Live Widgets
                  <ChevronRight className="h-4 w-4" />
                </a>
              </div>

              {/* Quick Specs */}
              <p className="mt-3 text-xs font-mono text-slate-500">
                Direct APK download • Android 7.0+ • 100% Free & Open-Source • Zero Ads
              </p>

              {/* Key Highlights Metrics */}
              <dl className="mt-10 grid grid-cols-3 gap-3 max-w-md">
                <div className="rounded-2xl glass-panel p-3.5 border border-white/5">
                  <dt className="text-2xl font-extrabold text-emerald-400 font-mono">4</dt>
                  <dd className="text-xs text-slate-400 font-mono mt-0.5">VTU branches</dd>
                </div>
                <div className="rounded-2xl glass-panel p-3.5 border border-white/5">
                  <dt className="text-2xl font-extrabold text-white font-mono">100%</dt>
                  <dd className="text-xs text-slate-400 font-mono mt-0.5">Offline-first</dd>
                </div>
                <div className="rounded-2xl glass-panel p-3.5 border border-white/5">
                  <dt className="text-2xl font-extrabold text-emerald-400 font-mono">0</dt>
                  <dd className="text-xs text-slate-400 font-mono mt-0.5">Distractions</dd>
                </div>
              </dl>
            </div>

            {/* Hero Phone Showcase */}
            <div className="relative">
              <PhoneMockup />
            </div>
          </div>
        </section>

        {/* ---------- Interactive Mascot Widgets Section ---------- */}
        <WidgetShowcase />

        {/* ---------- Core Features Bento Grid ---------- */}
        <section id="features" className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
          <div className="max-w-2xl">
            <span className="font-mono text-xs font-semibold text-emerald-400 uppercase tracking-widest">
              Engineered For Focus
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Six tools crafted for serious engineering students.
            </h2>
            <p className="mt-3 text-slate-400 text-sm sm:text-base">
              No generic flashcard gimmicks or AI hallucinations. Everything is built around actual
              VTU syllabus modules, past-year questions, and proven cognitive science.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {coreFeatures.map((f) => (
              <article
                key={f.title}
                className="rounded-3xl glass-panel-elevated glass-panel-hover p-6 border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                      <f.icon className="h-5 w-5" />
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium bg-slate-800 text-slate-400 border border-white/5">
                      {f.tag}
                    </span>
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-white tracking-tight">{f.title}</h3>
                  <p className="mt-2 text-sm text-slate-400 leading-relaxed">{f.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ---------- VTU 2025 Multi-Branch Support ---------- */}
        <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
          <div className="rounded-3xl glass-panel p-8 sm:p-12 border border-white/10">
            <div className="max-w-xl">
              <span className="font-mono text-xs font-semibold text-emerald-400 uppercase tracking-widest">
                Official Scheme Support
              </span>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight">
                Mapped to VTU 2025 Syllabus
              </h2>
              <p className="mt-2 text-slate-400 text-sm">
                Pre-loaded with official branch curricula, course codes (BCS301, BCS302, BCS303,
                BCS304), modules, and verified pyq questions.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {branches.map((b) => (
                <div
                  key={b.code}
                  className="rounded-2xl bg-slate-900/70 p-4 border border-white/5 hover:border-emerald-500/30 transition-colors"
                >
                  <span className="text-2xl">{b.icon}</span>
                  <p className="mt-2 font-mono font-bold text-lg text-emerald-400">{b.code}</p>
                  <p className="text-xs text-slate-300 mt-1">{b.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Interactive Screenshots Showcase ---------- */}
        <section id="screens" className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="font-mono text-xs font-semibold text-emerald-400 uppercase tracking-widest">
              In-App Tour
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight">
              Explore the Kletaq Interface
            </h2>
            <p className="mt-2 text-slate-400 text-sm">
              Take a look inside the actual Android application running in real production mode.
            </p>
          </div>

          {/* Screen Tabs */}
          <div className="mt-8 flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
            {screenShots.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveScreenTab(s.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold transition-all border ${
                  activeScreenTab === s.id
                    ? "bg-white text-slate-950 border-white shadow-lg"
                    : "bg-slate-900/60 text-slate-400 border-white/5 hover:text-white hover:bg-slate-800"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>

          {/* Screenshot Display Frame */}
          <div className="mt-8 mx-auto max-w-xl rounded-3xl glass-panel-elevated p-4 sm:p-6 border border-white/10">
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src={currentScreen.src}
                alt={currentScreen.caption}
                className="w-full aspect-[9/16] object-cover object-top select-none"
              />
            </div>
            <p className="mt-3 text-center text-xs font-mono text-slate-400">
              {currentScreen.caption}
            </p>
          </div>
        </section>

        {/* ---------- Direct Download & QR Code Section ---------- */}
        <section id="download" className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
          <div className="rounded-3xl glass-panel-elevated p-8 sm:p-12 border border-white/10 relative overflow-hidden">
            {/* Background Light Haze */}
            <div
              aria-hidden
              className="absolute -right-20 -bottom-20 h-96 w-96 rounded-full bg-emerald-500/15 blur-3xl"
            />

            <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-center">
              <div>
                <span className="font-mono text-xs font-semibold text-emerald-400 uppercase tracking-widest">
                  Ready to Start?
                </span>
                <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight">
                  Download Kletaq for Android
                </h2>
                <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                  Get the official Benchmark build directly from Cloudflare CDN or GitHub Releases.
                  Includes in-app OTA updates via Settings &gt; Check for Updates.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <a
                    href="/kletaq.apk"
                    download="kletaq.apk"
                    className="inline-flex items-center gap-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-[0_0_25px_-5px_rgba(16,185,129,0.6)] transition-all hover:-translate-y-0.5"
                  >
                    <Download className="h-4 w-4" />
                    Download APK Directly
                    <span className="px-2 py-0.5 rounded-md bg-slate-950/20 text-slate-950 font-mono text-xs font-semibold">
                      ~32.4 MB
                    </span>
                  </a>
                  <a
                    href="https://github.com/Akashkatageri/kletaq/releases/tag/Latest"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl glass-panel hover:bg-slate-800 px-5 py-3.5 text-sm font-semibold text-slate-200 border border-white/10 transition-all hover:-translate-y-0.5"
                  >
                    <Github className="h-4 w-4" />
                    GitHub Release
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

              {/* Desktop QR Scan Card */}
              <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-900/80 border border-white/10 text-center">
                <div className="p-3 bg-white rounded-2xl shadow-xl">
                  <img
                    src="/download-qr.png"
                    alt="Scan QR Code to download Kletaq APK"
                    className="h-36 w-36 object-contain"
                  />
                </div>
                <p className="mt-4 font-semibold text-sm text-white flex items-center gap-1.5">
                  <QrCode className="h-4 w-4 text-emerald-400" />
                  Visiting on your Computer?
                </p>
                <p className="text-xs text-slate-400 mt-1 max-w-xs">
                  Point your phone camera at this QR code to download the APK directly to your
                  device.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ---------- Modern Clean Footer ---------- */}
      <footer className="border-t border-white/5 bg-[#070A11] py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400 font-bold text-sm">
              K
            </span>
            <span className="font-extrabold text-white text-base">Kletaq</span>
            <span className="text-xs text-slate-500 font-mono">
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
