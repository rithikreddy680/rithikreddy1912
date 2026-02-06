import { portfolioData } from "../../lib/portfolio-data";

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-white px-6 py-16 text-black sm:px-10 lg:px-24">
      <section className="mx-auto max-w-4xl">
        <header className="mb-10">
          <p className="mb-4 text-xs tracking-[0.3em] text-neutral-500">
            EXPERIENCE
          </p>
          <h1 className="font-serif text-4xl leading-tight sm:text-5xl">
            Where I&apos;ve been building.
          </h1>
        </header>

        <div className="space-y-10">
          {portfolioData.experience.map((item) => (
            <article key={item.id} className="border-b border-neutral-200 pb-8 last:border-none">
              <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <h2 className="text-lg font-semibold tracking-wide">
                    {item.role}
                  </h2>
                  <p className="text-sm text-neutral-600">{item.company}</p>
                </div>
                <p className="text-xs tracking-[0.2em] text-neutral-500">
                  {item.date}
                </p>
              </div>
              <p className="mb-4 text-sm text-neutral-700">{item.summary}</p>
              <ul className="space-y-2 text-sm text-neutral-700">
                {item.details.map((detail, index) => (
                  <li key={index} className="flex gap-2">
                    <span className="mt-[6px] h-[3px] w-[3px] rounded-full bg-neutral-500" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

