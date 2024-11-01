import Navbar from './Components/Navbar';
import WorkEx from './Components/WorkEx';
import ProjectSection from './Components/ProjectSection';
import './app.css';
import ResumeSection from './Components/ResumeSection';
export function App() {

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
        <div className="mainSection  text-center">
          <div className="Namebar">
            <p className="Name font-bold drop-shadow-sm">ANSHU SARKAR</p>
          </div>
          <div className="rolebox">
            <p className="role font-bold drop-shadow-lg ">Frontend Developer</p>
          </div>
          <Navbar />
        </div>
        <ProjectSection />
        <div className=" flex flex-col md:flex-row md:gap-1 gap-[5vh] justify-around my-32">
          <ResumeSection />
          <div className="  text-center">
            <h1 className=" text-4xl  md:text-5xl font-semibold underline my-10 ">
              Work Experience
            </h1>
            <div className=" flex flex-col items-center mx-auto text-left ">
              <WorkEx
                title="Frontend Developer - WEBAXD"
                duration="June - July, 2024"
                points={[
                  "Developed a Javascript algorithm to improve the loading speed by 90%",
                  "Designed and implemented new features for better user experience",
                  "Successfully delivered multiple projects",
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
