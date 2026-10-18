import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="min-h-screen bg-[#090D16] text-white flex flex-col items-center justify-center p-6 text-center">
      <div className="h-16 w-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 grid place-items-center text-2xl font-bold mb-4">
        404
      </div>
      <h1 className="text-3xl font-extrabold tracking-tight">Page not found</h1>
      <p className="mt-2 text-slate-400 text-sm max-w-sm">
        The study path you are looking for does not exist or has been relocated.
      </p>
      <Link
        to="/"
        className="mt-6 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-sm transition-all"
      >
        Return to Home
      </Link>
    </div>
  );
}

function ErrorComponent({ error }: { error: Error }) {
  return (
    <div className="min-h-screen bg-[#090D16] text-white flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-2xl font-bold text-red-400">Something went wrong</h1>
      <pre className="mt-4 p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 max-w-md overflow-auto font-mono text-left">
        {error.message}
      </pre>
      <Link
        to="/"
        className="mt-6 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm transition-all"
      >
        Return to Home
      </Link>
    </div>
  );
}

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  head: () => ({
    title: "Kletaq — Turn Your Engineering Syllabus Into Quests",
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "description",
        content:
          "Transform VTU engineering syllabi into visual learning journeys. Complete with live Duolingo-style panda desktop widgets, battery-saving OLED focus timer, and interactive study calendar scheduling.",
      },
      {
        name: "keywords",
        content:
          "kletaq, vtu engineering study app, visual syllabus quests, panda widget, oled focus timer, spaced repetition",
      },
      { name: "author", content: "Akash Katageri" },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Kletaq — Turn Your Engineering Syllabus Into Quests" },
      {
        property: "og:description",
        content:
          "Visual learning roadmaps for VTU engineering students with live dynamic widgets and OLED focus timer.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://kletaq.5122006.xyz" },
      {
        property: "og:image",
        content: "https://kletaq.5122006.xyz/widgets/kletaq_widgets_duolingo_matrix.png",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap",
      },
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "manifest", href: "/manifest.json" },
      { rel: "canonical", href: "https://kletaq.5122006.xyz" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body className="bg-[#090D16] text-[#F8FAFC]">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = router.subscribe("onResolved", () => {
      reportLovableError(null);
    });
    return unsubscribe;
  }, [router]);

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
