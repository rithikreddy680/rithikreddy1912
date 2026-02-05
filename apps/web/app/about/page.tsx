import { Container } from "../../components/site/container";

export default function AboutPage() {
  return (
    <main className="pb-20">
      <Container>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:items-start">
          <section className="md:col-span-5">
            <h1 className="font-serif text-5xl leading-tight sm:text-6xl">
              Background
            </h1>

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
            <h2 className="font-serif text-5xl leading-tight sm:text-6xl">
              Expertise
            </h2>

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
    </main>
  );
}
