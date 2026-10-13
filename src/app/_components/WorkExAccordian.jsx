"use client";

import { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

const WorkExAccordian = ({ experiences }) => {

  const [openIndex, setOpenIndex] = useState(experiences.length - 1);

  // Store a ref for each panel's content div
  const panelRefs = useRef([]);

  useGSAP(() => {
    const lastIndex = experiences.length - 1;
    const panel = panelRefs.current[lastIndex];


    if (panel) {
      // Set to open state instantly (no animation on load)
      gsap.set(panel, { height: "auto", opacity: 1 });

    }
  }, []);

  const toggleAccordion = (index) => {
    const panel = panelRefs.current[index];


    // Kill any in-progress animation on this panel to avoid conflicts
    gsap.killTweensOf(panel);

    if (openIndex === index) {
      // --- CLOSE ---
      gsap.to(panel, {
        height: 0,
        opacity: 0,
        duration: 0.5,
        ease: "power3.in",
      });

      setOpenIndex(null);
    } else {
      // --- CLOSE previously open panel first ---
      if (openIndex !== null) {
        const prevPanel = panelRefs.current[openIndex];
        gsap.killTweensOf(prevPanel);
        gsap.to(prevPanel, { height: 0, opacity: 0, duration: 0.5, ease: "power2.in" });
      }

      // --- OPEN ---
      // Measure natural height by briefly setting to auto
      gsap.set(panel, { height: "auto", opacity: 1 });
      const fullHeight = panel.offsetHeight;

      gsap.fromTo(
        panel,
        { height: 0, opacity: 0 },
        { height: fullHeight, opacity: 1, duration: 0.7, ease: "power3.out" }
      );
      // Stagger the list items inside
      gsap.fromTo(
        panel.querySelectorAll("li"),
        { opacity: 0, x: -12 },
        { opacity: 1, x: 0, stagger: 0.06, duration: 0.5, delay: 0.15, ease: "power2.out" }
      );

      setOpenIndex(index);
    }
  };

  return (
    <div className="flex flex-col w-full gap-[20px] mb-[50px]">
      {experiences.map((experience, index) => (
        <div
          key={experience.id}
          className={`border-solid border border-secondary/50 p-[20px] sm:py-[40px] shadow-md relative transition-colors duration-300 ease-in-out hover:shadow-lg ${
            openIndex === index ? "bg-gray-100/20" : ""
          }`}
        >
          {/* Header row — always visible */}
          <div
            onClick={() => toggleAccordion(index)}
            className="cursor-pointer flex flex-col gap-[5px] sm:flex-row justify-between items-start "
          >
            <h3 className="text-xl font-bold">{experience.title}</h3>

            <div className="flex items-center gap-3 self-end">
              <p className="text-gray-500 text-nowrap">{experience.duration}</p>
              {/* Chevron */}
            </div>
          </div>

          {/* Pulsing dot for current role */}
          {experience.present === true && (
            <div className="bg-red font-semibold w-[20px] h-[20px] absolute top-0 right-0 animate-pulse" />
          )}

          {/* 
            Panel — always in DOM, height starts at 0.
            overflow:hidden is REQUIRED for height animation to clip content.
          */}
          <div
            ref={(el) => (panelRefs.current[index] = el)}
            style={{ overflow: "hidden", height: 0, opacity: 0 }}
          >
            <div className="border-t border-solid border-blackish/40">
              <ul className="list-disc ml-[20px] mt-4">
                {experience.points.map((point) => (
                  <li key={point} className="text-gray-700">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}


export default WorkExAccordian;