// Flattens the build output so Cloudflare Pages can use `dist` directly.
import { cp, rm, readdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const dist = path.resolve("dist");
const client = path.join(dist, "client");

if (!existsSync(client)) {
  console.log("[flatten-dist] no dist/client directory, nothing to do");
  process.exit(0);
}

for (const entry of await readdir(client)) {
  await cp(path.join(client, entry), path.join(dist, entry), { recursive: true });
}

await rm(client, { recursive: true, force: true });
await rm(path.join(dist, "server"), { recursive: true, force: true });

// Cloudflare Pages enforces a strict 25 MiB asset limit per static file.
// The APK is ~33 MB and served via _redirects to GitHub Releases.
// Removing it from dist ensures Cloudflare Pages asset upload succeeds.
await rm(path.join(dist, "kletaq.apk"), { force: true });

console.log("[flatten-dist] static output ready in dist/ (large assets excluded for CF Pages 25MB limit)");
