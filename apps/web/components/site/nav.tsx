import Link from "next/link";

import { Container } from "./container";

export function SiteNav() {
  return (
    <header
      id="site-nav"
      className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-white/70 backdrop-blur"
    >
      <Container>
        <nav className="flex items-center justify-between py-6">
          <Link href="/#top" className="text-xs tracking-[0.35em] text-neutral-500">
            PORTFOLIO
          </Link>
          <div className="flex items-center gap-8 text-xs tracking-[0.22em] text-neutral-600">
            <Link href="/#top" className="hover:text-black">
              HOME
            </Link>
            <Link href="/#about" className="hover:text-black">
              ABOUT
            </Link>
            <Link href="/#education" className="hover:text-black">
              EDUCATION
            </Link>
            <Link href="/#experience" className="hover:text-black">
              EXPERIENCE
            </Link>
            <Link href="/#projects" className="hover:text-black">
              PROJECTS
            </Link>
            <Link href="/#skills" className="hover:text-black">
              SKILLS
            </Link>
            <Link href="/#contact" className="hover:text-black">
              CONTACT
            </Link>
          </div>
        </nav>
      </Container>
    </header>
  );
}
