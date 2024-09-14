import React from 'react'
import Projects from './Projects.jsx'

const ProjectSection = () => {
  return (
    <div className="projectSection h-screen">
      <h1 className="text-7xl underline">Projects</h1>
      <Projects
        image={
          "./src/assets/circle_small_desk.jpg"
        }
        title={"Circle"}
        description={"An image-based social media app"}
        techstack={
          "TypeScript, React, Tailwindcss, shadcn, TanStack query, Appwrite"
        }
        link={"https://addtocircle.vercel.app/"}
      />
    </div>
  );
}

export default ProjectSection