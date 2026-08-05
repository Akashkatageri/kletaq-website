# Ink & Quill Quests

Build a responsive marketing website for Klytaq in a true black-and-white Ink & Paper theme with subtle indigo accents. Use HTML/CSS only if possible in the app pages, but overall full-stack TypeScript + Tailwind + shadcn/ui is fine. The site must feel like a student notebook, not a startup SaaS landing page.

Important design constraints:
- 70% engineering notebook
- 20% productivity app
- 10% RPG progression
- Do NOT use vintage paper, parchment, wax stamps, brown colors, or old-book aesthetics.
- Use these tokens: paper-light #FAF9F6, paper-dark #121214, card-light #FFFFFF, card-dark #1C1C1E, ink-light #1A1A1A, ink-dark #F4F4F5, graphite #71717A, accent #6366F1.
- Accent color only for buttons, active links, streaks, progress, important quests.
- Typography: headings Caveat or Patrick Hand; body Inter or IBM Plex Sans; code/XP IBM Plex Mono. Do not use serif fonts.
- Every card should look like white notebook paper: 1.5px black border, 16px radius, subtle shadow. No gradients, glassmorphism, neon, blur, or glossy effects.
- Keep GitHub private and optimize for Cloudflare Pages deployment.
- Keep it lightweight and responsive for phones and desktops.

Page structure:
1) Hero section with title: 'Turn your syllabus into quests.'
   Subtitle: 'Klytaq transforms subjects, modules, and backlogs into a visual learning journey built for engineering students.'
   Hero layout should have left-side text and right-side phone mockup.
2) Features section with six cards: Journey Mode, Smart Quests, XP & Streaks, Focus Mode, Spaced Repetition, Tasks & Deadlines.
3) Showcase section with a fake dashboard preview in the same Ink & Paper style.
4) Animated background with notebook grid lines, pencil scribbles, floating formulas, and subtle paper grain, but still black-and-white.
5) Footer with: 'Klytaq — Turn your syllabus into quests. Built by a student, for students.'

Add placeholder screenshot slots and captions for:
- Hero screenshot: Semester 3 · Computer Science / Partial Differentiation / Total Derivative / Jacobians
- Home dashboard: Streak, XP, Continue learning, Spaced repetition, Daily tasks
- Focus timer: Timer running, current topic, session duration, panda widget
- Quest overview: Concepts, formulas, PYQs, estimated time, progress
- Backlog management: Semester selection, backlog badge, completed subjects, progress
- Profile / statistics: Total XP, hours studied, topics completed, current streak

Make the result polished and modern, but still clearly hand-drawn / notebook-inspired, with minimal indigo accents and no warm parchment colors.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/4e9017b2-ba94-45a9-8997-94779e8a7eeb).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
