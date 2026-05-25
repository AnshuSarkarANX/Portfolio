import { FaArrowRight } from "react-icons/fa";
import { handleLinkOpen } from "../Hooks";
import ImageContainer from "./ImageContainer";
const ProjectCard = ({
  name,
  description,
  tag,
  link,
  images = [""],
  stack = [""],
}) => {
  return (
    <div className="grid lg:grid-cols-12 ">
      {/* Image container*/}
      <div className="lg:col-span-8 mb-[50px]">
        <ImageContainer image={images[0]} />
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
                className="border border-opacity-30 flex  text-[14px] items-center justify-center font-jetbrains border-solid border-blackish text-center px-[10px] py-[4px]"
              >
                {t}
              </div>
            );
          })}
        </div>
        <button
          className="font-jetbrains w-full bg-blackish text-white  border-solid border border-secondary border-opacity-50 px-[10px] py-[10px] sm:2px] flex justify-center items-center gap-[50px]"
          onClick={() => handleLinkOpen(link)}
        >
          <p className="ml-[50px] font-bold">View Live</p>{" "}
          <FaArrowRight className="-rotate-45" />
        </button>
      </div>
      {/*rest of the images*/}
      <div className="grid lg:col-span-12 lg:grid-cols-2 gap-[50px] my-[50px] lg:h-[500px] w-full ">
        <div className="h-[380px] lg:self-start lg:w-[85%] justify-self-center w-full ">
          <ImageContainer image={images[1]} />
        </div>
        <div className=" hidden lg:block h-[380px] lg:self-end w-full lg:w-[85%] justify-self-center ">
          <ImageContainer image={images[2]} />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
