"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export function BlankIntro() {
  const rootRef = useRef<HTMLElement | null>(null);
  const nameRef = useRef<HTMLDivElement | null>(null);
  const hintRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!rootRef.current || !nameRef.current || !hintRef.current) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
          pin: true
        }
      });

      tl.fromTo(
        nameRef.current,
        { y: 48, opacity: 0, filter: "blur(10px)" },
        { y: 0, opacity: 1, filter: "blur(0px)", duration: 0.35 }
      )
        .to(hintRef.current, { opacity: 0, duration: 0.2 }, 0.15)
        .to(
          nameRef.current,
          {
            y: -90,
            opacity: 0,
            scale: 0.92,
            filter: "blur(14px)",
            duration: 0.65
          },
          ">"
        );
    }, rootRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section ref={rootRef} id="top" className="relative h-[220vh] bg-white">
      <div className="pointer-events-none sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.04),transparent_60%)]" />
        <div className="relative px-6 text-center">
          <div
            ref={nameRef}
            className="font-serif text-[clamp(3.5rem,11vw,9rem)] leading-[0.9] tracking-tight text-black"
          >
            <div>Freya</div>
            <div>Moore</div>
          </div>
          <div
            ref={hintRef}
            className="mt-10 text-[10px] tracking-[0.35em] text-neutral-500"
          >
            SCROLL
          </div>
        </div>
      </div>
    </section>
  );
}
