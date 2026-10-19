import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Download,
  Sparkles,
  Trophy,
  ArrowRight,
  Shield,
  Flame,
  Smartphone,
  ArrowLeft,
} from "lucide-react";
import { NotebookBackground } from "@/components/klytaq/NotebookBackground";

export const Route = createFileRoute("/u/$username")({
  head: ({ params }) => {
    const name = decodeURIComponent(params.username || "Student");
    return {
      meta: [
        { title: `${name} invited you to Kletaq — Turn your syllabus into quests` },
        {
          name: "description",
          content: `${name} wants you to join their study league on Kletaq. Compete on weekly leaderboards and track your VTU engineering progress.`,
        },
        { property: "og:title", content: `${name} invited you to Kletaq` },
        {
          property: "og:description",
          content: "Compete on weekly engineering leaderboards and turn your syllabus into quests.",
        },
        { property: "og:type", content: "website" },
      ],
    };
  },
  component: UserInvitePage,
});

function UserInvitePage() {
  const { username } = Route.useParams();
  const displayName = decodeURIComponent(username || "A classmate");

  return (
    <div className="relative min-h-screen bg-background text-foreground flex flex-col justify-between selection:bg-primary/20">
      <NotebookBackground />

      {/* Top Header */}
      <header className="mx-auto flex w-full max-w-4xl items-center justify-between px-6 py-6">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary font-bold text-lg group-hover:scale-105 transition-transform">
            K
          </span>
          <span className="font-extrabold tracking-tight text-xl">Kletaq</span>
        </Link>
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to Home
        </Link>
      </header>

      {/* Hero Invitation Card */}
      <main className="mx-auto w-full max-w-xl px-6 py-10 flex flex-col items-center">
        <div className="w-full rounded-2xl border border-border/40 bg-card/85 p-8 shadow-xl backdrop-blur-md text-center">
          {/* Avatar Ring */}
          <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 border-2 border-primary/30 text-3xl shadow-inner">
            🎓
          </div>

          {/* League Invite Tag */}
          <div className="mx-auto mb-3 inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 px-3 py-1 text-xs font-bold text-amber-500 border border-amber-500/20">
            <Trophy className="h-3.5 w-3.5" />
            Classmate League Invitation
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
            <span className="text-primary">{displayName}</span> invited you to study together!
          </h1>

          <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
            Join {displayName} on Kletaq. Compete on weekly Duolingo-style academic leaderboards,
            turn your VTU syllabus into quests, and stay focused with zero battery drain.
          </p>

          {/* Primary Action Buttons */}
          <div className="mt-8 flex flex-col gap-3 w-full">
            <a
              href="https://github.com/Akashkatageri/kletaq/releases/latest/download/kletaq.apk"
              download="kletaq.apk"
              className="btn-3d-iris w-full py-4 text-base font-bold rounded-2xl"
            >
              <Download className="h-4 w-4" />
              Download Kletaq APK (Android)
            </a>

            <a
              href={`intent://kletaq.5122006.xyz/u/${encodeURIComponent(displayName)}#Intent;scheme=https;package=com.kletaq.com;end`}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-card/50 px-6 py-3 text-xs font-semibold text-foreground hover:bg-muted/40 transition-colors"
            >
              <Smartphone className="h-3.5 w-3.5 text-muted-foreground" />
              Already have the app? Open Kletaq
            </a>
          </div>

          {/* Quick Perks */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-border/30 pt-6 text-left">
            <div className="rounded-xl bg-muted/20 p-3">
              <div className="flex items-center gap-1.5 font-bold text-xs text-foreground">
                <Trophy className="h-3.5 w-3.5 text-amber-500" />
                Weekly Leagues
              </div>
              <p className="mt-1 text-[11px] text-muted-foreground">
                Top 10 advance each week. Reset on Sunday.
              </p>
            </div>

            <div className="rounded-xl bg-muted/20 p-3">
              <div className="flex items-center gap-1.5 font-bold text-xs text-foreground">
                <Flame className="h-3.5 w-3.5 text-orange-500" />
                Study Streaks
              </div>
              <p className="mt-1 text-[11px] text-muted-foreground">
                Keep streaks alive with weekly shield protection.
              </p>
            </div>

            <div className="rounded-xl bg-muted/20 p-3">
              <div className="flex items-center gap-1.5 font-bold text-xs text-foreground">
                <Sparkles className="h-3.5 w-3.5 text-purple-400" />
                VTU 2025 Syllabi
              </div>
              <p className="mt-1 text-[11px] text-muted-foreground">
                CSE, ISE, AIML quest roadmaps & formula cards.
              </p>
            </div>
          </div>
        </div>

        {/* Explore link */}
        <p className="mt-6 text-xs text-muted-foreground">
          Want to know more?{" "}
          <Link
            to="/"
            className="font-semibold text-foreground underline underline-offset-4 hover:text-primary"
          >
            Explore all Kletaq features
          </Link>
        </p>
      </main>

      {/* Footer */}
      <footer className="mx-auto w-full max-w-4xl px-6 py-6 text-center text-xs text-muted-foreground border-t border-border/20">
        Kletaq — Engineered for VTU Students. All rights reserved.
      </footer>
    </div>
  );
}
