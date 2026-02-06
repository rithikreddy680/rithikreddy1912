import Image from "next/image";
import { portfolioData } from "../../lib/portfolio-data";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-16 text-black sm:px-10 lg:px-24">
      <section className="mx-auto max-w-6xl">
        <header className="mb-10">
          <p className="mb-4 text-xs tracking-[0.3em] text-neutral-500">
            PROJECTS
          </p>
          <h1 className="font-serif text-4xl leading-tight sm:text-5xl">
            Things I&apos;ve shipped &amp; explored.
          </h1>
        </header>

        <div className="grid gap-10 md:grid-cols-2">
          {portfolioData.projects.map((project) => (
            <article
              key={project.id}
              className="flex flex-col justify-between border border-neutral-200 bg-neutral-50/60 p-5 shadow-sm"
            >
              <div>
                <div className="mb-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                    {project.category}
                  </p>
                  <h2 className="text-lg font-semibold tracking-wide">
                    {project.title}
                  </h2>
                </div>
                <div className="mb-4 aspect-video w-full overflow-hidden rounded-md bg-neutral-200">
                  {/* Placeholder image until real assets exist */}
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={450}
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="mb-4 text-sm text-neutral-700">
                  {project.summary}
                </p>
                <ul className="mb-4 space-y-1 text-sm text-neutral-700">
                  {Object.entries(project.details).map(([key, value]) => (
                    <li key={key} className="flex gap-2">
                      <span className="mt-[6px] h-[3px] w-[3px] rounded-full bg-neutral-500" />
                      <span>{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-3 flex flex-wrap gap-2 text-[11px] tracking-[0.15em] text-neutral-600">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-neutral-300 px-3 py-1"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

