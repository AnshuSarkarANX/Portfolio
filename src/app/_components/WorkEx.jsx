const WorkEx = ({ title, duration, points, className = "" }) => {
  return (
    <div className={`flex h-fit w-fit ${className} `}>
      <div className="h-fit w-fit">
        <h3 className="font-display text-xl md:text-2xl font-bold uppercase leading-tight">
          {title}
        </h3>
        <p className="mt-1 font-marks text-xs uppercase tracking-widest text-fluoro">
          {duration}
        </p>
        <ul className="lg:mx-[10vmin] mt-4 pl-[15px] lg:pl-0 list-disc space-y-2 marker:text-fluoro">
          {points.map((point, index) => (
            <li key={index} className="text-soot/85">
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WorkEx;
