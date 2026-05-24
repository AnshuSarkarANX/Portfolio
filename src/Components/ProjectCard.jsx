import { FaArrowRight } from "react-icons/fa";
const ProjectCard = ({
  name,
  description,
  tag,
  link,
  images = [""],
  stack = ["React", "NodeJs", "Gemini"],
}) => {
  return (
    <div className="grid lg:grid-cols-12 ">
      <div className="col-span-8 mb-[50px] w-full border border-solid border-black">
        <img
          className="w-full"
          alt="project image"
          src="./assets/projectImages/skilltestimage1.png"
        />
      </div>
      <div className="p-[10px] flex flex-col col-span-4 bg-white drop-shadow-lg lg:ml-[-50px] gap-[15px] ">
        <div className="font-jetbrains text-secondary">
          {name}: {tag}
        </div>
        <p className="font-bold font-header text-[28px] sm:text-[36px] lg:text-[44px]">
          {name}
        </p>
        <p>{description}</p>
        <div className="grid grid-cols-3 gap-[10px]">
          {stack.map((t, i) => {
            return (
              <div
                key={i}
                className="border border-opacity-30 flex items-center justify-center font-jetbrains border-solid border-blackish text-center px-[10px] py-[4px]"
              >
                {t}
              </div>
            );
          })}
        </div>
        <button className="font-jetbrains w-full hover:bg-blackish hover:text-white text-secondary  border-solid border border-secondary border-opacity-50  flex items-center  px-[10px] py-[10px] sm:2px] ">
          <p >View Live</p> <FaArrowRight className="" />
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
