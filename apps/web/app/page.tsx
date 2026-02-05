import Link from "next/link";

import { Container } from "../components/site/container";

export default function HomePage() {
  return (
    <main className="pb-16">
      <Container>
        <div className="grid min-h-[calc(100vh-120px)] grid-cols-1 items-stretch gap-10 md:grid-cols-2">
          <section className="flex flex-col justify-between py-6 md:py-10">
            <header>
              <h1 className="font-serif text-6xl leading-[0.95] sm:text-7xl md:text-8xl">
                Freya
                <br />
                Moore
              </h1>
            </header>

            <footer className="mt-10 flex flex-col items-start justify-between gap-6 text-[11px] tracking-[0.2em] text-neutral-600 sm:flex-row sm:items-center">
              <span>DESIGNER &amp; ART DIRECTOR</span>
              <Link
                href="/contact"
                className="relative pb-1 text-[11px] tracking-[0.25em] text-black"
              >
                <span>EMAIL ME</span>
                <span className="absolute inset-x-0 -bottom-[2px] h-px bg-black" />
              </Link>
            </footer>
          </section>

          <section className="relative overflow-hidden rounded-none bg-neutral-100 md:min-h-[520px]">
            <div className="absolute inset-0">
              <img
                alt="Workspace mockup"
                src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-l from-white/70 via-white/10 to-transparent" />

            <div className="relative ml-auto flex h-full w-full max-w-[520px] items-end p-8">
              <div className="w-full rounded-lg bg-white/90 p-6 shadow-sm backdrop-blur">
                <div className="mb-2 text-[10px] tracking-[0.22em] text-neutral-500">
                  FEATURED
                </div>
                <div className="font-serif text-2xl leading-tight">Client work preview</div>
                <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                  Brand systems, web design, and identity work focused on clarity and craft.
                </p>
              </div>
            </div>
          </section>
        </div>
      </Container>
    </main>
  );
}
