const skills = [
  "Java",
  "Python",
  "Go",
  "Spring Boot",
  "Git",
  "Kafka",
  "PostgreSQL",
  "S3",
  "Docker",
  "Kubernetes",
  "Jenkins",
  "Angular",
  "React",
  "Next.js",
  "Node.js",
];

export default function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-24 py-24">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-12">
        <h2 className="text-center text-3xl font-semibold text-slate-900 sm:text-4xl">
          My <span className="text-blue-700">Skills</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
