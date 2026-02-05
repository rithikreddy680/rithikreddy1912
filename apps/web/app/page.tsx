import Link from "next/link";

import { BlankIntro } from "../components/site/blank-intro";
import { Container } from "../components/site/container";

const projects = [
  {
    title: "Brand Identity",
    href: "/#work",
    description: "A friendly, two-color system with modern forms as key elements.",
    image:
      "https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Web Design",
    href: "/#work",
    description: "Website and online profile design for a new brand.",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Brand Redesign",
    href: "/#work",
    description: "Refreshing a well-loved company for a new direction.",
    image:
      "https://images.unsplash.com/photo-1520975958225-6d83f3fa7f0d?auto=format&fit=crop&w=1200&q=80"
  }
];

const logos = [
  { name: "Simple Cloth", seed: "simple-cloth" },
  { name: "Northern", seed: "northern" },
  { name: "Brew Pub", seed: "brew" },
  { name: "The Bakery", seed: "bakery" },
  { name: "Serpent", seed: "serpent" },
  { name: "Light Filmstrip", seed: "film" }
];

export default function HomePage() {
  return (
    <main className="pb-24">
      <BlankIntro />

      <section id="about" className="scroll-mt-28 pt-24 pb-20">
        <Container>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:items-start">
            <section className="md:col-span-5">
              <h2 className="font-serif text-5xl leading-tight sm:text-6xl">Background</h2>

              <div className="mt-8 space-y-6 text-sm leading-relaxed text-neutral-700">
                <div>
                  <div className="font-medium text-black">Ocus Prime Studio</div>
                  <div>Art Director, 2024-2025</div>
                  <div>Graphic Designer, 2023-2024</div>
                </div>

                <div>
                  <div className="font-medium text-black">
                    Freelance Designer and Art Director,
                    <span className="font-normal text-neutral-700"> 2025-present</span>
                  </div>
                </div>

                <div>
                  <div className="font-medium text-black">Trempleway Art Academy</div>
                  <div>2020-2023</div>
                  <div>BA Graphic Design</div>
                  <div>Magna cum laude</div>
                </div>
              </div>
            </section>

            <section className="md:col-span-4">
              <h3 className="font-serif text-5xl leading-tight sm:text-6xl">Expertise</h3>

              <ul className="mt-8 list-disc space-y-3 pl-5 text-sm leading-relaxed text-neutral-700">
                <li>Branding &amp; Visual Communication</li>
                <li>Digital Illustration</li>
                <li>Creative Project Management</li>
                <li>Content Visualization &amp; Execution</li>
                <li>Brand Refresh and Transformation</li>
              </ul>
            </section>

            <aside className="md:col-span-3">
              <div className="overflow-hidden bg-neutral-100">
                <img
                  alt="Freya working"
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
                  className="h-full w-full object-cover"
                />
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <section id="work" className="scroll-mt-28 pb-20">
        <Container>
          <header className="mb-10">
            <p className="text-xs tracking-[0.35em] text-neutral-500">WORK</p>
          </header>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {projects.map((p) => (
              <Link key={p.title} href={p.href} className="group block bg-white">
                <div className="aspect-[4/3] overflow-hidden bg-neutral-100">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="mt-5">
                  <h3 className="font-serif text-3xl leading-tight">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-700">{p.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section id="logos" className="scroll-mt-28 pb-20">
        <Container>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:items-start">
            <section className="md:col-span-5">
              <h2 className="font-serif text-6xl leading-[0.95] sm:text-7xl">Logo Design</h2>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-neutral-700">
                A selection of logo explorations and identity marks across different industries.
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
      </section>

      <section id="contact" className="scroll-mt-28 pb-20">
        <Container>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:items-start">
            <section className="md:col-span-5">
              <h2 className="font-serif text-6xl leading-[0.95] sm:text-7xl">Work with me</h2>

              <div className="mt-10 aspect-[4/3] overflow-hidden bg-neutral-100">
                <img
                  alt="Portrait"
                  src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1400&q=80"
                  className="h-full w-full object-cover"
                />
              </div>
            </section>

            <section className="md:col-span-7">
              <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
                <div>
                  <div className="text-xs tracking-[0.35em] text-neutral-500">ADDRESS</div>
                  <div className="mt-3 text-sm leading-relaxed text-neutral-800">
                    123 Anywhere St., Any City, State,
                    <br />
                    Country 12345
                  </div>
                </div>

                <div>
                  <div className="text-xs tracking-[0.35em] text-neutral-500">PHONE</div>
                  <div className="mt-3 text-sm text-neutral-800">(123) 456 7890</div>
                </div>

                <div>
                  <div className="text-xs tracking-[0.35em] text-neutral-500">EMAIL</div>
                  <a
                    href="mailto:hello@reallygreatsite.com"
                    className="mt-3 inline-block text-sm text-neutral-800 hover:text-black"
                  >
                    hello@reallygreatsite.com
                  </a>
                </div>
              </div>
            </section>
          </div>
        </Container>
      </section>
    </main>
  );
}
