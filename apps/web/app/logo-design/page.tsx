import { Container } from "../../components/site/container";

const logos = [
  { name: "Simple Cloth", seed: "simple-cloth" },
  { name: "Northern", seed: "northern" },
  { name: "Brew Pub", seed: "brew" },
  { name: "The Bakery", seed: "bakery" },
  { name: "Serpent", seed: "serpent" },
  { name: "Light Filmstrip", seed: "film" }
];

export default function LogoDesignPage() {
  return (
    <main className="pb-20">
      <Container>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:items-start">
          <section className="md:col-span-5">
            <h1 className="font-serif text-6xl leading-[0.95] sm:text-7xl">
              Logo Design
            </h1>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-neutral-700">
              I worked with clients from different industries to create unique and
              memorable logos for their businesses.
            </p>
          </section>

          <section className="md:col-span-7">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
              {logos.map((l) => (
                <div key={l.seed} className="bg-neutral-50 p-6">
                  <div className="aspect-square overflow-hidden bg-white">
                    <img
                      alt={l.name}
                      src={`https://picsum.photos/seed/${l.seed}/600/600`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="mt-4 text-xs tracking-[0.18em] text-neutral-600">
                    {l.name.toUpperCase()}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </Container>
    </main>
  );
}
