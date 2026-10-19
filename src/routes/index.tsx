import { createFileRoute } from "@tanstack/react-router";
import {
  Map,
  Flame,
  Repeat,
  Download,
  Calendar,
  Moon,
  Smartphone,
  Sparkles,
  Zap,
  Github,
  Trophy,
  Bot,
  CheckCircle2,
} from "lucide-react";

import { NotebookBackground } from "@/components/klytaq/NotebookBackground";
import { InteractiveScreenshots } from "@/components/klytaq/InteractiveScreenshots";

const TITLE = "Kletaq — Gamified Engineering Curriculum & Focus Engine";
const DESCRIPTION =
  "Kletaq transforms rigid engineering syllabi into visual unlocking quests. Complete with Parkinson's Law 2× bonus XP timer, SuperMemo SM-2 spaced repetition, OLED battery-saving focus mode, and dynamic Android mascot widgets.";

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
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Kletaq",
          description: DESCRIPTION,
          applicationCategory: "EducationalApplication",
          operatingSystem: "Android",
          url: `${SITE_URL}/`,
        }),
      },
    ],
  }),
  component: Index,
});

const tools = [
  {
    icon: Map,
    title: "Visual Quest Roadmap",
    tag: "#curriculum",
    description:
      "Engineering modules deconstructed into bite-sized concept nodes. Unlocks step-by-step with formulas, code snippets, and verified past-year questions.",
  },
  {
    icon: Zap,
    title: "Parkinson's Law 2× Bonus XP",
    tag: "#focus-stakes",
    description:
      "Compress your study duration by 15–20% to create healthy urgency. Complete your quest before the target timer to earn a 40 XP double bonus.",
  },
  {
    icon: Repeat,
    title: "SuperMemo SM-2 Spaced Repetition",
    tag: "#retention",
    description:
      "Dynamic retention tracking with 5 memory health states (Fresh to Critical). Reviews auto-scheduled before finals to permanently halt forgetting curves.",
  },
  {
    icon: Moon,
    title: "OLED Ambient Sleep Mode",
    tag: "#battery-saver",
    description:
      "Pitch-black AMOLED study timer with anti-burn-in clock drift. Run 4+ hour study marathons with under 2% battery drain on your phone.",
  },
  {
    icon: Calendar,
    title: "Study Calendar & Alarms",
    tag: "#scheduling",
    description:
      "Interactive month & agenda calendar. Schedule assignment due dates, lab exams, and set custom local notification alarms so you never miss a deadline.",
  },
  {
    icon: Trophy,
    title: "10 Competitive Leagues",
    tag: "#leaderboards",
    description:
      "Climb from Bronze through Silver, Gold, Sapphire, Ruby, Emerald, Amethyst, Pearl, and Obsidian to Diamond League with weekly Sunday resets.",
  },
  {
    icon: Smartphone,
    title: "Glance Mascot Widget",
    tag: "#home-screen",
    description:
      "2×1 home-screen companion widget with real-time atomic streak flame sync, Panda mood reactions, and late-night streak protection warnings.",
  },
  {
    icon: Bot,
    title: "Socratic AI Topic Tutor",
    tag: "#ai-tutor",
    description:
      "Built-in Gemini AI tutor inside syllabus topics. Get step-by-step guidance on complex derivations and code debugging without leaving the app.",
  },
];

