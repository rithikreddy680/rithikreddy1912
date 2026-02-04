export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <section className="max-w-3xl px-6 text-center">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-sky-400/70">
          Monorepo Starter
        </p>
        <h1 className="mb-4 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
          Full‑stack platform starter
        </h1>
        <p className="mx-auto mb-8 max-w-xl text-sm text-slate-300 sm:text-base">
          Next.js + NestJS + Prisma + Redis + Turborepo. Opinionated defaults,
          ready for cloud‑native scale on AWS.
        </p>
        <div className="flex items-center justify-center gap-3 text-xs text-slate-300 sm:text-sm">
          <span className="rounded-full border border-sky-500/40 bg-sky-500/10 px-3 py-1">
            Apps: web · api
          </span>
          <span className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1">
            DB: Postgres + Prisma
          </span>
          <span className="rounded-full border border-amber-500/40 bg-amber-500/10 px-3 py-1">
            Queue: Redis + BullMQ
          </span>
        </div>
      </section>
    </main>
  );
}
