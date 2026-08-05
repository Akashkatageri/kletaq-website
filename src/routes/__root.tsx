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
    <div>
      <h1>404 - Page not found</h1>

      <Link to="/">Go home</Link>
    </div>
  );
}

function ErrorComponent({ error }: { error: Error }) {
  return (
    <div>
      <h1>Something went wrong</h1>

      <pre>{error.message}</pre>

      <Link to="/">Go home</Link>
    </div>
  );
}

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
          "Kletaq is an AI-powered study planner for engineering students.",
      },

      {
        name: "keywords",
        content:
          "kletaq, ai study planner, engineering study app, syllabus tracker",
      },

      {
        name: "author",
        content: "Akash Katageri",
      },

      {
        name: "robots",
        content: "index, follow",
      },

      {
        property: "og:title",
        content: "Kletaq",
      },

      {
        property: "og:description",
        content: "Turn your syllabus into quests.",
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
        name: "twitter:card",
        content: "summary_large_image",
      },
    ],

    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },

      {
        rel: "icon",
        href: "/favicon.png",
        type: "image/png",
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
  }),

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>

      <body>
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
