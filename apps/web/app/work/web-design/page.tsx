import { Container } from "../../../components/site/container";

export default function WebDesignPage() {
  return (
    <main className="pb-20">
      <Container>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:items-start">
          <section className="md:col-span-6">
            <h1 className="font-serif text-6xl leading-[0.95] sm:text-7xl">
              Web
              <br />
              Design
            </h1>

            <div className="mt-10 aspect-[16/10] overflow-hidden bg-neutral-100">
              <img
                alt="Web design laptop mock"
                src="https://images.unsplash.com/photo-1587614203976-365c74645e83?auto=format&fit=crop&w=1600&q=80"
                className="h-full w-full object-cover"
              />
            </div>
          </section>

          <section className="md:col-span-6">
            <div className="aspect-[4/5] overflow-hidden bg-neutral-100">
              <img
                alt="Web design page preview"
                src="https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1400&q=80"
                className="h-full w-full object-cover"
              />
            </div>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-neutral-700">
              I helped a new brand with the design of their website and online profiles.
            </p>
          </section>
        </div>
      </Container>
    </main>
  );
}
