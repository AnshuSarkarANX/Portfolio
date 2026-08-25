"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

const FullScreenViewer = dynamic(
  () => import("react-iv-viewer").then((m) => m.FullScreenViewer),
  {
    ssr: false,
    loading: () => (
      <div className="h-[60vmin] w-full animate-pulse bg-risoblue/20" />
    ),
  },
);

const ResumeSection = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 3000);
  };
  return (
    <div className="h-fit w-[70vmin] mx-auto flex flex-col items-center">
      <h2 className="font-display text-4xl md:text-5xl font-bold uppercase my-10">
        Take a copy home
      </h2>
      <FullScreenViewer img="/ResumeLow.jpg" hiResImg="/Resume.jpg" />
      <a
        href="https://drive.google.com/file/d/1OLZ4fbczkBDaV2ZR-Co98w9mVbPXt8dd/view?usp=sharing"
        target="_blank"
      >
        <button
          className={`stamp-btn stamp-btn--ink my-[5vmin] text-sm ${
            clicked ? "translate-y-[2px]" : ""
          }`}
          onClick={handleClick}
        >
          Download resume
        </button>
      </a>
    </div>
  );
};

export default ResumeSection;
