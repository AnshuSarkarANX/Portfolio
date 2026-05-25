import { useRef } from "react";
import WorkEx from "./Components/WorkEx";
import ProjectSection from "./Components/ProjectSection";
import "./app.css";
import "./Components/navbar.css";
import ResumeSection from "./Components/ResumeSection";
import Contacts from "./Components/Contacts";
import { Analytics } from "@vercel/analytics/react";

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

  return (
    <div className="">
      {/*Desktop Side bar */}
      <div className="hidden static lg:fixed lg:block top-0 left-0   z-10 bg-backGround h-screen w-[50px] border-2 border-red-500 border-solid transition-all duration-300 ease-in-out">
        abc
      </div>
      <div
        className="bg-[linear-gradient(to_right,#5e5e5e1a_2px,transparent_1px),linear-gradient(to_bottom,#5e5e5e1a_2px,transparent_1px)]
    bg-[size:40px_40px] lg:pl-[50px]"
      >
        {/* <div className="white">
          <div className="squares">
            {Array.from({ length: 10 }).map((_, index) => (
              <div key={index} className="square"></div>
            ))}
          </div>
        </div>*/}

        <div className="mainSection text-center h-screen pb-[50px] sm:pb-[100px]">
          <div className="grid lg:grid-cols-10 h-full bg-[url('./assets/abstract_element.svg')] bg-fit bg-[position:30%_center] bg-no-repeat">
            <div className="sm:col-span-6 flex flex-col justify-between">
              <div className="bg-backGround text-secondary text-opacity-50 border-solid border border-secondary border-opacity-30 w-fit px-[10px]">
                SYS.INIT // 2024
              </div>
              <div className="w-fit">
                <p className="name">
                  ANSHU <br />
                  SARKAR
                </p>

                <p className="font-jetbrains  text-[12px] sm:text-[16px] opacity-70 text-center">
                  ENGINEERING DIGITAL INTERFACES
                </p>

                <p className="role">
                  Frontend <br />
                  Developer
                </p>
              </div>
            </div>

            <div className="sm:col-span-4 flex items-end">
              <div className="border-l border-solid border-black font-jetbrains px-[20px]">
                <p className="opacity-70 text-left mb-[20px] text-[12px] sm:text-[16px]">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Iste, laboriosam ab tempora odio exercitationem aliquid
                  perspiciatis quia
                </p>
                <div className="flex flex-col sm:flex-row  gap-[25px] ">
                  <button className="bg-backGround hover:bg-blackish hover:text-white text-secondary  border-solid border border-secondary border-opacity-50 px-[10px] py-[10px] sm:2px]  w-full sm:w-fit">
                    INITIATE_CONTACT()
                  </button>

                  <button
                    onClick={handleResumeDownload}
                    className="bg-backGround hover:bg-blackish hover:text-white text-secondary  border-solid border border-secondary border-opacity-50 px-[10px] py-[10px] sm:py-[2px] w-full sm:w-fit"
                  >
                    DL_RESUME.PDF
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/*<div className="navbar">
            <button onClick={() => handleNavClick(aboutRef)}>About</button>
            <button onClick={() => handleNavClick(projectRef)}>Projects</button>
            <button onClick={() => handleNavClick(resumeRef)}>Resume</button>
            <button onClick={() => handleNavClick(contactRef)}>
              Contact Me
            </button>
          </div>*/}
        </div>
        <Analytics />
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

          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-semibold underline my-10">
              Work Experience
            </h1>
            <div className="relative flex flex-col justify-between items-center mx-auto text-left">
              <WorkEx
                title="Frontend Developer - Pearl Thoughts"
                duration="Oct - Nov, 2024"
                points={[
                  "Built a Doctor’s Appointment Booking app with an intuitive, user-friendly UI.",
                  "Implemented full CRUD functionality for appointments using REST APIs.",
                  "Enhanced user experience with a responsive and seamless interface.",
                ]}
              />
              <WorkEx
                title="Frontend Developer - WEBAXD"
                duration="May - Aug, 2024"
                points={[
                  "Developed a Javascript algorithm to improve the loading speed by 90%",
                  "Designed and implemented new features for better user experience",
                  "Successfully delivered multiple projects",
                ]}
              />
            </div>
          </div>
        </div>

        <div ref={contactRef} className="section">
          <Contacts />
        </div>
      </div>
    </div>
  );
}
