"use client";

import { useRef, useState } from "react";
import type { SubmitEvent } from "react";

export default function ContactSection() {
  const email = "aidanpshort@gmail.com";
  const location = "Seattle, WA, United States";
  const linkedin = "https://www.linkedin.com/in/aidanshort1/";
  const github = "https://github.com/aidanshort";
  const formRef = useRef<HTMLFormElement | null>(null);
  const [isValid, setIsValid] = useState(false);
  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const senderName = String(formData.get("name") ?? "");
    const senderEmail = String(formData.get("email") ?? "");
    const message = String(formData.get("message") ?? "");
    const subject = `Portfolio message from ${senderName || "Someone"}`;
    const bodyLines = [
      `Name: ${senderName}`,
      `Email: ${senderEmail}`,
      "",
      message,
    ];
    const mailto = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
    window.location.href = mailto;
  };
  const handleChange = () => {
    setIsValid(formRef.current?.checkValidity() ?? false);
  };

  return (
    <section id="contact" className="scroll-mt-24 py-24">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-12">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
            Let&apos;s <span className="text-blue-700">Connect</span>
          </h2>
        </div>
        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-6 rounded-2xl border border-slate-200 bg-white/70 p-8 shadow-sm">
            <div>
              <div className="flex items-center gap-2 text-slate-400">
                <i
                  className="fa-solid fa-envelope text-[14px] text-gray-500"
                  aria-hidden="true"
                />
                <p className="text-xs font-semibold uppercase tracking-[0.25em]">
                  Email
                </p>
              </div>
              <div className="mt-2 w-fit">
                <a
                  className="inline-flex text-base font-medium text-slate-800 hover:text-blue-700"
                  href={`mailto:${email}`}
                >
                  {email}
                </a>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 text-slate-400">
                <i
                  className="fa-solid fa-location-dot text-[14px] text-gray-500"
                  aria-hidden="true"
                />
                <p className="text-xs font-semibold uppercase tracking-[0.25em]">
                  Location
                </p>
              </div>
              <p className="mt-2 text-base text-slate-700">
                {location}
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                Links
              </p>
              <div className="mt-3 flex flex-col items-start gap-3 text-base text-slate-700">
                <div className="w-fit">
                  <a
                    className="inline-flex hover:text-blue-700"
                    href={linkedin}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <span className="inline-flex items-center gap-2">
                      <i
                        className="fa-brands fa-linkedin-in text-[14px]"
                        aria-hidden="true"
                      />
                      LinkedIn
                    </span>
                  </a>
                </div>
                <div className="w-fit">
                  <a
                    className="inline-flex hover:text-blue-700"
                    href={github}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <span className="inline-flex items-center gap-2">
                      <i
                        className="fa-brands fa-github text-[14px]"
                        aria-hidden="true"
                      />
                      GitHub
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <form
            className="space-y-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
            onSubmit={handleSubmit}
            onChange={handleChange}
            ref={formRef}
          >
            <div>
              <label
                className="block text-sm font-semibold text-slate-700"
                htmlFor="name"
              >
                Your Name
              </label>
              <input
                id="name"
                name="name"
                required
                placeholder="Your Name"
                className="mt-2 w-full rounded-lg border border-slate-200 bg-transparent px-4 py-3 text-sm text-slate-700 focus:border-blue-700 focus:outline-none"
                type="text"
              />
            </div>
            <div>
              <label
                className="block text-sm font-semibold text-slate-700"
                htmlFor="email"
              >
                Your Email
              </label>
              <input
                id="email"
                name="email"
                required
                placeholder="name@email.com"
                className="mt-2 w-full rounded-lg border border-slate-200 bg-transparent px-4 py-3 text-sm text-slate-700 focus:border-blue-700 focus:outline-none"
                type="email"
              />
            </div>
            <div>
              <label
                className="block text-sm font-semibold text-slate-700"
                htmlFor="message"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                placeholder="Tell me about your project or role."
                className="mt-2 min-h-35 w-full rounded-lg border border-slate-200 bg-transparent px-4 py-3 text-sm text-slate-700 focus:border-blue-700 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className={`w-full rounded-full px-6 py-3 text-sm font-semibold transition-colors ${
                isValid
                  ? "cursor-pointer bg-blue-700 text-white hover:bg-blue-700"
                  : "cursor-not-allowed bg-slate-200 text-slate-500"
              }`}
              disabled={!isValid}
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
