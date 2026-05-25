const WorkEx = ({ title, duration, points }) => {
  return (
    <div className="flex h-fit w-fit lg:w-screen mb-10 ">
      <div className="h-fit w-fit ">
        <h1 className="text-xl md:text-2xl font-semibold">{title}</h1>
        <p className="font-medium text-lg opacity-90">{duration}</p>
        <ul className="lg:mx-[10vmin]  pl-[15px] lg:pl-0 list-disc space-y-2">
          {points.map((point, index) => (
            <li key={index} className="opacity-85">
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WorkEx;
