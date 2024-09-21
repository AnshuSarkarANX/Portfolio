import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ProjectSection.css";
import Projects from "./Projects.jsx";
import "./ProjectSection.css";
// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);
const ProjectSection = () => {
  const slidesRef = useRef([]);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentTopValue, setCurrentTopValue] = useState(0);
  const [deviceInfo, setDeviceInfo] = useState({
    deviceType: "desk",
    theme: "light",
  });

  const elements = [
    { selector: ".prefix", delay: 0 },
    { selector: ".name", delay: 0 },
    { selector: ".links", delay: 0 },
  ];
  const detectDeviceAndTheme = () => {
    // Detect the device type based on screen width
    if (window.innerWidth <= 768) {
      deviceType = "mob";
    }

    // Detect the user's preferred color scheme (theme)
    const theme =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";

    return { deviceType, theme };
  };

  const showSlide = (index) => {
    if (isAnimating) return;
    setIsAnimating(true);
    const slide = slidesRef.current[index];
    const img = slide.querySelector("img");

    setCurrentTopValue((prev) => prev - 25);

    elements.forEach((elem) => {
      gsap.to(document.querySelector(elem.selector), {
        y: `${currentTopValue - 30}px`,
        duration: 1.5,
        ease: "power4.inOut",
        delay: elem.delay,
      });
    });

    gsap.to(img, {
      scale: 0.9,
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

  const hideSlide = (index) => {
    if (isAnimating) return;
    setIsAnimating(true);
    const slide = slidesRef.current[index];
    const img = slide.querySelector("imga");

    setCurrentTopValue((prev) => prev + 25);

    elements.forEach((elem) => {
      gsap.to(document.querySelector(elem.selector), {
        y: `${currentTopValue + 22}px`,
        duration: 1,
        delay: elem.delay,
      });
    });

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
    // Initialize gsap animations for all slides
    slidesRef.current.forEach((slide, idx) => {
      if (idx !== 0) {
        const img = slide.querySelector("img");
        gsap.set(img, { scale: 1, top: "4em" });
      }
    });

    const handleWheel = (e) => {
      if (isAnimating) return;
      if (e.deltaY > 0 && currentSlideIndex < slidesRef.current.length - 1) {
        showSlide(currentSlideIndex + 1);
        setCurrentSlideIndex((prev) => prev + 1);
      } else if (e.deltaY < 0 && currentSlideIndex > 0) {
        hideSlide(currentSlideIndex);
        setCurrentSlideIndex((prev) => prev - 1);
      }
    };

    // Add wheel event listener
    window.addEventListener("wheel", handleWheel);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [currentSlideIndex, isAnimating, currentTopValue]);

  return (
    <div className="projectSection">
      <div className="slider-content">
        <div className="slide-number">
          <div className="prefix">
            <div> n</div>
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </div>
          <div className="postfix">
            <span>/</span>3
          </div>
        </div>
        <div className="slide-name">
          <div className="name">
            <div> l </div>
            <div>Image 1</div>
            <div>Image 2</div>
            <div>Image 3</div>
          </div>
        </div>
        <div className="slide-year">
          <div className="links">
            <div> a</div>
            <div>2023</div>
            <div>2024</div>
            <div>2020</div>
          </div>
        </div>
      </div>

      <div className="slider">
        <div
          className="slide slide-text     "
          id="slide-1"
          ref={(el) => (slidesRef.current[0] = el)}
        >
          <div className="slide-text bg-inherit">
            <h1 className="text-7xl text-center">Projects</h1>
          </div>
        </div>
        <div
          className="slide"
          id="slide-2"
          ref={(el) => (slidesRef.current[1] = el)}
        >
          <img src="./assets/circle-small-desk.jpg" alt="Slide 1" />
        </div>
        <div
          className="slide"
          id="slide-3"
          ref={(el) => (slidesRef.current[2] = el)}
        >
          <img src="./assets/metflix-small-desk.jpg" alt="Slide 2" />
        </div>
        <div
          className="slide"
          id="slide-4"
          ref={(el) => (slidesRef.current[3] = el)}
        >
          <img src="./assets/fruitphone-small-desk.jpg" alt="Slide 3" />
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
