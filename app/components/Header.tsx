export default function Header() {
  return (
    <header className="fixed top-0 z-20 w-full border-b border-slate-200/70 bg-background backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-6 sm:px-10">
        <a
          className="flex items-center"
          href="#about"
          aria-label="Go to about section"
        >
          <img
            src="/favicon.ico"
            alt="Aidan Short logo"
            width={36}
            height={36}
            loading="eager"
            className="h-9 w-9"
          />
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-500 md:flex">
          <a className="transition-colors hover:text-slate-900" href="#about">
            About
          </a>
          <a className="transition-colors hover:text-slate-900" href="#skills">
            Skills
          </a>
          <a className="transition-colors hover:text-slate-900" href="#projects">
            Projects
          </a>
          <a className="transition-colors hover:text-slate-900" href="#contact">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
