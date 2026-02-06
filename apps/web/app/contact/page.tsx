import { portfolioData } from "../../lib/portfolio-data";

export default function ContactPage() {
  const { contact } = portfolioData.hero;

  return (
    <main className="flex min-h-screen items-center bg-white px-6 py-16 text-black sm:px-10 lg:px-24">
      <section className="mx-auto w-full max-w-xl">
        <header className="mb-8">
          <p className="mb-4 text-xs tracking-[0.3em] text-neutral-500">
            CONTACT
          </p>
          <h1 className="font-serif text-4xl leading-tight sm:text-5xl">
            Let&apos;s build something together.
          </h1>
        </header>

        <div className="space-y-4 text-sm text-neutral-700">
          <p>
            I&apos;m currently open to internship, graduate, and collaboration
            opportunities across software, data, and SAP-backed systems.
          </p>

          <div className="mt-6 space-y-2 text-sm">
            <p>
              <span className="text-xs tracking-[0.2em] text-neutral-500">
                EMAIL
              </span>
              <br />
              <a
                href={`mailto:${contact.email}`}
                className="text-base underline underline-offset-4"
              >
                {contact.email}
              </a>
            </p>
            <p>
              <span className="text-xs tracking-[0.2em] text-neutral-500">
                PHONE
              </span>
              <br />
              <span className="text-base">{contact.phone}</span>
            </p>
            <p>
              <span className="text-xs tracking-[0.2em] text-neutral-500">
                LOCATION
              </span>
              <br />
              <span className="text-base">{contact.location}</span>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

