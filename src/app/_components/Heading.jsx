import { useNavigate } from "react-router";
const Heading = ({ no, text, buttonText = "", buttonLink = "" }) => {
  const formatNumber = (num) => {
    if (num < 10) {
      return `0${num}`;
    }
    return num;
  };
  console.log(buttonText, buttonLink) 
  const navigate = useNavigate();
  return (
    <div className="flex gap-[15px] items-center justify-between pb-[25px] mb-[50px]  border-b border-solid border-blackish border-opacity-40">
      <div className="flex gap-[15px] items-center flex-1">
        <div className="bg-blackish text-white text-[14px] sm:text-[16px] lg:text-[20px] py-[5px] px-[10px] font-jetbrains">
          {formatNumber(no)}
        </div>
        <p className="font-header font-semibold text-[24px] md:text-[32px] lg:text-[40px]">
          {text}
        </p>
      </div>
      <div>
        {buttonText.length > 0 && (
          <button className="bg-blackish text-white border-solid border border-white border-opacity-50 px-[10px] sm:px-[16px] py-[5px] sm:py-[5px] w-full sm:w-fit self-end text-[20px]" onClick = {()=>navigate(buttonLink)}>
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
};

export default Heading;