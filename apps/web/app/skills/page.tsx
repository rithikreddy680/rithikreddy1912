import { portfolioData } from "../../lib/portfolio-data";

export default function SkillsPage() {
  const { skills } = portfolioData;

  return (
    <main className="min-h-screen bg-white px-6 py-16 text-black sm:px-10 lg:px-24">
      <section className="mx-auto max-w-4xl">
        <header className="mb-10">
          <p className="mb-4 text-xs tracking-[0.3em] text-neutral-500">
            SKILLS
          </p>
          <h1 className="font-serif text-4xl leading-tight sm:text-5xl">
            The toolkit I reach for.
          </h1>
        </header>

        <div className="grid gap-8 md:grid-cols-2">
          {Object.entries(skills).map(([group, items]) => (
            <section key={group}>
              <h2 className="mb-2 text-xs uppercase tracking-[0.25em] text-neutral-500">
                {group.replaceAll("_", " ")}
              </h2>
              <div className="flex flex-wrap gap-2 text-xs tracking-[0.15em] text-neutral-700">
                {items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-neutral-300 px-3 py-1"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}

