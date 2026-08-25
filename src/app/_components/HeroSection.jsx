"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const RIBBON_ITEMS = [
  "FRONTEND ENGINEER",
  "FULL STACK",
  "GENAI",
  "REACT.JS",
  "NODE.JS",
  "SSE",
  "PRISMA",
  "ELASTICSEARCH",
  "DOCKER",
  "GSAP",
  "TAILWIND",
];

function RegistrationMark({ className }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className={`absolute h-6 w-6 text-soot/60 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="0" x2="12" y2="24" />
      <line x1="0" y1="12" x2="24" y2="12" />
    </svg>
  );
}

export default function HeroSection({ handleResumeDownload }) {
  const sectionRef = useRef(null);
  const driftRef = useRef(null);
  const pinkRefs = useRef([]);
  const blueRefs = useRef([]);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      // Idle press-drift: each pass of each word never quite sits still
      ["Anshu", "Sarkar"].forEach((_, i) => {
        gsap.to(pinkRefs.current[i], {
          x: 7,
          y: 5,
          duration: 2.4,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
        gsap.to(blueRefs.current[i], {
          x: -7,
          y: -5,
          duration: 2.4,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          delay: 1.2,
        });
      });

      // The whole sheet follows the pointer like paper sliding on a platen
      const driftX = gsap.quickTo(driftRef.current, "x", {
        duration: 0.9,
        ease: "power3.out",
      });
      const driftY = gsap.quickTo(driftRef.current, "y", {
        duration: 0.9,
        ease: "power3.out",
      });
      const onMove = (e) => {
        const nx = e.clientX / window.innerWidth - 0.5;
        const ny = e.clientY / window.innerHeight - 0.5;
        driftX(nx * 26);
        driftY(ny * 18);
      };
      window.addEventListener("pointermove", onMove);
      return () => window.removeEventListener("pointermove", onMove);
    },
    { scope: sectionRef },
  );

  const inkLine = (word, i) => (
    <span className="relative block">
      <span className="invisible block" aria-hidden>
        {word}
      </span>
      <span
        ref={(el) => (blueRefs.current[i] = el)}
        aria-hidden
        className="absolute inset-0 select-none text-risoblue mix-blend-multiply"
      >
        {word}
      </span>
      <span
        ref={(el) => (pinkRefs.current[i] = el)}
        aria-hidden
        className="absolute inset-0 select-none text-fluoro mix-blend-multiply"
      >
        {word}
      </span>
      <span className="sr-only">{word}</span>
    </span>
  );

  return (
    <section
      ref={sectionRef}
      className="mainSection relative flex h-screen flex-col justify-center overflow-hidden pb-[70px]"
    >
      <RegistrationMark className="left-[8px] top-[8px] sm:left-[20px] sm:top-[16px]" />
      <RegistrationMark className="right-[8px] top-[8px] sm:right-[20px] sm:top-[16px]" />

      <div ref={driftRef} className="w-fit">
        <h1 className="text-left font-display font-extrabold uppercase leading-[0.88] tracking-[-0.03em] text-[clamp(4.2rem,15vw,12rem)]">
          {inkLine("Anshu", 0)}
          {inkLine("Sarkar", 1)}
        </h1>

        <p className="mt-6 max-w-[46ch] font-display text-lg font-semibold uppercase sm:text-xl">
          Engineering digital interfaces —{" "}
          <span className="text-risoblue">frontend</span>,{" "}
          <span className="text-fluoro">full stack</span> & GenAI products
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-6">
          <a href="mailto:anshusarkaranx@gmail.com" className="stamp-btn">
            Start a project
          </a>
          <button
            onClick={handleResumeDownload}
            className="stamp-btn stamp-btn--ink"
          >
            Download resume
          </button>
        </div>
      </div>

      {/* Edition stamp */}
      <div className="pointer-events-none absolute bottom-[92px] right-[10px] hidden rotate-3 border-2 border-soot px-3 py-2 font-marks text-[11px] uppercase leading-tight sm:block">
        Ed. 2026 — first print
        <br />
        two inks on uncoated paper
      </div>

      {/* Work-order ribbon */}
      <div className="absolute inset-x-0 bottom-0 overflow-hidden border-y-2 border-soot bg-paper py-2">
        <div className="ribbon-track">
          {[0, 1].map((copy) => (
            <div
              key={copy}
              aria-hidden={copy === 1}
              className="flex shrink-0 items-center gap-8 pr-8 font-marks text-xs uppercase tracking-widest"
            >
              {RIBBON_ITEMS.map((item) => (
                <span key={item} className="flex items-center gap-8">
                  {item}
                  <span className="text-fluoro">·</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
