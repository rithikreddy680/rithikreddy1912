import Link from "next/link";

import { Container } from "./container";

export function SiteNav() {
  return (
    <header className="py-8">
      <Container>
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-xs tracking-[0.35em] text-neutral-500">
            PORTFOLIO
          </Link>
          <div className="flex items-center gap-8 text-xs tracking-[0.22em] text-neutral-600">
            <Link href="/" className="hover:text-black">
              HOME
            </Link>
            <Link href="/about" className="hover:text-black">
              BIO
            </Link>
            <Link href="/work" className="hover:text-black">
              WORK
            </Link>
            <Link href="/logo-design" className="hover:text-black">
              LOGOS
            </Link>
            <Link href="/contact" className="hover:text-black">
              CONTACT
            </Link>
          </div>
        </nav>
      </Container>
    </header>
  );
}
