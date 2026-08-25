import "./projectSection.css";
import Heading from "./Heading.jsx";
import ProjectCard from "./ProjectCard.jsx";

const ProjectsArray = [
  {
    name: "Skill.Test",
    shortDescription: "AI-Powered Interview Assessment Platform",
    stack: ["React.js", "Voice-Agents", "WebSockets"],
    link: "https://skilltestai.vercel.app/",
    images: [
      "/assets/projectImages/skilltestimage1.png",
      "/assets/projectImages/skilltestimage2.png",
      "/assets/projectImages/skilltestimage3.png",
    ],
    description:
      "AI-powered interview and assessment platform that evaluates skills, matches resumes with job descriptions, and conducts personalized voice-based interviews.",
    demoVideo:
      "https://stream.mux.com/swxtlyqaoozs4Lh5akj4benLZmHskwMZx8i01AwflVOE.m3u8",
    hasDemo: true,
  },
];

const ProjectSection = () => {
  return (
    <div className="projectSection ">
      <Heading text={"Projects"} buttonText="View All" buttonLink="/projects" />
      <div className="flex flex-col gap-[20px]">
        {ProjectsArray.map((project, i) => (
          <ProjectCard
            key={project.name}
            name={project.name}
            description={project.description}
            stack={project.stack}
            tag={project.shortDescription}
            link={project.link}
            demoVideo={project.demoVideo} 
            hasDemo={project.hasDemo}
            images={project.images}
            edition={`Ed.${String(i + 1).padStart(2, "0")}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
