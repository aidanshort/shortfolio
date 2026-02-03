# Repository Guidelines

## Vision
- This is a personal portfolio for myself, Aidan Short 
- I am a software engineer with a backend focus, but also interested in frontend development.
- Tone: professional, calm, minimal — not flashy
- Audience: hiring managers and senior engineers

## Project Structure & Module Organization
- `app/`: Next.js App Router source. Key files include `app/page.tsx` (home route), `app/layout.tsx` (root layout), and `app/globals.css` (global styles).
- `public/`: Static assets served at the site root (e.g., `/public/logo.png` -> `/logo.png`).
- `eslint.config.mjs`, `tsconfig.json`, `next.config.ts`: Tooling and framework configuration.

## Build, Test, and Development Commands
- `npm run dev`: Start the local Next.js dev server at `http://localhost:3000` with hot reload.
- `npm run build`: Create a production build in `.next/`.
- `npm run start`: Run the production server (requires `npm run build` first).
- `npm run lint`: Run ESLint using `eslint-config-next` rules.

## Coding Style & Naming Conventions
- Language: TypeScript + React (Next.js App Router).
- Indentation: 2 spaces (match existing files).
- Naming: React components use `PascalCase` (e.g., `HeroSection`), hooks use `useX` (e.g., `useScroll`), and CSS classes use `kebab-case` where applicable.
- Imports: Prefer absolute alias `@/` for project-root paths when adding new modules.
- Formatting: No explicit formatter configured; keep changes consistent with current file style.

## Testing Guidelines
- No test framework is currently configured and there are no test files.
- If you add tests, document the framework and add scripts (e.g., `npm run test`). Use naming like `*.test.tsx` and colocate near the feature or under a `tests/` directory.

## Commit & Pull Request Guidelines
- Commit history is minimal (single “Initial commit”), so no established convention yet.
- Suggested format: short, imperative subject (e.g., `Add hero section`), optional body for rationale.
- PRs should include a concise description, screenshots for UI changes, and any relevant setup or testing notes.

## Security & Configuration Tips
- Avoid committing secrets. Use environment variables in `.env.local` (not checked in).
- When adding config, keep defaults in repo config files and local-only values in `.env.local`.
