import { Container } from "../../../components/site/container";

export default function BrandIdentityPage() {
  return (
    <main className="pb-20">
      <Container>
        <div className="grid grid-cols-1 gap-10">
          <section className="grid grid-cols-1 gap-6 md:grid-cols-12">
            <div className="md:col-span-6">
              <div className="aspect-[4/3] overflow-hidden bg-neutral-100">
                <img
                  alt="Brand identity hero"
                  src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1400&q=80"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6 md:col-span-6">
              <div className="aspect-square overflow-hidden bg-neutral-100">
                <img
                  alt="Brand identity detail 1"
                  src="https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=900&q=80"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="aspect-square overflow-hidden bg-neutral-100">
                <img
                  alt="Brand identity detail 2"
                  src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=900&q=80"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="aspect-square overflow-hidden bg-neutral-100">
                <img
                  alt="Brand identity detail 3"
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900&q=80"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="aspect-square overflow-hidden bg-neutral-100">
                <img
                  alt="Brand identity detail 4"
                  src="https://images.unsplash.com/photo-1556761175-129418cb2dfe?auto=format&fit=crop&w=900&q=80"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </section>

          <section className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-5">
              <h1 className="font-serif text-6xl leading-[0.95] sm:text-7xl">
                Brand
                <br />
                Identity
              </h1>
            </div>
            <div className="md:col-span-7">
              <p className="max-w-xl text-sm leading-relaxed text-neutral-700">
                I worked with a local clinic to create a simple, thoughtful and approachable
                brand identity. We agreed on a two-color scheme and modern forms as the key
                elements.
              </p>
            </div>
          </section>
        </div>
      </Container>
    </main>
  );
}
