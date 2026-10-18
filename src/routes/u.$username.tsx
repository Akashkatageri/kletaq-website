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
    <div className="relative min-h-screen bg-[#090D16] text-[#F8FAFC] flex flex-col justify-between selection:bg-emerald-500/20">
      <NotebookBackground />

      {/* Top Header */}
      <header className="mx-auto flex w-full max-w-4xl items-center justify-between px-6 py-6">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 text-slate-950 font-extrabold text-lg group-hover:scale-105 transition-transform">
            K
          </span>
          <span className="font-extrabold tracking-tight text-xl text-white">Kletaq</span>
        </Link>
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to Home
        </Link>
      </header>

      {/* Hero Invitation Card */}
      <main className="mx-auto w-full max-w-xl px-6 py-10 flex flex-col items-center">
        <div className="w-full rounded-3xl glass-panel-elevated p-8 sm:p-10 border border-white/10 text-center">
          {/* Avatar Ring */}
          <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/10 border-2 border-emerald-500/30 text-3xl shadow-inner">
            🎓
          </div>

          {/* League Invite Tag */}
          <div className="mx-auto mb-3 inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 px-3.5 py-1 text-xs font-mono font-bold text-amber-400 border border-amber-500/20">
            <Trophy className="h-3.5 w-3.5" />
            Classmate Study League
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            {displayName} is studying on Kletaq
          </h1>

          <p className="mt-3 text-sm text-slate-400 leading-relaxed max-w-md mx-auto">
            Join the study journey, master VTU syllabus modules, keep your daily study streaks
            alive, and view your semester leaderboards.
          </p>

          {/* Download CTA */}
          <div className="mt-8 flex flex-col gap-3">
            <a
              href="/kletaq.apk"
              download="kletaq.apk"
              className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-[0_0_20px_-3px_rgba(16,185,129,0.5)] transition-all hover:-translate-y-0.5"
            >
              <Download className="h-4 w-4" />
              Download Kletaq APK (Android)
            </a>
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-1.5 text-xs font-mono text-slate-400 hover:text-white transition-colors py-2"
            >
              Learn more about Kletaq
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-xs font-mono text-slate-600">
        Kletaq • Turn your engineering syllabus into quests
      </footer>
    </div>
  );
}
