import {lazy,Suspense} from 'react'
import Projects from './Projects.jsx'
// const circleImageSmall = lazy(()=>import({circle_small_desk}))

const ProjectSection = () => {
  return (
    <div className="projectSection h-screen">
      <h1 className="text-7xl underline">Projects</h1>
      <Projects
        image={"./src/assets/circle_small_desk.jpg"}
        title={"Circle"}
        description={"An image-based social media app"}
        techstack={
          "TypeScript, React, Tailwindcss, shadcn, TanStack query, Appwrite"
        }
        link={"https://addtocircle.vercel.app/"}
      />
      <Projects
        image={"./src/assets/circle_small_desk.jpg"}
        title={"Metflix"}
        description={
          "A clone media streaming website for watching trailer of movie,webseries and documentries."
        }
        techstack={"ReactJs, FireBase, TMDB API"}
        link={"https://tadum.vercel.app/"}
      />
      <Projects
        image={"./src/assets/circle_small_desk.jpg"}
        title={"FruitPhone"}
        description={"A replica website of IPhone 15 pro"}
        techstack={"ReactJs, GSAP, Three.js, Tailwindcss, Vite"}
        link={"https://fruitphone.vercel.app/"}
      />
    </div>
  );
}

export default ProjectSection