function Index() {
  return (
    <div className="relative min-h-screen text-slate-100">
      <NotebookBackground />

      {/* ---------- Header Navigation ---------- */}
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-5 sm:px-6">
        <a href="#top" className="flex items-center gap-3 group">
          <img
            src="/logo.png"
            alt="Kletaq Official Logo"
            className="h-9 w-9 rounded-full object-contain shadow-[0_2px_10px_rgba(0,0,0,0.5)] border border-white/20 group-hover:scale-105 transition-transform"
          />
          <span className="font-extrabold text-2xl text-white tracking-tight">Kletaq</span>
          <span className="hidden sm:inline-block px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-white/10 text-purple-300 border border-white/20">
            v1.2 Benchmark
          </span>
        </a>
        <nav className="flex items-center gap-3 sm:gap-5">
          <a
            href="https://github.com/Akashkatageri/kletaq"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden font-mono text-xs text-white/80 transition-colors hover:text-white sm:inline-flex items-center gap-1.5"
          >
            <Github className="h-3.5 w-3.5" />
            GitHub
          </a>
          <a
            href="#tools"
            className="hidden font-mono text-xs text-white/80 transition-colors hover:text-white sm:inline"
          >
            Features
          </a>
          <a
            href="#screens"
            className="hidden font-mono text-xs text-white/80 transition-colors hover:text-white sm:inline"
          >
            Screens
          </a>
          <a
            href="https://github.com/Akashkatageri/kletaq/releases/latest/download/kletaq.apk"
            download="kletaq.apk"
            className="btn-3d-iris px-4 py-2 font-mono text-xs font-bold rounded-xl"
          >
            <Download className="h-3.5 w-3.5" />
            Download APK
          </a>
        </nav>
      </header>

      <main id="top" className="space-y-20 sm:space-y-28 pb-20">
        {/* ---------- Hero Section ---------- */}
        <section className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 pt-6 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:pt-10">
          <div className="min-w-0">
            {/* Release pill */}
            <div className="mb-4 inline-flex flex-wrap items-center gap-2 rounded-full border-2 border-white/20 bg-white/10 backdrop-blur-md px-3.5 py-1.5 text-xs text-white shadow-[0_2px_0_0_rgba(0,0,0,0.2)]">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-[11px] font-bold text-purple-300 uppercase tracking-wide">
                Engineered For University Students
              </span>
              <span className="hidden sm:inline font-mono text-[11px] text-white/70">
                • 100% Offline-First
              </span>
            </div>

            {/* Headline */}
            <h1 className="mt-3 font-extrabold text-5xl leading-[1.05] sm:text-6xl lg:text-7xl text-white tracking-tight">
              Turn your engineering syllabus into{" "}
              <span className="text-[#A78BFA] underline decoration-4 underline-offset-8">
                quests.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-5 max-w-lg text-base sm:text-lg leading-relaxed text-slate-200">
              Transform rigid university syllabi into bite-sized visual journeys. Complete with
              Parkinson's Law 2× bonus XP timer, SuperMemo SM-2 spaced repetition, OLED
              battery-saver mode, and dynamic Android companion widgets.
            </p>

            {/* Action buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href="https://github.com/Akashkatageri/kletaq/releases/latest/download/kletaq.apk"
                download="kletaq.apk"
                className="btn-3d-iris px-6 py-3.5 text-sm sm:text-base font-bold rounded-2xl"
              >
                <Download className="h-4 w-4" />
                Download Android APK (~32 MB)
              </a>
              <a
                href="https://github.com/Akashkatageri/kletaq"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-3d-white px-5 py-3.5 text-sm sm:text-base font-bold rounded-2xl"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <a
                href="#screens"
                className="btn-3d-white px-5 py-3.5 text-sm sm:text-base font-bold rounded-2xl"
              >
                Explore Screens
              </a>
            </div>

            <p className="mt-3 font-mono text-xs text-slate-300">
              Direct download • Benchmark Edition • Android 7.0 to 15 • Free &amp; Open-Source
            </p>

            {/* Desktop QR Scan Card */}
            <div className="mt-6 flex max-w-md items-center gap-3.5 rounded-2xl border-2 border-white/20 bg-white/10 backdrop-blur-md p-3.5 text-white shadow-[0_3px_0_0_rgba(0,0,0,0.2)]">
              <img
                src="/download-qr.png"
                alt="Scan to download Kletaq APK"
                className="h-16 w-16 shrink-0 rounded-xl border-2 border-white/30 bg-white p-1"
              />
              <div className="min-w-0">
                <p className="font-extrabold text-lg leading-tight text-white">
                  Browsing on a PC or Laptop?
                </p>
                <p className="font-mono text-[11px] text-slate-200">
                  Scan this QR code with your phone camera to download the APK directly.
                </p>
              </div>
            </div>

            {/* Quick stats */}
            <dl className="mt-6 grid max-w-md grid-cols-3 gap-3">
              <div className="paper-card-flat p-3 text-center">
                <dt className="font-mono text-2xl font-extrabold text-[#7C3AED]">100%</dt>
                <dd className="font-mono text-[11px] font-bold text-slate-600">Offline-first</dd>
              </div>
              <div className="paper-card-flat p-3 text-center">
                <dt className="font-mono text-2xl font-extrabold text-amber-500">🔥 12d</dt>
                <dd className="font-mono text-[11px] font-bold text-slate-600">Daily streaks</dd>
              </div>
              <div className="paper-card-flat p-3 text-center">
                <dt className="font-mono text-2xl font-extrabold text-slate-900">0</dt>
                <dd className="font-mono text-[11px] font-bold text-slate-600">Distractions</dd>
              </div>
            </dl>
          </div>

          {/* Hero Smartphone Preview */}
          <div className="mx-auto w-full max-w-[340px] sm:max-w-[370px]">
            <div className="relative rounded-[42px] p-3.5 bg-[#140E26] border-2 border-[#322358] shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
              <div className="relative overflow-hidden rounded-[30px] bg-[#0A0714] border border-black aspect-[9/19.5]">
                {/* Android Status Bar */}
                <div className="absolute top-0 inset-x-0 z-30 flex items-center justify-between px-6 pt-2 pb-1 bg-gradient-to-b from-black/80 via-black/40 to-transparent text-[11px] font-mono font-semibold text-white/90">
                  <span>9:41</span>
                  <div className="h-3.5 w-3.5 rounded-full bg-black border border-white/20 shadow-inner" />
                  <div className="flex items-center gap-1.5 text-[10px]">
                    <span>5G</span>
                    <span>100%</span>
                  </div>
                </div>

                <img
                  src="/screens/hero_journey.png"
                  alt="Kletaq Visual Quest Tree Screen"
                  className="w-full h-full object-cover object-top select-none"
                  loading="eager"
                />

                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-30 h-1 w-28 rounded-full bg-white/40" />
              </div>
            </div>

            <div className="mt-3.5 flex items-center justify-center gap-2 text-center text-xs font-mono text-slate-200">
              <span className="inline-flex items-center gap-1 text-emerald-300 font-semibold">
                <Sparkles className="h-3.5 w-3.5" />
                Visual Quest Tree
              </span>
              <span>•</span>
              <span>Concept Nodes &amp; Exam PYQs</span>
            </div>
          </div>
        </section>

        {/* ---------- Scientific Study Tools Section ---------- */}
        <section id="tools" className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <span className="font-mono text-xs font-bold tracking-widest uppercase text-purple-300">
              COGNITIVE ARCHITECTURE &amp; FOCUS
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Eight tools engineered for engineering students
            </h2>
            <p className="mt-3 text-slate-200 text-sm sm:text-base leading-relaxed">
              Built around validated cognitive psychology: Parkinson's Law urgency, Ebbinghaus
              forgetting curve spaced repetition, active recall, and distraction-free AMOLED study
              modes.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {tools.map((t) => {
              const Icon = t.icon;
              return (
                <article
                  key={t.title}
                  className="paper-card group flex flex-col justify-between p-6 transition-transform hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border-2 border-purple-100 bg-purple-50 text-purple-700 shadow-[0_2px_0_0_#E9D5FF]">
                        <Icon className="h-6 w-6 text-[#7C3AED]" />
                      </span>
                      <h3 className="font-extrabold text-xl text-slate-900 leading-snug">
                        {t.title}
                      </h3>
                    </div>
                    <p className="mt-4 text-xs sm:text-sm leading-relaxed text-slate-600">
                      {t.description}
                    </p>
                  </div>
                  <p className="mt-5 font-mono text-[11px] font-bold tracking-widest uppercase text-[#7C3AED]">
                    {t.tag}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        {/* ---------- Interactive Screenshots Section (Matches Reference) ---------- */}
        <section id="screens" className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <InteractiveScreenshots />
        </section>

        {/* ---------- Download Banner ---------- */}
        <section className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <div className="paper-card flex flex-col sm:flex-row sm:items-center justify-between gap-6 p-6 sm:p-10">
            <div className="min-w-0">
              <h3 className="font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
                Ready to conquer your semester?
              </h3>
              <p className="mt-2 text-sm text-slate-600 max-w-lg leading-relaxed">
                Download the official high-speed Benchmark APK directly to your phone. Includes
                in-app OTA updates under Settings &gt; Check for Updates.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://github.com/Akashkatageri/kletaq/releases/latest/download/kletaq.apk"
                download="kletaq.apk"
                className="btn-3d-iris px-5 py-3 text-xs sm:text-sm font-mono font-bold rounded-xl"
              >
                <Download className="h-4 w-4" />
                Download APK Directly
              </a>
              <a
                href="https://github.com/Akashkatageri/kletaq"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-3d-white px-4 py-3 text-xs sm:text-sm font-mono font-bold rounded-xl"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ---------- Footer ---------- */}
      <footer className="mx-auto w-full max-w-6xl px-4 pb-12 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-white/15 pt-6 text-xs text-slate-300 font-mono">
          <div className="flex items-center gap-2.5">
            <img
              src="/logo.png"
              alt="Kletaq Logo"
              className="h-6 w-6 rounded-full object-contain"
            />
            <span className="font-bold text-white">Kletaq</span>
            <span>• Built for engineering students by Akash Katageri</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Akashkatageri/kletaq"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub Repository
            </a>
            <a
              href="https://github.com/Akashkatageri/kletaq/releases/tag/Latest"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Releases
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
