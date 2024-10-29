import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./projectSection.css";
import Projects from "./Projects.jsx";

const ProjectsArray = [
  {
    image: "/assets/circle-small-desk.jpg",
    title: "Circle",
    techStack:
      "TypeScript, React, Tailwindcss, shadcn, TanStack query, Appwrite",
    description:
      "Circle is an image-based social media app that offers users a responsive and interactive interface, allowing them to like, save, search, create, and edit posts. The app uses Appwrite for user authentication, authorization, database management, and storage, ensuring secure and efficient data handling. With these modern technologies, Cricle delivers a smooth user experience for sharing and discovering images in a social media environment.",
    link: "https://addtocircle.vercel.app/",
  },
  {
    image: "/assets/fruitphone-small-desk.jpg",
    title: "FruitPhone",
    techStack: "ReactJs, GSAP, Three.js, Tailwindcss, Vite",
    description:
      "FruitPhone is a replica website of the iPhone 15 Pro with an interactive and responsive user interface. It showcases a 3D model of the phone using Three.js, allowing users to interact with the model for an immersive experience. The website is styled with Tailwind CSS, ensuring a modern and sleek design. FruitPhone effectively highlights the features and design of the iPhone 15 Pro through a visually engaging platform.",
    link: "https://fruitphone.vercel.app/",
  },
  {
    image: "/assets/metflix-small-desk.jpg",
    title: "Metflix",
    techStack: "ReactJs, FireBase, TMDB API",
    description:
      "Metflix is a Netflix clone developed using ReactJS, providing an interactive and responsive user interface. Trailer videos are fetched and played in real-time from YouTube. User authentication is implemented using Firebase, ensuring secure access and personalized user experiences. Metflix replicates key features of Netflix, offering a smooth and dynamic platform for discovering and streaming media content.",
    link: "https://tadum.vercel.app/",
  },
];
  
const ProjectSection = () => {
     const [deviceType, setDeviceType] = useState("desktop");
     const progressCircle = useRef(null);
     const progressContent = useRef(null);
     const onAutoplayTimeLeft = (s, time, progress) => {
       progressCircle.current.style.setProperty("--progress", 1 - progress);
       progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
     };
     const detectDevice = () => {
       if (window.innerWidth <= 768) {
         setDeviceType("mobile");     
       } else {
         setDeviceType("desktop");
       }
     };

  return (
    <div className="projectSection">
      <h1 className=" text-center text-4xl  sm:text-7xl font-semibold underline my-10">
        {" "}
        Projects{" "}
      </h1>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        rewind={true}
        navigation={{
          nextEl: " .arrow-right",
          prevEl: ".arrow-left",
        }}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {ProjectsArray.map((Project) => (
          <SwiperSlide>
            <Projects Project={Project} />
          </SwiperSlide>
        ))}

        <div className="slider-nav">
          <img
            className=" arrow-left w-fit h-fit rotate-180"
            src="/assets/arrow-right.png"
          />
          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span  ref={progressContent}></span>
          </div>
          <img
            className=" arrow-right w-fit h-fit"
            src="/assets/arrow-right.png"
          />
        </div>
      </Swiper>
    </div>
  );
};

export default ProjectSection;
