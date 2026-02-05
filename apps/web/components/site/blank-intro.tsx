"use client";

import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export function BlankIntro() {
  const rootRef = useRef<HTMLElement | null>(null);
  const plainNameRef = useRef<HTMLDivElement | null>(null);
  const maskedNameRef = useRef<HTMLDivElement | null>(null);
  const photoRef = useRef<HTMLDivElement | null>(null);
  const hintRef = useRef<HTMLDivElement | null>(null);

  const [photoUrl, setPhotoUrl] = useState("/rithik.jpg");
  const fallbackPhotoUrl =
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1400&q=80";

  useEffect(() => {
    if (!rootRef.current || !plainNameRef.current || !maskedNameRef.current || !hintRef.current) {
      return;
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion) return;

    const img = new Image();
    img.src = "/rithik.jpg";
    img.onerror = () => {
      setPhotoUrl(fallbackPhotoUrl);
    };

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.set(plainNameRef.current, { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" });
      gsap.set(maskedNameRef.current, { opacity: 0, scale: 1, filter: "blur(0px)" });
      gsap.set(photoRef.current, {
        opacity: 0,
        y: 24,
        scale: 0.92,
        filter: "blur(14px)"
      });

      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top top",
          end: "+=100%",
          scrub: 1,
          pin: true
        }
      });

      tl.to(hintRef.current, { opacity: 0, duration: 0.12 }, 0.12)
        .to(plainNameRef.current, { opacity: 1, duration: 0.35 })
        .to(
          plainNameRef.current,
          { opacity: 0, y: -32, scale: 0.98, filter: "blur(10px)", duration: 0.38 },
          ">"
        )
        .to(
          maskedNameRef.current,
          { opacity: 1, y: -32, scale: 0.98, filter: "blur(0px)", duration: 0.38 },
          "<"
        )
        .to(maskedNameRef.current, { y: -44, scale: 0.96, duration: 0.18 }, ">")
        .to(
          photoRef.current,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 0.42
          },
          ">-0.06"
        )
        .to(
          maskedNameRef.current,
          { opacity: 0, y: -70, scale: 0.94, filter: "blur(18px)", duration: 0.42 },
          "<"
        );
    }, rootRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section ref={rootRef} id="top" className="relative h-screen bg-white">
      <div className="pointer-events-none flex h-screen items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.04),transparent_60%)]" />
        <div className="relative px-6 text-center">
          <div className="relative">
            <div
              ref={plainNameRef}
              className="font-serif text-[clamp(3.5rem,11vw,9rem)] leading-[0.9] tracking-tight text-black"
            >
              <div>Rithik</div>
              <div>Reddy</div>
              <div className="text-[0.55em] leading-[1.05] tracking-tight">Singireddy (21)</div>
            </div>
            <div
              ref={maskedNameRef}
              className="absolute inset-0 opacity-0 font-serif text-[clamp(3.5rem,11vw,9rem)] leading-[0.9] tracking-tight text-transparent [background-image:var(--intro-photo)] bg-cover bg-center bg-no-repeat bg-clip-text"
              style={{ "--intro-photo": `url(${photoUrl})` } as CSSProperties}
            >
              <div>Rithik</div>
              <div>Reddy</div>
              <div className="text-[0.55em] leading-[1.05] tracking-tight">Singireddy (21)</div>
            </div>
          </div>

          <div
            ref={photoRef}
            className="pointer-events-none mx-auto mt-14 w-[min(460px,86vw)] overflow-hidden rounded-2xl bg-neutral-100 shadow-[0_30px_80px_rgba(0,0,0,0.12)] opacity-0"
          >
            <div className="aspect-[4/5]">
              <img alt="Portrait" src={photoUrl} className="h-full w-full object-cover" />
            </div>
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
