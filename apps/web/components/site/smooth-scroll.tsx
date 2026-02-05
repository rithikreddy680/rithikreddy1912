"use client";

import type { ReactNode } from "react";
import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.2
    });

    document.documentElement.classList.add("lenis");

    let rafId = 0;

    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    lenis.on("scroll", () => {
      ScrollTrigger.update();
    });

    const getNavOffset = () => {
      const nav = document.getElementById("site-nav");
      return nav ? nav.offsetHeight + 8 : 0;
    };

    const scrollToHash = (hash: string, immediate = false) => {
      if (!hash || hash === "#") return;
      const el = document.querySelector(hash);
      if (!el) return;

      lenis.scrollTo(el as HTMLElement, {
        offset: -getNavOffset(),
        immediate,
        lock: true
      });
    };

    const onHashChange = () => {
      scrollToHash(window.location.hash);
    };

    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest("a") as HTMLAnchorElement | null;
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      const isHashLink = href.startsWith("#") || href.startsWith("/#");
      if (!isHashLink) return;

      const hashIndex = href.indexOf("#");
      const hash = hashIndex >= 0 ? href.slice(hashIndex) : "";
      if (!hash) return;

      event.preventDefault();
      history.pushState(null, "", hash);
      scrollToHash(hash);
    };

    window.addEventListener("hashchange", onHashChange);
    document.addEventListener("click", onClick);

    requestAnimationFrame(() => {
      scrollToHash(window.location.hash, true);
    });

    ScrollTrigger.refresh();

    return () => {
      window.removeEventListener("hashchange", onHashChange);
      document.removeEventListener("click", onClick);
      cancelAnimationFrame(rafId);
      lenis.destroy();
      document.documentElement.classList.remove("lenis");
    };
  }, []);

  return <>{children}</>;
}
