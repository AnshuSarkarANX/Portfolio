"use client";

import { useEffect, useRef } from "react";

/**
 * Ambient ground: two oversized checker passes drifting in counter-directions
 * as you scroll. The mismatch in scale + direction produces a soft moiré
 * treadmill — the sheet feels like it's sliding through the press.
 * Transforms only; pauses off-screen and under reduced-motion.
 */
export default function TileField() {
  const aRef = useRef(null);
  const bRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let current = 0;
    let running = true;

    const tick = () => {
      if (running) {
        const target = window.scrollY;
        // lazy lerp: settle fully, then stop writing transforms
        if (Math.abs(target - current) > 0.05) {
          current += (target - current) * 0.085;

          if (aRef.current) {
            aRef.current.style.transform = `translate3d(${current * 0.05}px, ${
              current * 0.10
            }px, 0) rotate(${current * 0.004}deg)`;
          }
          if (bRef.current) {
            bRef.current.style.transform = `translate3d(${
              current * -0.06
            }px, ${current * -0.09}px, 0) rotate(${current * -0.007}deg)`;
          }
        }
      }
      raf = requestAnimationFrame(tick);
    };

    const onVisibility = () => {
      running = document.visibilityState === "visible";
    };

    raf = requestAnimationFrame(tick);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <div aria-hidden className="tile-field">
      <div ref={bRef} className="tile-layer tile-layer--b" />
      <div ref={aRef} className="tile-layer tile-layer--a" />
    </div>
  );
}
