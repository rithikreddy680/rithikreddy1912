import { Container } from "../../../components/site/container";

export default function BrandRedesignPage() {
  return (
    <main className="pb-20">
      <Container>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:items-start">
          <section className="md:col-span-5">
            <h1 className="font-serif text-6xl leading-[0.95] sm:text-7xl">
              Brand
              <br />
              Redesign
            </h1>
            <p className="mt-8 max-w-md text-sm leading-relaxed text-neutral-700">
              I helped a well-loved company update their visual identity and transform their
              brand into something fresh and more aligned with their new business direction.
            </p>
          </section>

          <section className="md:col-span-7">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="aspect-[3/5] overflow-hidden bg-neutral-100">
                <img
                  alt="Brand redesign mobile 1"
                  src="https://images.unsplash.com/photo-1523205771623-e0faa4d2813d?auto=format&fit=crop&w=1200&q=80"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="aspect-[3/5] overflow-hidden bg-neutral-100">
                <img
                  alt="Brand redesign mobile 2"
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=80"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </section>
        </div>
      </Container>
    </main>
  );
}
