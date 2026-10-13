"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ScrollSmoother } from "gsap/ScrollSmoother";

import ProjectSection from "./_components/ProjectSection";
import ResumeSection from "./_components/ResumeSection";
import Contacts from "./_components/Contacts";
import Heading from "./_components/Heading";
import WorkExAccordian from "./_components/WorkExAccordian";
import HeroSection from "./_components/HeroSection";
import WorkEx from "./_components/WorkEx";
import useIsMobile from "./_components/useIsMobile";
import { experiences, experienceColumns } from "./_components/experienceData";
import "./_components/navbar.css";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, useGSAP);

export default function Home() {
  const resumeRef = useRef(null);
  const projectRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const bodyRef = useRef(null);
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  const isMobile = useIsMobile();

  const handleResumeDownload = async () => {
    const fileId = "1-KW2C7pZNkJG9oFLJ4jbUC48PHb-TcuL";

    // Direct download URL
    const url = `https://drive.google.com/uc?export=download&id=${fileId}`;

    // Create temporary anchor
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "AnshuSarkar_Resume.pdf");
    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  };

  useGSAP(
    () => {
      const section = sectionRef.current;
      const track = trackRef.current;

      const smooth = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.2,
        smoothTouch: 0.1,
      });

      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        const lastCard = track.lastElementChild;
        const totalScroll =
          lastCard.offsetLeft - (window.innerWidth - lastCard.offsetWidth) / 2;

        gsap.to(track, {
          x: -totalScroll,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top 20%",
            end: `+=${totalScroll * 2}`,
            scrub: 1,
            pin: true,
            anticipatePin: 0.5,
          },
        });
      });

      // ScrollSmoother instances are not reverted by useGSAP — kill explicitly
      return () => {
        mm.revert();
        smooth.kill();
      };
    },
    { scope: bodyRef },
  );

  return (
    <div className="" ref={bodyRef} id="smooth-wrapper">
      <div
        className="bg-[linear-gradient(to_right,#5e5e5e1a_2px,transparent_1px),linear-gradient(to_bottom,#5e5e5e1a_2px,transparent_1px)]
    bg-[size:40px_40px] "
        id="smooth-content"
      >
        <HeroSection handleResumeDownload={handleResumeDownload} />

        <div ref={aboutRef} className="section">
          {/* About Section Content */}
        </div>

        <div ref={projectRef} className="section px-[20px] sm:px-[50px]">
          <ProjectSection />
        </div>

        <div ref={sectionRef} className="section px-[20px] sm:px-[50px] ">
          <Heading text={"Experience"} no={2} />
          {isMobile ? (
            <WorkExAccordian experiences={experiences} />
          ) : (
            <div className="overflow-hidden ">
              <div
                ref={trackRef}
                className="flex lg:flex-row flex-col gap-[100px] w-max lg:px-[50px] "
              >
                {Object.values(experienceColumns).map((column) =>
                  // Grouped entries share a column wrapper; ungrouped cards stay
                  // direct flex children so their own width class still applies.
                  column[0].group ? (
                    <div key={column[0].id} className="w-fit">
                      {column.map((experience) => (
                        <WorkEx
                          key={experience.id}
                          title={experience.title}
                          duration={experience.duration}
                          points={experience.points}
                        />
                      ))}
                    </div>
                  ) : (
                    <WorkEx
                      key={column[0].id}
                      title={column[0].title}
                      duration={column[0].duration}
                      points={column[0].points}
                      className={column[0].className ?? ""}
                    />
                  )
                )}
              </div>
            </div>
          )}
        </div>

        <div ref={contactRef} className="section">
          <Contacts />
        </div>
      </div>
    </div>
  );
}
