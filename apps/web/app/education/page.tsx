import { portfolioData } from "../../lib/portfolio-data";

export default function EducationPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-16 text-black sm:px-10 lg:px-24">
      <section className="mx-auto max-w-4xl">
        <header className="mb-10">
          <p className="mb-4 text-xs tracking-[0.3em] text-neutral-500">
            EDUCATION
          </p>
          <h1 className="font-serif text-4xl leading-tight sm:text-5xl">
            How I&apos;m grounding the theory.
          </h1>
        </header>

        <div className="space-y-8">
          {portfolioData.education.map((item) => (
            <article key={item.id} className="border-b border-neutral-200 pb-6 last:border-none">
              <div className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <h2 className="text-lg font-semibold tracking-wide">
                    {item.degree}
                  </h2>
                  <p className="text-sm text-neutral-600">{item.institution}</p>
                </div>
                <p className="text-xs tracking-[0.2em] text-neutral-500">
                  {item.date}
                </p>
              </div>
              <p className="text-sm text-neutral-700">{item.details}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

