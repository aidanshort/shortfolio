const projects = [
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio website built with Next.js and Tailwind CSS.",
    repoUrl: "https://github.com/aidanshort/shortfolio",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-24 py-24">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-12">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
            Featured <span className="text-blue-700">Projects</span>
          </h2>
          <p className="mx-auto max-w-2xl text-base text-slate-600">
            A selection of personal projects I&apos;ve worked on recently.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="relative flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-slate-900">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {project.description}
                </p>
              </div>
              {project.repoUrl ? (
                <div className="mt-6 flex items-center justify-end">
                  <a
                    className="text-slate-400 transition-colors hover:text-blue-700"
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <i className="fa-brands fa-github text-lg" aria-hidden="true" />
                  </a>
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
