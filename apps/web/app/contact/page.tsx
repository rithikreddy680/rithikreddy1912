import { Container } from "../../components/site/container";

export default function ContactPage() {
  return (
    <main className="pb-20">
      <Container>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:items-start">
          <section className="md:col-span-5">
            <h1 className="font-serif text-6xl leading-[0.95] sm:text-7xl">
              Work with me
            </h1>

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
                <div className="mt-3 text-sm text-neutral-800">
                  hello@reallygreatsite.com
                </div>
              </div>
            </div>
          </section>
        </div>
      </Container>
    </main>
  );
}
