import { createFileRoute, Link } from "@tanstack/react-router";
import { Download, Sparkles, Trophy, ArrowRight, Flame, Smartphone, ArrowLeft } from "lucide-react";
import { NotebookBackground } from "@/components/klytaq/NotebookBackground";

export const Route = createFileRoute("/u/$username")({
  head: ({ params }) => {
    const name = decodeURIComponent(params.username || "Student");
    return {
      meta: [
        { title: `${name} invited you to Kletaq — Turn your syllabus into quests` },
        {
          name: "description",
          content: `${name} wants to study with you on Kletaq! Slay your engineering syllabus together with quest roadmaps, focus timers, and streak widgets.`,
        },
        { property: "og:title", content: `${name} invited you to study on Kletaq` },
        {
          property: "og:description",
          content: `${name} is tracking their engineering syllabus on Kletaq. Download the APK and keep the streak burning!`,
        },
      ],
    };
  },
  component: UserInvitePage,
});

function UserInvitePage() {
  const { username } = Route.useParams();
  const decoded = decodeURIComponent(username || "Fellow Engineer");

  return (
    <div className="relative min-h-screen bg-[#0D121C] text-[#F8FAFC]">
      <NotebookBackground />

      <header className="mx-auto flex w-full max-w-4xl items-center justify-between px-4 py-5 sm:px-6 border-b-2 border-[#202B3B]">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#22C55E] text-[#0D121C] font-extrabold text-sm border-2 border-[#16A34A] shadow-[0_2px_0_0_#15803D]">
            🐼
          </span>
          <span className="font-extrabold tracking-tight text-lg text-white">Kletaq</span>
        </Link>

        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-slate-300 hover:text-white transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to Home
        </Link>
      </header>

      <main className="mx-auto w-full max-w-2xl px-4 py-16 sm:px-6">
        <div className="duo-card p-6 sm:p-10 text-center">
          {/* Avatar Icon */}
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-400 border-2 border-emerald-500/40 text-3xl shadow-xl">
            🐼
          </div>

          <div className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-[#1A2230] px-3.5 py-1 text-xs font-mono font-bold text-amber-400 border border-amber-500/20">
            <Flame className="h-3.5 w-3.5 fill-amber-400" />
            Study League Invite
          </div>

          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            <span className="text-[#22C55E]">{decoded}</span> invited you to study on Kletaq!
          </h1>

          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed max-w-lg mx-auto">
            Stop drowning in messy PDF syllabi. Join {decoded} on Kletaq to unlock engineering
            concepts, schedule with exact alarms, and keep your daily streak alive.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://github.com/Akashkatageri/kletaq/releases/latest/download/kletaq.apk"
              download="kletaq.apk"
              className="btn-3d-green w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm"
            >
              <Download className="h-4 w-4" />
              Download Kletaq APK (v1.2)
            </a>

            <Link
              to="/"
              className="btn-3d-dark w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm"
            >
              Explore App
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <p className="mt-4 text-xs font-mono text-slate-400">
            Android 7.0+ • Free & Open-Source • No Ads • Direct APK
          </p>
        </div>
      </main>
    </div>
  );
}
