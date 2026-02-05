"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { Container } from "./container";

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      id="site-nav"
      className="fixed inset-x-0 top-0 z-50 border-b border-[var(--border)] backdrop-blur transition-[background-color,box-shadow] duration-200"
      style={{
        backgroundColor: scrolled ? "var(--nav-glass-scrolled)" : "var(--nav-glass)",
        boxShadow: scrolled ? "0 10px 24px rgba(0,0,0,0.18)" : "none"
      }}
    >
      <Container>
        <nav className="flex items-center justify-between py-6">
          <Link href="/#top" className="mg-label text-[var(--text-subtle)] hover:text-[var(--text)]">
            PORTFOLIO
          </Link>
          <div className="flex items-center gap-8 text-xs tracking-[0.22em] text-[var(--text-muted)]">
            <Link href="/#top" className="hover:text-[var(--text)]">
              HOME
            </Link>
            <Link href="/#about" className="hover:text-[var(--text)]">
              ABOUT
            </Link>
            <Link href="/#education" className="hover:text-[var(--text)]">
              EDUCATION
            </Link>
            <Link href="/#experience" className="hover:text-[var(--text)]">
              EXPERIENCE
            </Link>
            <Link href="/#projects" className="hover:text-[var(--text)]">
              PROJECTS
            </Link>
            <Link href="/#club" className="hover:text-[var(--text)]">
              CLUB
            </Link>
            <Link href="/#skills" className="hover:text-[var(--text)]">
              SKILLS
            </Link>
            <Link href="/#contact" className="hover:text-[var(--text)]">
              CONTACT
            </Link>
          </div>
        </nav>
      </Container>
    </header>
  );
}
