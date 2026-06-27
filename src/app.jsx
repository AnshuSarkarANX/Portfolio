import { useEffect, useRef, useState } from "react";
import WorkEx from "./Components/WorkEx";
import ProjectSection from "./Components/ProjectSection";
import "./app.css";
import "./Components/navbar.css";
import ResumeSection from "./Components/ResumeSection";
import Contacts from "./Components/Contacts";
import { Analytics } from "@vercel/analytics/react";
import Heading from "./Components/Heading";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import WorkExAccordian from "./Components/WorkExAccordian";
import HeroSection from "./Components/HeroSection";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, useGSAP);

export function App() {
  const resumeRef = useRef(null);
  const projectRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const handleNavClick = (ref) => {
    setTimeout(() => {
      ref?.current.scrollIntoView({ behavior: "smooth" });
    }, 150);
  };

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
  const bodyRef = useRef(null);
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  useEffect(() => {
    // 2. Define the resize handler
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    // 3. Attach the event listener
    window.addEventListener("resize", handleResize);

    // 4. Clean up the event listener on unmount to prevent memory leaks
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useGSAP(() => {
    const section = sectionRef.current;
    const body = bodyRef.current;
    const track = trackRef.current;

    const smooth = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.2, // how long (in seconds) it takes to "catch up" to the native scroll position

      smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
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
  });

  useEffect(() => {
    window.addEventListener("resize", detectDevice);
  }, []);

  return (
    <div className="" ref={bodyRef} id="smooth-wrapper">
      <div
        className="bg-[linear-gradient(to_right,#5e5e5e1a_2px,transparent_1px),linear-gradient(to_bottom,#5e5e5e1a_2px,transparent_1px)]
    bg-[size:40px_40px] "
        id="smooth-content"
      >
        {/* <div className="white">
          <div className="squares">
            {Array.from({ length: 10 }).map((_, index) => (
              <div key={index} className="square"></div>
            ))}
          </div>
        </div>*/}

        <HeroSection handleResumeDownload={handleResumeDownload} />
        <Analytics />
        <div ref={aboutRef} className="section">
          {/* About Section Content */}
        </div>

        <div ref={projectRef} className="section px-[20px] sm:px-[50px]">
          <ProjectSection />
        </div>

        <div ref={sectionRef} className="section px-[20px] sm:px-[50px] ">
          <Heading text={"Experience"} no={2} />
          {isMobile ? (
            <WorkExAccordian />
          ) : (
            <div className="overflow-hidden ">
              <div
                ref={trackRef}
                className="flex lg:flex-row flex-col gap-[100px] w-max lg:px-[50px] "
              >
                <div className="w-fit">
                  <WorkEx
                    title="Frontend Developer Intern  - Pearl Thoughts"
                    duration="Oct - Nov, 2024"
                    points={[
                      "Built a Doctor’s Appointment Booking app with an intuitive, user-friendly UI.",
                      "Implemented full CRUD functionality for appointments using REST APIs.",
                      "Enhanced user experience with a responsive and seamless interface.",
                    ]}
                  />
                  <WorkEx
                    title="Frontend Developer Intern - WEBAXD"
                    duration="Jun - Aug, 2024"
                    points={[
                      "Developed a Javascript algorithm to improve the loading speed by 90%",
                      "Designed and implemented new features for better user experience",
                      "Successfully delivered multiple projects",
                    ]}
                  />
                </div>
                <WorkEx
                  title="Frontend Developer - cvDragon"
                  duration="Dec,2024 - Jan, 2026"
                  className="lg:w-[min(75vw,1200px)]"
                  points={[
                    "Built an event management system with dynamic forms, supporting multi-user registration, payment gateway integration, and automated ticket generation",
                    "Developed a centralised task system replacing manual email workflows, enabling instant CSV report generation and reducing processing time from months to seconds",
                    "Built a multi-role Upasak system handling allocation across 400+ Sabhas through admin-controlled workflows",
                    "Developed a bulk messaging feature to send targeted messages to up to 2000 users with push notifications using OneSignal",
                    "Worked on a hotel management system including inventory interfaces and CSV-based data migration tools",
                  ]}
                />
                <WorkEx
                  title="Full-Stack Developer - PepHub Consultancy"
                  duration="Feb,2026 - Present"
                  className="lg:w-[80vw]"
                  points={[
                    "Developed a community-driven platform that enables users to create groups, organize events, manage participation, and coordinate activities through a centralized workflow",
                    "Developed scalable REST APIs, JWT-based authentication, database models using Prisma ORM, and business workflows supporting e-commerce operations and customer account management",

                    "Implemented performance optimizations, including virtualization and reusable UI patterns, to improve rendering efficiency and user experience when handling large datasets",
                  ]}
                />
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
