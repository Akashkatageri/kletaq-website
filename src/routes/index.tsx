import { createFileRoute } from "@tanstack/react-router";
import {
  Map,
  Download,
  Calendar,
  Moon,
  Smartphone,
  Sparkles,
  Zap,
  Github,
  Trophy,
  Bot,
  Repeat,
  Mail,
} from "lucide-react";

import { NotebookBackground } from "@/components/klytaq/NotebookBackground";
import { InteractiveScreenshots } from "@/components/klytaq/InteractiveScreenshots";
import { ContactSection } from "@/components/klytaq/ContactSection";
import { VisitorCounter } from "@/components/klytaq/VisitorCounter";

const TITLE = "Kletaq — Gamified Curriculum & Focus Engine for Students";
const DESCRIPTION =
  "Kletaq transforms rigid academic syllabi into visual unlocking quests. Build custom roadmaps with visual buttons or import with AI. Complete with Parkinson's Law 2× bonus XP timer, SuperMemo SM-2 spaced repetition, OLED battery-saving focus mode, and dynamic Android mascot widgets.";

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
    title: "Visual Roadmap Builder",
    tag: "#curriculum-builder",
    description:
      "Design custom course roadmaps visually with buttons to add subjects, modules, and topic nodes, or import syllabuses with AI. Built for VTU and all autonomous universities.",
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
      "Built-in Gemini AI tutor inside syllabus topics. Get step-by-step guidance on complex derivations, math formulas, and concepts without leaving the app.",
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
            href="#contact"
            className="hidden font-mono text-xs text-purple-300 font-bold transition-colors hover:text-white sm:inline-flex items-center gap-1"
          >
            <Mail className="h-3 w-3" />
            Contact
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
            <div className="mb-4 inline-flex flex-wrap items-center gap-2 rounded-full border-2 border-purple-400/30 bg-purple-950/60 backdrop-blur-md px-3.5 py-1.5 text-xs text-white shadow-[0_2px_10px_rgba(167,139,250,0.2)]">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-[11px] font-bold text-purple-300 uppercase tracking-wide">
                ✨ Visual Roadmap Builder
              </span>
              <span className="hidden sm:inline font-mono text-[11px] text-white/80">
                • Universal For All Universities
              </span>
            </div>

            {/* Headline */}
            <h1 className="mt-3 font-extrabold text-5xl leading-[1.05] sm:text-6xl lg:text-7xl text-white tracking-tight">
              Turn your syllabus into{" "}
              <span className="text-[#A78BFA] underline decoration-4 underline-offset-8">
                quests.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-5 max-w-lg text-base sm:text-lg leading-relaxed text-slate-200">
              Transform rigid college syllabi into bite-sized visual journeys. Visually
              build custom course roadmaps or import with AI. Complete with
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

          {/* Hero Smartphone Preview (clean without fake timing overlay) */}
          <div className="mx-auto w-full max-w-[340px] sm:max-w-[370px]">
            <div className="relative rounded-[42px] p-3.5 bg-[#140E26] border-2 border-[#322358] shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
              <div className="relative overflow-hidden rounded-[30px] bg-[#0A0714] border border-black aspect-[9/19.5]">
                <img
                  src="/screens/roadmap_builder.png"
                  alt="Kletaq Visual Roadmap Builder Screen"
                  className="w-full h-full object-cover object-top select-none"
                  loading="eager"
                />
              </div>
            </div>

            <div className="mt-3.5 flex items-center justify-center gap-2 text-center text-xs font-mono text-slate-200">
              <span className="inline-flex items-center gap-1 text-emerald-300 font-semibold">
                <Sparkles className="h-3.5 w-3.5" />
                Visual Roadmap Builder
              </span>
              <span>•</span>
              <span>Subjects, Modules &amp; Topic Nodes</span>
            </div>
          </div>
        </section>

                {/* ---------- Visual Roadmap Builder Spotlight Banner ---------- */}
        <section className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <div className="relative overflow-hidden rounded-3xl border-2 border-purple-500/30 bg-gradient-to-r from-purple-950/70 via-[#1C1438] to-[#120B24] p-6 sm:p-8 backdrop-blur-xl shadow-[0_12px_40px_rgba(124,58,237,0.25)]">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="space-y-3 text-left max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-purple-400/40 bg-purple-500/20 px-3 py-1 text-xs font-mono font-bold text-purple-300">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  NEW FEATURE
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Visual Roadmap Builder for All Universities &amp; Autonomous Colleges
                </h2>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  Not at VTU or studying an autonomous curriculum? You&#x27;re no longer locked into rigid presets. Build your semester roadmap visually with buttons to add custom <span className="text-purple-300 font-bold">Subjects</span> with emoji icons, <span className="text-purple-300 font-bold">Modules</span>, and <span className="text-purple-300 font-bold">Topic Nodes</span> with study duration timers—or import instantly with Gemini AI.
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-3 py-1 text-xs font-mono text-slate-200">
                    ➕ Add Subjects Manually
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-3 py-1 text-xs font-mono text-slate-200">
                    📚 Module &amp; Unit Appender
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-3 py-1 text-xs font-mono text-slate-200">
                    ⏱️ 15–45m Study Chips
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-3 py-1 text-xs font-mono text-slate-200">
                    ✨ AI Syllabus PDF Import
                  </span>
                </div>
              </div>
              <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3 w-full sm:w-auto">
                <a
                  href="#screens"
                  className="btn-3d-iris px-5 py-3 text-center text-xs font-mono font-bold rounded-xl whitespace-nowrap"
                >
                  View Roadmap Builder Screen ↓
                </a>
                <a
                  href="https://github.com/Akashkatageri/kletaq/releases/latest/download/kletaq.apk"
                  download="kletaq.apk"
                  className="btn-3d-white px-5 py-3 text-center text-xs font-mono font-bold rounded-xl whitespace-nowrap"
                >
                  Download Latest APK
                </a>
              </div>
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
              Eight tools engineered for students
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

        {/* ---------- Contact / Send Message Section (Rate Limited) ---------- */}
        <section className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <ContactSection />
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
            <span>• Built for students by Akash Katageri</span>
          </div>

          <VisitorCounter />
          <div className="flex items-center gap-4">
            <a
              href="mailto:kletaq.dev@gmail.com"
              className="hover:text-white transition-colors text-purple-300 font-bold"
            >
              kletaq.dev@gmail.com
            </a>
            <a
              href="https://github.com/Akashkatageri/kletaq"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
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
