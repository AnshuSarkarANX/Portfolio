import {useState,useEffect} from "react"
import "./projects.css"

const Projects = ({Project}) => {
     const [deviceType, setDeviceType] = useState("desktop");
          const detectDevice = () => {
            if (window.innerWidth <= 768) {
              setDeviceType("mobile");
            } else {
              setDeviceType("desktop");
            }
          };
          useEffect(() => {
            detectDevice();
          }, [window.innerWidth])
          
  return (
    <div className="projectBox md:my-10 mx-12">
      <div className=" border-double border-8 border-blackish p-0.5">
        <img src={Project.image} className=" projectImg w-full h-full" />
      </div>

      <div className="projectDetails">
        <div className=" flex  justify-between">
          <h2 className=" inline-block font-bold text-5xl text-left mb-5">
            {Project.title}
          </h2>
          <a
            className=" link-text text-2xl font-semibold text-blue-600 hover:underline md:mr-14"
            href={Project.link}
            target="_blank"
          >
            Visit
          </a>
        </div>

        <p className=" text-blackish opacity-95">{Project.techStack}</p>
        <p className=" text-blackish opacity-80">{Project.description}</p>
      </div>
    </div>
  );
};

export default Projects;
