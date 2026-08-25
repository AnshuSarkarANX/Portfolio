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
      <div className="h-full w-full animate-pulse bg-risoblue/20" />
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
  edition,
}) => {
  const [isDemo, setIsDemo] = useState(false);
  return (
    <article className="relative grid lg:grid-cols-12">
      {/* Plate */}
      <div className="lg:col-span-8 mb-[50px] flex flex-col gap-[20px] h-[400px]">
        {isDemo ? (
          <VideoPlayerComponent src={demoVideo} />
        ) : (
          <ImageContainer image={images[0]} />
        )}
      </div>

      {/* Spec ticket */}
      <div className="lg:p-[50px] p-[15px] flex flex-col lg:col-span-4 bg-paper border-2 border-soot lg:ml-[-50px] relative z-10 gap-[22px] h-fit">
        {edition && (
          <span
            aria-hidden
            className="absolute -top-4 -left-3 rotate-[-6deg] border-2 border-soot bg-paper px-2 py-1 font-marks text-[11px] uppercase"
          >
            {edition}
          </span>
        )}

        <p className="font-marks text-xs uppercase tracking-widest text-soot/70">
          {tag}
        </p>
        <h3 className="font-display text-3xl font-bold uppercase leading-none sm:text-4xl lg:text-[44px]">
          {name}
        </h3>
        <p>{description}</p>
        <ul className="flex flex-wrap gap-[10px]">
          {stack.map((t) => (
            <li
              key={t}
              className="border-2 border-soot px-[10px] py-[4px] font-marks text-[13px]"
            >
              {t}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap items-stretch gap-[10px]">
          <button
            className="stamp-btn flex-1 justify-between py-[10px] text-sm"
            onClick={() => handleLinkOpen(link)}
          >
            View live
            <FaArrowRight className="-rotate-45" />
          </button>
          {hasDemo && (
            <button
              className="stamp-btn stamp-btn--blue py-[10px] text-sm"
              onClick={() => setIsDemo((prev) => !prev)}
            >
              {isDemo ? "Hide demo" : "View demo"}
            </button>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
