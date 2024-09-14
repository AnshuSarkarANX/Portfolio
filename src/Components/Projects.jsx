import React from "react";

const Projects = ({image,title,description,techstack,link}) => {
  return (
    <div className="projectBox flex gap-4 my-10">
  
        <div className=" border-double border-8 border-blackish p-0.5">
          <img src={image} className=" projectImg w-fit h-fit" />
      </div>

      <div className="projectDetails">
        <h2 className=" inline-block font-bold text-5xl text-left">{title}</h2>
        <p>{description}</p>
        <p>{techstack}</p>
        <a className=" hover:underline-offset" href={link}>
          Visit
        </a>
      </div>
    </div>
  );
};

export default Projects;
