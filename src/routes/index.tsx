import { createFileRoute } from "@tanstack/react-router";
import {
  Map,
  Swords,
  Flame,
  Repeat,
  Download,
  Calendar,
  Moon,
  Smartphone,
  Sparkles,
  QrCode,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

import {
  heroShot,
  homeShot,
  focusShot,
  questShot,
  backlogShot,
  profileShot,
  calendarShot,
  quickActionsShot,
} from "@/lib/screens";
import { NotebookBackground } from "@/components/klytaq/NotebookBackground";
import { PhoneMockup } from "@/components/klytaq/PhoneMockup";
import { DashboardPreview } from "@/components/klytaq/DashboardPreview";
import { ScreenshotSlot } from "@/components/klytaq/ScreenshotSlot";

const TITLE = "Kletaq — Turn your syllabus into quests";
const DESCRIPTION =
  "Kletaq transforms VTU engineering subjects, modules, and backlogs into a visual learning journey. Built with Google Calendar scheduling, an OLED battery-saving focus timer, and live home widgets.";

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
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Kletaq",
          url: `${SITE_URL}/`,
        }),
      },
    ],
  }),
  component: Index,
});

const features = [
  {
    icon: Map,
    title: "Journey Mode",
    body: "Your whole semester as one interactive quest path. Modules unlock as you clear them, so the next topic is never a guess.",
    tag: "roadmap",
  },
  {
    icon: Calendar,
    title: "Study Calendar",
    body: "Google Calendar-style month & agenda views. Pick exact due dates and custom notification times for exams, labs, and assignments.",
    tag: "schedule",
  },
  {
    icon: Moon,
    title: "OLED Ambient Focus",
    body: "Study for hours with zero battery anxiety. Pitch-black AMOLED sleep display keeps your timer ticking safely without screen burn-in.",
    tag: "battery-saver",
  },
  {
    icon: Smartphone,
    title: "Live Panda Widget",
    body: "Android Glance 2×1 & 4×2 home-screen widgets that atomically sync your streak, today's XP, and reactive mascot mood.",
    tag: "home-widget",
  },
  {
    icon: Swords,
    title: "Smart Quests",
    body: "Every topic becomes a focused quest with formula sheets, core concepts, and verified past-year VTU exam questions.",
    tag: "quests",
  },
  {
    icon: Sparkles,
    title: "VTU 2025 Multi-Branch",
    body: "Complete 2025 Scheme curricula for Computer Science (CSE), Information Science (ISE), IoT, and AIML branches.",
    tag: "vtu-2025",
  },
  {
    icon: Repeat,
    title: "Spaced Repetition",
    body: "Kletaq algorithmically schedules reviews before you forget, eliminating high-stress cramming the night before finals.",
    tag: "review",
  },
  {
    icon: Flame,
    title: "XP & Streaks",
    body: "Earn XP per completed topic, build daily study streaks, and watch real habit progression unfold across your semester.",
    tag: "habits",
  },
];

const shots = [
  {
    index: "01",
    label: "Home dashboard",
    caption: "Your clean daily study headquarters.",
    src: homeShot,
    items: ["Streak tracking", "Today's XP", "Continue learning", "Spaced review", "Central + button"],
  },
  {
    index: "02",
    label: "Study calendar & agenda",
    caption: "Google Calendar-style schedule with native pickers and alarms.",
    src: calendarShot,
    items: ["Month view", "Daily agenda", "Native DatePicker", "Custom alarm time", "Quick checkoff"],
  },
  {
    index: "03",
    label: "Focus timer & OLED ambient",
    caption: "Study without battery drain using pitch-black AMOLED sleep mode.",
    src: focusShot,
    items: ["Topic-tied timer", "OLED battery saver", "Anti-burn-in clock", "Panda widget companion"],
  },
  {
    index: "04",
    label: "Quick actions hub",
    caption: "Everything one tap away without cluttering the home feed.",
    src: quickActionsShot,
    items: ["Start Focus", "Add Task", "Open Calendar", "Explore Syllabus", "Clean sheet"],
  },
  {
    index: "05",
    label: "Quest overview & PYQs",
    caption: "Every module topic converted into an actionable quest.",
    src: questShot,
    items: ["Concept notes", "Formulas", "VTU PYQs", "Estimated duration", "Topic progress"],
  },
  {
    index: "06",
    label: "Backlog management",
    caption: "Structured roadmap to conquer pending backlog subjects.",
    src: backlogShot,
    items: ["Semester filter", "Backlog badge", "Completed modules", "Clear roadmap"],
  },
  {
    index: "07",
    label: "Profile & statistics",
    caption: "Track your engineering progress with privacy built in.",
    src: profileShot,
    items: ["Total XP", "Hours studied", "Topics completed", "Private study goals"],
  },
];

