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
export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  head: () => ({
    title:
      "Kletaq – AI Study Planner for Engineering Students | Turn Your Syllabus Into Quests",

    meta: [
      { charSet: "utf-8" },

      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },

      {
        name: "description",
        content:
          "Kletaq is an AI-powered study planner for engineering students that turns syllabi, subjects, modules, and backlogs into interactive quests with focus sessions, progress tracking, and spaced repetition.",
      },

      {
        name: "keywords",
        content:
          "kletaq, ai study planner, engineering study app, syllabus tracker, backlog manager, study quests, VTU, productivity app, focus timer, spaced repetition",
      },

      {
        name: "author",
        content: "Akash Katageri",
      },

      {
        name: "robots",
        content: "index, follow, max-image-preview:large",
      },

      {
        property: "og:title",
        content:
          "Kletaq – AI Study Planner for Engineering Students | Turn Your Syllabus Into Quests",
      },

      {
        property: "og:description",
        content:
          "Transform your syllabus into quests, track progress, manage backlogs, and stay focused.",
      },

      {
        property: "og:type",
        content: "website",
      },

      {
        property: "og:url",
        content: "https://kletaq.5122006.xyz",
      },

      {
        property: "og:image",
        content: "https://kletaq.5122006.xyz/screens/1.hero_screenshot.webp",
      },

      {
        property: "og:site_name",
        content: "Kletaq",
      },

      {
        name: "twitter:card",
        content: "summary_large_image",
      },

      {
        name: "twitter:title",
        content: "Kletaq",
      },

      {
        name: "twitter:description",
        content: "Turn your syllabus into quests.",
      },

      {
        name: "twitter:image",
        content: "https://kletaq.5122006.xyz/screens/1.hero_screenshot.webp",
      },

      {
        name: "theme-color",
        content: "#000000",
      },
    ],

    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },

      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },

      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },

      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Caveat:wght@500;600;700&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap",
      },

      {
        rel: "icon",
        href: "/favicon.png",
        type: "image/png",
      },

      {
        rel: "apple-touch-icon",
        href: "/favicon.png",
      },

      {
        rel: "manifest",
        href: "/manifest.json",
      },

      {
        rel: "canonical",
        href: "https://kletaq.5122006.xyz",
      },
    ],

    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Kletaq",
          applicationCategory: "EducationalApplication",
          operatingSystem: "Web",
          url: "https://kletaq.5122006.xyz",
          description:
            "Kletaq is an AI-powered study planner for engineering students.",
          creator: {
            "@type": "Person",
            name: "Akash Katageri",
          },
        }),
      },

      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Kletaq",
          url: "https://kletaq.5122006.xyz",
        }),
      },
    ],
  }),

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});
