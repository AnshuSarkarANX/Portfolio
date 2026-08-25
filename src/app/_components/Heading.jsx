import Link from "next/link";

const Heading = ({ text, buttonText = "", buttonLink = "" }) => {
  return (
    <div className="flex items-end justify-between gap-[15px] pb-[18px] mb-[50px] border-b-[3px] border-solid border-soot">
      <h2 className="font-display text-3xl font-bold uppercase leading-none tracking-tight sm:text-4xl md:text-5xl">
        {text}
      </h2>
      <div>
        {buttonText.length > 0 && (
          <Link
            href={buttonLink}
            className="stamp-btn px-[12px] py-[6px] text-xs sm:text-sm"
          >
            {buttonText}
          </Link>
        )}
      </div>
    </div>
  );
};

export default Heading;
