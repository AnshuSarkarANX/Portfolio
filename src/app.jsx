import { useRef } from "react";
import WorkEx from "./Components/WorkEx";
import ProjectSection from "./Components/ProjectSection";
import "./app.css";
import "./Components/navbar.css";
import ResumeSection from "./Components/ResumeSection";
import Contacts from "./Components/Contacts";

export function App() {
  const resumeRef = useRef(null);
  const projectRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const handleNavClick = (ref) => {
    setTimeout(() => {
      ref?.current.scrollIntoView({ behavior: "smooth" });
    },150);
  };

  return (
    <>
      <div className="app relative">
        <div className="white">
          <div className="squares">
            {Array.from({ length: 10 }).map((_, index) => (
              <div key={index} className="square"></div>
            ))}
          </div>
        </div>

        <div className="mainSection text-center">
          <div className="Namebar">
            <p className="Name font-bold drop-shadow-sm">ANSHU SARKAR</p>
          </div>
          <div className="rolebox">
            <p className="role font-bold drop-shadow-lg">Frontend Developer</p>
          </div>

          <div className="navbar">
            <button onClick={() => handleNavClick(aboutRef)}>About</button>
            <button onClick={() => handleNavClick(projectRef)}>Projects</button>
            <button onClick={() => handleNavClick(resumeRef)}>Resume</button>
            <button onClick={() => handleNavClick(contactRef)}>
              Contact Me
            </button>
          </div>
        </div>

        <div ref={aboutRef} className="section">
          {/* About Section Content */}
        </div>

        <div ref={projectRef} className="section">
          <ProjectSection />
        </div>

        <div
          ref={resumeRef}
          className="section relative flex flex-col md:flex-row md:gap-1 gap-[5vh] justify-around my-32"
        >
          <ResumeSection />
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-semibold underline my-10">
              Work Experience
            </h1>
            <div className="relative flex flex-col justify-between items-center mx-auto text-left">
              <WorkEx
                title="Frontend Developer Intern - Pearl Thoughts"
                duration="Oct - Nov, 2024"
                points={[
                  "Developed a Javascript algorithm to improve the loading speed by 90%",
                  "Designed and implemented new features for better user experience",
                  "Successfully delivered multiple projects",
                ]}
              />
              <WorkEx
                title="Frontend Developer - WEBAXD"
                duration="May - Aug, 2024"
                points={[
                  "Built a Doctor’s Appointment Booking app with an intuitive, user-friendly UI.",
                  "Implemented full CRUD functionality for appointments using REST APIs.",
                  "Enhanced user experience with a responsive and seamless interface.",
                ]}
              />
            </div>
          </div>
        </div>

        <div ref={contactRef} className="section">
          <Contacts />
        </div>
      </div>
    </>
  );
}
