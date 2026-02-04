export default function HomePage() {
  return (
    <main className="flex min-h-screen items-stretch bg-white text-black">
      {/* Left text column */}
      <section className="flex w-full flex-col justify-between px-10 py-10 sm:px-16 sm:py-16 md:w-1/2 lg:px-24">
        <header>
          <p className="mb-8 text-xs tracking-[0.35em] text-neutral-500">
            PORTFOLIO
          </p>
          <h1 className="font-serif text-5xl leading-tight sm:text-6xl md:text-7xl">
            Freya
            <br />
            Moore
          </h1>
        </header>

        <footer className="mt-10 flex flex-col items-start justify-between gap-6 text-[11px] tracking-[0.2em] text-neutral-600 sm:flex-row sm:items-center">
          <span>DESIGNER &amp; ART DIRECTOR</span>
          <button
            type="button"
            className="relative pb-1 text-[11px] tracking-[0.25em]"
          >
            <span>EMAIL ME</span>
            <span className="absolute inset-x-0 -bottom-[2px] h-px bg-black" />
          </button>
        </footer>
      </section>

      {/* Right image column */}
      <section className="relative hidden w-1/2 items-center justify-center bg-neutral-100 md:flex">
        <div className="pointer-events-none flex h-[80%] w-[80%] items-center justify-center rounded-lg bg-neutral-200 shadow-xl">
          {/* Placeholder for your photo / mockup */}
          <span className="text-xs uppercase tracking-[0.2em] text-neutral-500">
            IMAGE AREA
          </span>
        </div>
      </section>
    </main>
  );
}
