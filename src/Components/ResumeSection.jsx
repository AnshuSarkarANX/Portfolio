import "react-iv-viewer/dist/react-iv-viewer.css";
import { FullScreenViewer } from "react-iv-viewer";

const ResumeSection = () => {
  return (
    <div className="h-fit w-[70vmin] mx-auto flex flex-col items-center ">
      <h1 className="text-4xl  md:text-5xl font-semibold underline my-10">
        Resume
      </h1>
      <FullScreenViewer img="/ResumeLow.jpg" hiResImg="/Resume.jpg" />
    </div>
  );
}

export default ResumeSection