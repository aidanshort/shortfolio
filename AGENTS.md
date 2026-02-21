# Repository Guidelines

## Project Structure & Module Organization
The project is a Next.js App Router site.
- `app/` contains routes, layout, and page composition (`layout.tsx`, `page.tsx`).
- `app/components/` stores UI sections in PascalCase files (for example `Header.tsx`, `Projects.tsx`).
- `app/globals.css` defines global styles, theme variables, and base element rules.
- `public/` holds static assets served at the site root.
- `.github/workflows/ci.yml` defines CI checks for linting and build health.

Generated output folders (`.next/`, `out/`) are build artifacts; do not hand-edit them.

## Build, Test, and Development Commands
- `npm ci`: install dependencies from `package-lock.json` (preferred for CI/local parity).
- `npm run dev`: run the local dev server (default `http://localhost:3000`).
- `npm run lint`: run ESLint with Next.js core-web-vitals and TypeScript rules.
- `npm run build`: create a production build and static export (`output: "export"`).
- `npm start`: serve the production build.
- `npm test --if-present`: used by CI as a placeholder if tests are added.

## Coding Style & Naming Conventions
- Language: TypeScript with `strict` mode enabled.
- Formatting: 2-space indentation, semicolons, and double quotes to match current files.
- Components: PascalCase file names and component names (example: `Contact.tsx`).
- Imports: prefer the `@/*` alias for root-relative imports.
- Styling: Tailwind utility classes in components; keep shared design tokens in `app/globals.css`.

## Testing Guidelines
There is no dedicated test framework configured yet. Minimum pre-PR checks:
- `npm run lint`
- `npm run build`

When adding tests, use `*.test.ts`/`*.test.tsx` naming and ensure they run through `npm test`.

## Commit & Pull Request Guidelines
Commit messages in this repo are short, imperative, and specific (for example: `Fix npm lint warnings`, `Cleanup about and contact sections`). Keep commits focused to one logical change.

For pull requests:
- Include a brief summary of what changed and why.
- Link the related issue/PR when applicable (for example `#3`).
- Add screenshots/GIFs for UI changes.
- List verification steps you ran locally.
- Update `AGENTS.md` in the same PR when project structure, tooling, or contribution workflows change.
