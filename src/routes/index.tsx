import { createFileRoute } from "@tanstack/react-router";
import {
  Map,
  Swords,
  Flame,
  Timer,
  Repeat,
  CalendarCheck,
} from "lucide-react";

import homeShot from "@/assets/2.home_dashboard.png.asset.json";
import focusShot from "@/assets/3.focus_timer.png.asset.json";
import questShot from "@/assets/4.quest_overview.png.asset.json";
import backlogShot from "@/assets/5.backlog_management.png.asset.json";
import profileShot from "@/assets/8.profile.png.asset.json";
import { NotebookBackground } from "@/components/klytaq/NotebookBackground";
import { PhoneMockup } from "@/components/klytaq/PhoneMockup";
import { DashboardPreview } from "@/components/klytaq/DashboardPreview";
import { ScreenshotSlot } from "@/components/klytaq/ScreenshotSlot";


const TITLE = "Klytaq — Turn your syllabus into quests";
const DESCRIPTION =
  "Klytaq transforms subjects, modules, and backlogs into a visual learning journey built for engineering students.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: Index,
});

const features = [
  {
    icon: Map,
    title: "Journey Mode",
    body: "Your whole semester as one map. Modules unlock as you clear them, so you always know the next step.",
    tag: "map",
  },
  {
    icon: Swords,
    title: "Smart Quests",
    body: "Every topic becomes a quest with concepts, formulas and past-year questions attached.",
    tag: "quest",
  },
  {
    icon: Flame,
    title: "XP & Streaks",
    body: "Earn XP per completed topic and keep the streak alive. Progress you can actually see.",
    tag: "xp",
  },
  {
    icon: Timer,
    title: "Focus Mode",
    body: "A distraction-free timer tied to the topic you're studying. Sessions log straight into your stats.",
    tag: "focus",
  },
  {
    icon: Repeat,
    title: "Spaced Repetition",
    body: "Klytaq schedules reviews before you forget, so exam week isn't a re-learning marathon.",
    tag: "review",
  },
  {
    icon: CalendarCheck,
    title: "Tasks & Deadlines",
    body: "Assignments, labs and backlogs in one list, ordered by what actually matters this week.",
    tag: "todo",
  },
];

const shots = [
  {
    label: "Home dashboard",
    caption: "Everything for today on one page.",
    src: homeShot.url,
    items: ["Streak", "XP", "Continue learning", "Spaced repetition", "Daily tasks"],
  },
  {
    label: "Focus timer",
    caption: "One topic, one timer, zero tabs.",
    src: focusShot.url,
    items: ["Timer running", "Current topic", "Session duration", "Panda widget"],
  },
  {
    label: "Quest overview",
    caption: "A topic broken down into what you must actually do.",
    src: questShot.url,
    items: ["Concepts", "Formulas", "PYQs", "Estimated time", "Progress"],
  },
  {
    label: "Backlog management",
    caption: "Clear old semesters without losing the current one.",
    src: backlogShot.url,
    items: ["Semester selection", "Backlog badge", "Completed subjects", "Progress"],
  },
  {
    label: "Profile / statistics",
    caption: "Proof that the semester happened.",
    src: profileShot.url,
    items: ["Total XP", "Hours studied", "Topics completed", "Current streak"],
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
          <span className="truncate font-hand text-2xl leading-none">Klytaq</span>
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
            className="ink-border rounded-full bg-primary px-3.5 py-1.5 font-mono text-xs text-primary-foreground"
          >
            Get early access
          </a>
        </nav>
      </header>

      <main id="top">
        {/* ---------- Hero ---------- */}
        <section className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 pt-8 pb-16 sm:px-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-14 lg:pt-16">
          <div className="min-w-0">
            <span className="ink-border inline-flex items-center gap-2 rounded-full px-3 py-1 font-mono text-[11px] tracking-wider uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              built by a student
            </span>

            <h1 className="mt-5 font-hand text-5xl leading-[0.95] sm:text-6xl lg:text-7xl">
              Turn your syllabus into{" "}
              <span className="scribble-underline text-primary">quests.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {DESCRIPTION}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#screens"
                className="ink-border rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[0_2px_0_0_var(--ink)] transition-transform hover:-translate-y-0.5"
              >
                Start your journey
              </a>
              <a
                href="#showcase"
                className="ink-border rounded-xl bg-card px-5 py-2.5 text-sm font-semibold shadow-[0_2px_0_0_var(--ink)] transition-transform hover:-translate-y-0.5"
              >
                See the dashboard
              </a>
            </div>

            <dl className="mt-10 grid max-w-lg grid-cols-3 gap-3">
              {[
                ["6", "core modes"],
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
                Six pages of your notebook
              </h2>
            </div>
            <span className="hidden shrink-0 font-hand text-xl text-muted-foreground sm:block">
              ↓ pick one
            </span>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <article
                key={f.title}
                className="paper-card group p-5 transition-transform hover:-translate-y-1"
              >
                <div className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border-[1.5px] border-border">
                    <f.icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <h3 className="truncate font-hand text-2xl leading-none">{f.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
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
            The dashboard, drawn in ink
          </h2>
          <p className="mt-3 max-w-xl text-sm text-muted-foreground sm:text-base">
            No dashboards full of charts you'll never read. Just today's quests, your streak and
            what's due.
          </p>

          <div className="mt-8">
            <DashboardPreview />
          </div>
        </section>

        {/* ---------- Screenshot slots ---------- */}
        <section id="screens" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
          <p className="font-mono text-[11px] tracking-widest uppercase text-muted-foreground">
            04 — screens
          </p>
          <h2 className="mt-2 font-hand text-4xl leading-none sm:text-5xl">Inside the app</h2>

          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {shots.map((s) => (
              <ScreenshotSlot key={s.label} aspect="aspect-[9/16]" {...s} />
            ))}
          </div>
        </section>
      </main>

      {/* ---------- Footer ---------- */}
      <footer className="mx-auto w-full max-w-6xl px-4 pb-12 sm:px-6">
        <div className="paper-card grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 p-5 sm:p-6">
          <div className="min-w-0">
            <p className="font-hand text-2xl leading-tight">
              Klytaq — Turn your syllabus into quests.
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Built by a student, for students.
            </p>
          </div>
          <span className="shrink-0 font-mono text-[10px] tracking-widest uppercase text-muted-foreground">
            © {new Date().getFullYear()}
          </span>
        </div>
      </footer>
    </div>
  );
}
