"use client";

import { FaArrowRight } from "react-icons/fa";
import dynamic from "next/dynamic";
import ImageContainer from "./ImageContainer";
import { handleLinkOpen } from "./Hooks";
import { useState } from "react";

const VideoPlayerComponent = dynamic(
  () => import("./VideoPlayer").then((m) => m.VideoPlayerComponent),
  {
    ssr: false,
    loading: () => (
      <div className="h-full w-full animate-pulse bg-blackish/10" />
    ),
  },
);

const ProjectCard = ({
  name,
  description,
  tag,
  link,
  images = [""],
  stack = [""],
  demoVideo,
  hasDemo = false,
}) => {
  const [isDemo, setIsDemo] = useState(false);
  return (
    <div className="grid lg:grid-cols-12 ">
      {/* Image container*/}
      <div className="lg:col-span-8 mb-[50px] flex flex-col gap-[20px] h-[400px]">
        {isDemo ? (
          <VideoPlayerComponent src={demoVideo} />
        ) : (
          <ImageContainer image={images[0]} />
        )}
      </div>

      {/* Card container*/}
      <div className="lg:p-[50px] p-[15px] flex flex-col lg:col-span-4 bg-white drop-shadow-lg lg:ml-[-50px] gap-[25px] h-fit ">
        <div className="font-jetbrains text-secondary">
          {name}: {tag}
        </div>
        <p className="font-bold font-header text-[30px] sm:text-[36px] lg:text-[44px]">
          {name}
        </p>
        <p>{description}</p>
        <div className="grid grid-cols-3 gap-[10px]">
          {stack.map((t, i) => {
            return (
              <div
                key={i}
                className="border border-blackish/30 flex text-[14px] items-center justify-center font-jetbrains border-solid text-center px-[10px] py-[4px]"
              >
                {t}
              </div>
            );
          })}
        </div>
        <div className="grid grid-cols-10 items-stretch gap-[10px]">
          {" "}
          <button
            className={`font-jetbrains w-full bg-blackish text-white  border-solid border border-secondary/50 px-[10px] py-[10px]  flex justify-center items-center gap-[50px] ${
              hasDemo ? "col-span-7" : "col-span-10"
            }`}
            onClick={() => handleLinkOpen(link)}
          >
            <p className="ml-[50px] font-bold">View Live</p>{" "}
            <FaArrowRight className="-rotate-45" />
          </button>
          {hasDemo && (
            <button
              className="font-jetbrains col-span-3  border-blackish text-black  border-solid border  border-blackish/30 py-[10px] px-[8px] "
              onClick={() => setIsDemo((prev) => !prev)}
            >
              {isDemo ? "Hide Demo" : "View Demo"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
