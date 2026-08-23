const ImageContainer = ({ image }) => {
  return (
    <div
      className="relative bg-contain h-full w-full"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      {/* Image for column layout */}
      <img
        className="lg:hidden object-contain object-center w-full h-[400px] relative z-[10]"
        src={image}
        alt="project"
      />

      {/* Blur overlay */}
      <div className="absolute inset-0 backdrop-blur-lg bg-grey/5"></div>

      {/* Main image */}
      <div
        className="h-full w-full relative z-[10] bg-contain bg-center bg-no-repeat hidden lg:block"
        style={{
          backgroundImage: `url(${image})`,
        }}
      />
    </div>
  );
};

export default ImageContainer;
