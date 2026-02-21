export default function AboutSection() {
  return (
    <section
      id="about"
      className="flex min-h-[calc(100vh-96px)] w-full scroll-mt-24 flex-col items-center justify-center py-24 text-center"
    >
      <div className="flex w-full max-w-4xl flex-col gap-12">
        <h1 className="text-center text-3xl font-semibold text-slate-900 sm:text-5xl">
          Aidan <span className="text-blue-700">Short</span>
        </h1>
        <div className="grid gap-10 md:grid-cols-1">
          <div className="space-y-6 rounded-2xl border border-slate-200 bg-white/70 p-8 text-base leading-7 text-slate-900 shadow-sm">
            <h2 className="text-xl font-semibold text-blue-700">About Me</h2>
            <p>
              Hi, I&apos;m Aidan, a software engineer based in Seattle. I focus on
              API development, backend services, and building user-friendly,
              high-performance applications.
            </p>
            <p>
              My background is in enterprise Java platforms and distributed
              systems, with a growing interest in UI development and robotics.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
