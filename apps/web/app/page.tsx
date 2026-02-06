"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const rootRef = useRef<HTMLDivElement>(null);
  const pinWrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const hintRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!pinWrapperRef.current || !trackRef.current) return;

      gsap.to(trackRef.current, {
        xPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: pinWrapperRef.current,
          start: "top top",
          end: "+=200%",
          scrub: 1,
          pin: true
        }
      });

      if (hintRef.current) {
        gsap.to(hintRef.current, {
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            trigger: pinWrapperRef.current,
            start: "top top",
            end: "+=20%",
            scrub: 1
          }
        });
      }
    },
    { scope: rootRef }
  );

  return (
    <main ref={rootRef} className="bg-white text-black">
      {/* Part 1: Vertical name section */}
      <section className="flex h-screen w-full flex-col justify-between px-10 py-10 sm:px-16 sm:py-16 lg:px-24">
        <header>
          <p className="mb-8 text-xs tracking-[0.35em] text-neutral-500">
            RITHIK REDDY
          </p>
          <h1 className="font-serif text-5xl leading-tight sm:text-6xl md:text-7xl">
            Building products at the
            <br />
            intersection of design &amp; data
          </h1>
        </header>
      </section>

      {/* Part 2: Horizontal pinned container */}
      <div ref={pinWrapperRef} className="relative h-screen w-full overflow-hidden">
        <div
          ref={trackRef}
          className="flex h-full w-[200vw] flex-row"
        >
          {/* Slide A: Photo + hint */}
          <section className="flex h-screen w-screen items-center justify-between bg-white px-10 sm:px-16 lg:px-24">
            <div className="flex h-[80%] w-[60%] items-center justify-center rounded-lg bg-neutral-200 shadow-xl">
              <span className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                IMAGE AREA
              </span>
            </div>
            <div
              ref={hintRef}
              className="text-xs tracking-[0.3em] text-neutral-500"
            >
              Scroll to Explore →
            </div>
          </section>

          {/* Slide B: Details */}
          <section className="flex h-screen w-screen flex-col justify-between bg-white px-10 py-10 sm:px-16 sm:py-16 lg:px-24">
            <header>
              <p className="mb-8 text-xs tracking-[0.35em] text-neutral-500">
                ABOUT RITHIK
              </p>
              <h2 className="font-serif text-4xl leading-tight sm:text-5xl md:text-6xl">
                Software Engineer
                <br />
                &amp; Data Storyteller
              </h2>
            </header>

            <footer className="mt-10 flex flex-col items-start justify-between gap-6 text-[11px] tracking-[0.2em] text-neutral-600 sm:flex-row sm:items-center">
              <span>ENGINEER &amp; PROBLEM SOLVER</span>
              <button
                type="button"
                className="relative pb-1 text-[11px] tracking-[0.25em]"
              >
                <span>EMAIL ME</span>
                <span className="absolute inset-x-0 -bottom-[2px] h-px bg-black" />
              </button>
            </footer>
          </section>
        </div>
      </div>
    </main>
  );
}
