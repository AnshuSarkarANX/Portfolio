import {useState,useEffect} from "react"

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
    <div className="projectBox flex gap-4 my-10 mx-12">
      <div className=" border-double border-8 border-blackish p-0.5">
        <img src={Project.image} className=" projectImg w-fit h-fit" />
      </div>

      <div className="projectDetails">
        <h2 className=" inline-block font-bold text-5xl text-left">
          {Project.title}
        </h2>
        <p className=" text-blackish opacity-90">{Project.techStack}</p>
        <p>{Project.description}</p>
        <a className=" text-xl text-blue-600 hover:underline" href={Project.link}>
          Visit
        </a>
      </div>
    </div>
  );
};

export default Projects;
