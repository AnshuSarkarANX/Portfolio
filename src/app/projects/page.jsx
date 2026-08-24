import Link from "next/link";
import ProjectCard from "../_components/ProjectCard";

const ProjectsArray = [
  {
    name: "Skill.Test",
    shortDescription: "AI-Powered Interview Assessment Platform",
    stack: ["React.js", "Node.js", "SSE"],
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
  {
    name: "TechPulse",
    shortDescription:
      "Distributed Search Engine for latest news around the tech world",
    stack: ["FastAPI", "Elasticsearch", "Docker"],
    link: "https://newsearche.vercel.app/",
    images: ["/assets/projectImages/TechPulseImage.png"],
    description:
      "A search engine that crawls and indexes the latest news from various sources.The backend queries the indexed data that allows users to search for news articles based on keywords, relevance, and other criteria. ",
    demoVideo: "",
    hasDemo: false,
  },
  {
    name: "La Perfume",
    shortDescription:
      "Demo Portfolio for a Perfume Brand",
    stack: ["Next.js", "GSAP", "TailwindCSS"],
    link: "https://laperfumeai.vercel.app/",
    images: ["/assets/projectImages/LaPerfumeImage.png"],
    description:
      "A demo portfolio for a customized perfume brand, showcasing their services.",
    demoVideo: "",
    hasDemo: false,
  },
  {name:"SIXBIT",
    shortDescription:
      "URL shortner with analytics and caching.",
    stack: ["React.js", "Redis", "Express.js"],
    link: "https://sixbit.onrender.com",
    images: ["/assets/projectImages/SixbitImage.png"],
    description:
      "A url shortener with analytics and caching capabilities. Shortens long url to a unique six character code & QR code, caches frequently used urls and monitor click rates.",
    demoVideo: "",
    hasDemo: false,
  }
];

export const metadata = {
  title: "Projects | Anshu Sarkar®",
  description:
    "Selected projects by Anshu Sarkar — AI platforms, full-stack apps and frontend experiments.",
};

const ProjectsPage = () => {
  return (
    <main className="mainSection px-[20px] sm:px-[50px] py-[50px]">
      <h1 className="name mb-[50px]">PROJECTS</h1>
      <div className="flex flex-col gap-[50px]">
        {ProjectsArray.map((project) => (
          <ProjectCard
            key={project.name}
            {...project}
            tag={project.shortDescription}
          />
        ))}
      </div>
      <Link href="/" className="font-jetbrains inline-block mt-[50px] underline">
        ← BACK_HOME
      </Link>
    </main>
  );
};

export default ProjectsPage;
