export default function Footer() {
  const name = "Aidan Short";
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200/70 bg-background py-6">
      <div className="mx-auto flex w-full max-w-5xl flex-wrap items-center justify-between gap-4 px-6 text-sm text-slate-500 sm:px-10">
        <p>© {year} {name}. All rights reserved.</p>
        <a
          className="rounded-full border border-slate-300 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 transition-colors hover:border-slate-900 hover:text-slate-900"
          href="#about"
        >
          Back to top
        </a>
      </div>
    </footer>
  );
}
