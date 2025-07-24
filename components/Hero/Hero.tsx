import HeroContent from "./Content";
import Photo from "./Photo";

const Hero = () => {
  return (
    <div className="flex flex-col min-[768px]:flex-row min-[768px]:pt-20 min-[768px]:pb-[84px]  ">
      <Photo />
      <HeroContent />
    </div>
  );
};

export default Hero;
