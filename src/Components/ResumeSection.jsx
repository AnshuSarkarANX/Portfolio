import "react-iv-viewer/dist/react-iv-viewer.css";
import { FullScreenViewer } from "react-iv-viewer";
import {useState} from "react";
const ResumeSection = () => {
    const [clicked, setClicked] = useState(false);
    const handleClick = () =>{
        setClicked(true);
        setTimeout(() => {
           setClicked(false); 
        }, 3000);
    }
  return (
    <div className="h-fit w-[70vmin] mx-auto flex flex-col items-center ">
      <h1 className="text-4xl  md:text-5xl font-semibold underline my-10">
        Resume
      </h1>
      <FullScreenViewer img="/ResumeLow.jpg" hiResImg="/Resume.jpg" />
      <a href="https://drive.google.com/file/d/15V6TpSG069W4nlxTzlZyQrwfZQAKVm2I/view?usp=sharing"  target="_blank">
        <button
          className={`my-[5vmin] border-dotted border-[#222121]  p-1 border-[3px] hover:border-solid transition
      ${clicked ? "bg-black bg-opacity-20" : ""}`}
          onClick={handleClick}
        >
          Download
        </button>
      </a>
    </div>
  );
}

export default ResumeSection