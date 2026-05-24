
const Heading = ({no,text}) => {
    const formatNumber = (num) => {
    if (num < 10) {
      return `0${num}`;
    }
    return num;
  };
  return (
    <div className="flex gap-[15px] items-center pb-[25px] mb-[50px]  border-b border-solid border-blackish border-opacity-40">
      <div className="bg-blackish text-white text-[14px] sm:text-[16px] lg:text-[20px] py-[5px] px-[10px] font-jetbrains">
        {formatNumber(no)}
      </div>
      <p className="font-header font-semibold text-[20px] md:text-[28px] lg:text-[32px]">
        {text}
      </p>
    </div>
  );
}

export default Heading