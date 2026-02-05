"use client";

import { useRef } from "react";
import Image from "next/image";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

export function HeroSequence() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      gsap.registerPlugin(ScrollTrigger);

      const snapTo = 1 / (3 - 1);

      const st = ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        snap: {
          snapTo,
          duration: { min: 0.2, max: 0.8 },
          delay: 0,
          ease: "power1.inOut"
        },
        invalidateOnRefresh: true
      });

      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });

      return () => {
        st.kill();
      };
    },
    { scope: containerRef }
  );

  return (
    <div id="top" ref={containerRef}>
      <section className="h-[100vh] w-full flex items-center justify-center px-6">
        <h1 className="text-center text-5xl font-semibold tracking-tight sm:text-7xl">Rithik Reddy</h1>
      </section>

      <section className="h-[100vh] w-full flex items-center justify-center px-6">
        <div
          id="hero-sequence"
          className="relative h-[min(72vh,560px)] w-[min(86vw,520px)] overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)]"
        >
          <Image
            src="/rithik.jpg"
            alt="Portrait"
            fill
            priority
            sizes="(max-width: 640px) 86vw, 520px"
            className="object-cover"
          />
        </div>
      </section>

      <section className="h-[100vh] w-full flex items-center justify-center px-6">
        <div className="w-full max-w-2xl text-center">
          <p className="text-sm leading-relaxed text-[var(--text-muted)] sm:text-base">
            Dedicated Software Engineering student at Monash University with a strong foundation in
            Computer Science and Applied Mathematics. Experienced in full-cycle software development
            including system automation, web application deployment, and performance optimization.
            Proven leader as a Software Development Head, skilled in managing technical teams and
            overseeing project lifecycles from concept to execution.
          </p>

          <button
            type="button"
            className="mt-8 inline-flex items-center justify-center rounded-xl border border-[var(--border)] bg-transparent px-5 py-3 text-sm font-medium text-[var(--text)] transition hover:border-[var(--border-strong)] hover:bg-[var(--sheen)]"
            onClick={() => {
              const el = document.getElementById("about");
              if (el) el.scrollIntoView({ block: "start" });
            }}
          >
            View more
          </button>
        </div>
      </section>
    </div>
  );
}
