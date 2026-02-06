"use client";

import { useState } from "react";
import Image from "next/image";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-20 w-full border-b border-slate-200/70 bg-background backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-6 sm:px-10">
        <a
          className="flex items-center"
          href="#about"
          aria-label="Go to about section"
          onClick={() => setIsMenuOpen(false)}
        >
          <Image
            src="/favicon.ico"
            alt="Aidan Short logo"
            width={36}
            height={36}
            priority
            className="h-9 w-9"
          />
        </a>

        <button
          type="button"
          className="flex items-center rounded-md p-2 text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <span className="relative h-5 w-6">
            <span
              className={`absolute left-0 top-0 h-0.5 w-6 rounded bg-current transition-transform duration-200 ${
                isMenuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-2 h-0.5 w-6 rounded bg-current transition-opacity duration-200 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-4 h-0.5 w-6 rounded bg-current transition-transform duration-200 ${
                isMenuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </span>
        </button>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-500 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              className="transition-colors hover:text-slate-900"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <nav
        id="mobile-navigation"
        className={`border-t border-slate-200/70 bg-background px-6 py-4 text-sm font-medium text-slate-500 md:hidden ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 sm:px-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              className="transition-colors hover:text-slate-900"
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
