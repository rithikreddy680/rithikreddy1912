import Link from "next/link";

import { Container } from "../../components/site/container";

const projects = [
  {
    title: "Brand Identity",
    href: "/work/brand-identity",
    description: "A friendly, two-color system with modern forms as key elements.",
    image:
      "https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Web Design",
    href: "/work/web-design",
    description: "Website and online profile design for a new brand.",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Brand Redesign",
    href: "/work/brand-redesign",
    description: "Refreshing a well-loved company for a new direction.",
    image:
      "https://images.unsplash.com/photo-1520975958225-6d83f3fa7f0d?auto=format&fit=crop&w=1200&q=80"
  }
];

export default function WorkPage() {
  return (
    <main className="pb-20">
      <Container>
        <header className="mb-10">
          <p className="text-xs tracking-[0.35em] text-neutral-500">WORK</p>
        </header>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {projects.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className="group block bg-white"
            >
              <div className="aspect-[4/3] overflow-hidden bg-neutral-100">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>
              <div className="mt-5">
                <h2 className="font-serif text-3xl leading-tight">{p.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                  {p.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </main>
  );
}