function Index() {
  return (
    <div className="relative min-h-screen">
      <NotebookBackground />

      {/* ---------- Nav ---------- */}
      <header className="mx-auto grid w-full max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-5 sm:px-6">
        <a href="#top" className="flex min-w-0 items-center gap-2.5">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border-[1.5px] border-border font-hand text-xl leading-none">
            K
          </span>
          <span className="truncate font-hand text-2xl leading-none">Kletaq</span>
        </a>
        <nav className="flex shrink-0 items-center gap-2 sm:gap-4">
          <a
            href="#features"
            className="hidden font-mono text-xs text-muted-foreground transition-colors hover:text-primary sm:inline"
          >
            features
          </a>
          <a
            href="#showcase"
            className="hidden font-mono text-xs text-muted-foreground transition-colors hover:text-primary sm:inline"
          >
            showcase
          </a>
          <a
            href="#screens"
            className="hidden font-mono text-xs text-muted-foreground transition-colors hover:text-primary sm:inline"
          >
            screens
          </a>
          <a
            href="https://github.com/Akashkatageri/kletaq/releases/latest/download/kletaq.apk"
            download="kletaq.apk"
            className="ink-border inline-flex items-center gap-1.5 rounded-full bg-primary px-3.5 py-1.5 font-mono text-xs font-semibold text-primary-foreground shadow-[0_2px_0_0_var(--ink)] transition-transform hover:-translate-y-0.5"
          >
            <Download className="h-3.5 w-3.5" />
            Download APK
          </a>
        </nav>
      </header>

      <main id="top">
        {/* ---------- Hero ---------- */}
        <section className="mx-auto grid w-full max-w-6xl items-center gap-8 px-4 pt-6 pb-16 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:gap-10 lg:pt-10">
          <div className="min-w-0">
            {/* What's New Tag */}
            <div className="mb-4 inline-flex flex-wrap items-center gap-2 rounded-full border-[1.5px] border-border bg-card px-3 py-1 text-xs shadow-[0_1px_0_0_var(--ink)]">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="font-mono text-[11px] font-bold text-primary uppercase tracking-wide">
                v1.1 Release:
              </span>
              <span className="font-mono text-[11px] text-muted-foreground">
                Calendar • OLED Ambient • VTU 2025 • Panda Widgets
              </span>
            </div>

            <h1 className="mt-3 font-hand text-5xl leading-[0.95] sm:text-6xl lg:text-7xl">
              Turn your syllabus into{" "}
              <span className="scribble-underline text-primary">quests.</span>
            </h1>

            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
              {DESCRIPTION}
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="https://github.com/Akashkatageri/kletaq/releases/latest/download/kletaq.apk"
                download="kletaq.apk"
                className="ink-border inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[0_2px_0_0_var(--ink)] transition-transform hover:-translate-y-0.5"
              >
                <Download className="h-4 w-4" />
                Download Android APK (v1.1)
              </a>
              <a
                href="#screens"
                className="ink-border rounded-xl bg-card px-5 py-2.5 text-sm font-semibold shadow-[0_2px_0_0_var(--ink)] transition-transform hover:-translate-y-0.5"
              >
                Explore Screens
              </a>
            </div>

            <p className="mt-3 font-mono text-xs text-muted-foreground">
              Direct download • Benchmark Edition (~22.8 MB) • Android 7.0+ • Free
            </p>

            {/* Desktop QR Scan Card */}
            <div className="mt-6 flex max-w-md items-center gap-3.5 rounded-2xl border-[1.5px] border-border bg-card p-3 shadow-[0_2px_0_0_var(--ink)]">
              <img
                src="/download-qr.png"
                alt="Scan to download Kletaq APK"
                className="h-16 w-16 shrink-0 rounded-lg border border-border bg-white p-1"
              />
              <div className="min-w-0">
                <p className="font-hand text-lg leading-tight">Browsing on a PC or Laptop?</p>
                <p className="font-mono text-[11px] text-muted-foreground">
                  Scan this QR code with your phone camera to download directly.
                </p>
              </div>
            </div>

            {/* Stats */}
            <dl className="mt-6 grid max-w-md grid-cols-3 gap-3">
              {[
                ["4", "VTU branches"],
                ["1", "map per semester"],
                ["0", "distractions"],
              ].map(([v, k]) => (
                <div key={k} className="paper-card-flat p-3">
                  <dt className="font-mono text-2xl text-primary">{v}</dt>
                  <dd className="font-mono text-[11px] text-muted-foreground">{k}</dd>
                </div>
              ))}
            </dl>
          </div>

          <PhoneMockup />
        </section>

        {/* ---------- Features ---------- */}
        <section id="features" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4">
            <div className="min-w-0">
              <p className="font-mono text-[11px] tracking-widest uppercase text-muted-foreground">
                02 — what's inside
              </p>
              <h2 className="mt-2 font-hand text-4xl leading-none sm:text-5xl">
                Eight tools for every engineer
              </h2>
            </div>
            <span className="hidden shrink-0 font-hand text-xl text-muted-foreground sm:block">
              ✎ notebook essentials
            </span>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <article
                key={f.title}
                className="paper-card group flex flex-col justify-between p-5 transition-transform hover:-translate-y-1"
              >
                <div>
                  <div className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border-[1.5px] border-border bg-card">
                      <f.icon className="h-5 w-5 text-primary" strokeWidth={1.75} />
                    </span>
                    <h3 className="truncate font-hand text-2xl leading-none">{f.title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
                </div>
                <p className="mt-4 font-mono text-[10px] tracking-widest uppercase text-primary">
                  #{f.tag}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* ---------- Showcase ---------- */}
        <section id="showcase" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
          <p className="font-mono text-[11px] tracking-widest uppercase text-muted-foreground">
            03 — showcase
          </p>
          <h2 className="mt-2 max-w-2xl font-hand text-4xl leading-none sm:text-5xl">
            The dashboard & schedule, drawn in ink
          </h2>
          <p className="mt-3 max-w-xl text-sm text-muted-foreground sm:text-base">
            No clutter. Today's quests, your Google Calendar study agenda, and real-time live Panda
            companion widget sync.
          </p>

          <div className="mt-8">
            <DashboardPreview />
          </div>
        </section>

        {/* ---------- Screens ---------- */}
        <section id="screens" className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4">
            <div className="min-w-0">
              <p className="font-mono text-[11px] tracking-widest uppercase text-muted-foreground">
                04 — screens
              </p>
              <h2 className="mt-2 font-hand text-4xl leading-none sm:text-5xl lg:text-6xl">
                Inside the app
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
                Pinned clippings from real engineering semesters — the journey roadmap, the new
                interactive calendar, and the OLED ambient focus timer.
              </p>
            </div>
            <span className="hidden shrink-0 rotate-2 font-hand text-xl text-muted-foreground sm:block">
              pinned 📌
            </span>
          </div>

          {/* Hero clipping — journey map */}
          <div className="mt-12 grid items-center gap-10 lg:grid-cols-[minmax(0,340px)_minmax(0,1fr)] lg:gap-16">
            <div className="relative mx-auto w-full max-w-[300px]">
              <span
                aria-hidden
                className="absolute -top-2 left-1/2 z-10 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-[1.5px] border-border bg-primary shadow-[0_1px_0_0_var(--ink)]"
              />
              <figure className="paper-card -rotate-1 p-2.5">
                <img
                  src={heroShot}
                  alt="Kletaq journey map for VTU Engineering"
                  loading="lazy"
                  decoding="async"
                  className="aspect-[9/20] w-full rounded-[12px] object-cover object-top"
                />
              </figure>
            </div>

            <div className="min-w-0">
              <span className="ink-border inline-flex items-center gap-2 rounded-full px-3 py-1 font-mono text-[10px] tracking-widest uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                core roadmap
              </span>
              <h3 className="mt-4 font-hand text-4xl leading-none sm:text-5xl">
                The <span className="text-primary">journey map</span>
              </h3>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
                Your entire semester mapped as an interactive path. Clear concepts, unlock next
                chapters, and master modules without feeling overwhelmed.
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {[
                  "VTU 2025 Scheme",
                  "Computer Science (CSE)",
                  "Information Science (ISE)",
                  "IoT & AIML",
                  "BCS301 Mathematics",
                  "BCS304 Data Structures",
                ].map((t) => (
                  <li
                    key={t}
                    className="ink-border rounded-full bg-card px-3 py-1 font-mono text-[11px] text-muted-foreground"
                  >
                    {t}
                  </li>
                ))}
              </ul>
              <p className="mt-6 font-hand text-xl text-muted-foreground">
                ✦ one map, one semester, zero guesswork
              </p>
            </div>
          </div>

          <div className="mt-16 h-px w-full bg-border/25" />

          {/* Remaining clippings */}
          <div className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {shots.map((s) => (
              <ScreenshotSlot key={s.label} {...s} />
            ))}
          </div>
        </section>
      </main>

      {/* ---------- Footer ---------- */}
      <footer className="mx-auto w-full max-w-6xl px-4 pb-12 sm:px-6">
        <div className="paper-card flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 sm:p-6">
          <div className="min-w-0">
            <p className="font-hand text-2xl leading-tight">
              Kletaq — Turn your syllabus into quests.
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Built by a student, for engineering students.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Akashkatageri/kletaq/releases/latest/download/kletaq.apk"
              download="kletaq.apk"
              className="ink-border inline-flex items-center gap-1.5 rounded-xl bg-primary px-3.5 py-2 font-mono text-xs font-semibold text-primary-foreground shadow-[0_2px_0_0_var(--ink)] transition-transform hover:-translate-y-0.5"
            >
              <Download className="h-3.5 w-3.5" />
              Download APK
            </a>
            <span className="shrink-0 font-mono text-[10px] tracking-widest uppercase text-muted-foreground">
              © {new Date().getFullYear()} Kletaq
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
