import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ProjectSection.css";
import Projects from "./Projects.jsx";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const ProjectSection = () => {
  const [isAnimating, setIsAnimating] = useState(false);
     const [deviceType, setDeviceType] = useState("desktop");
     const detectDevice = () => {
       if (window.innerWidth <= 768) {
         setDeviceType("mobile");
       } else {
         setDeviceType("desktop");
       }
     };

  const showSlide = (slide) => {
    if (isAnimating) return;
    setIsAnimating(true);
    const img = slide.querySelector("img");

    gsap.to(img, {
      scale: 1,
      top: "0%",
      duration: 2,
      ease: "power3.inOut",
    });

    gsap.to(slide, {
      clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)",
      duration: 2,
      ease: "power4.inOut",
      onComplete: () => {
        setIsAnimating(false);
      },
    });
  };

  const hideSlide = (slide) => {
    if (isAnimating) return;
    setIsAnimating(true);
    const img = slide.querySelector("img");

    gsap.to(slide, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
      duration: 1,
      ease: "power3.inOut",
    });

    gsap.to(img, {
      scale: 1.5,
      top: "4em",
      duration: 2,
      ease: "power3.inOut",
    });

    gsap.to(slide, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
      duration: 1,
      ease: "power4.inOut",
      onComplete: () => {
        setIsAnimating(false);
      },
    });
  };

  useEffect(() => {
     detectDevice();
     window.addEventListener("resize", detectDevice); 
    // Use gsap.utils.toArray to handle the slides
    const slides = gsap.utils.toArray(".slide");

    slides.forEach((slide) => {
      const img = slide.querySelector("img");

      gsap.set(img, { scale: 1, top: "4em" });

      // ScrollTrigger for each slide
      ScrollTrigger.create({
        trigger: slides,
        pin:true,
        start: "top center",
        end: "+=95%",
        onEnter: () => showSlide(slide),
        onLeaveBack: () => hideSlide(slide),
        markers: true, // Optional: Remove markers once confirmed working
      });
    });

    // Cleanup on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="projectSection">
      <div className="slide slide-text" id="slide-1">
          <h1 className="text-7xl text-center">Projects</h1>
      </div>
      <div className="slide" id="slide-2">
        <img
          src={
            deviceType === "mobile"
              ? "/assets/circle-large-mob.jpg"
              : "/assets/circle-small-desk.jpg"
          }
          alt="Slide 1"
        />
      </div>
      <div className="slide" id="slide-3">
        <img
          src={
            deviceType === "mobile"
              ? "/assets/metflix-large-mob.jpg"
              : "/assets/metflix-small-desk.jpg"
          }
          alt="Slide 2"
        />
      </div>
      <div className="slide" id="slide-4">
        <img
          src={
            deviceType === "mobile"
              ? "/assets/fruitphone-large-mob.jpg"
              : "/assets/fruitphone-small-desk.jpg"
          }
          alt="Slide 3"
        />
      </div>
    </div>
  );
};

export default ProjectSection;
