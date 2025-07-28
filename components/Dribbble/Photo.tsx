import Image from "next/image";
import React from "react";

const Photo = () => {
  return (
    <>
      <Image
        src="/dribbbleMob.png"
        alt="website"
        width={320}
        height={516}
        className="w-full min-md:hidden mt-16"
      />
      <Image
        src="/dribbbleMd.png"
        alt="website"
        width={688}
        height={516}
        className="hidden min-[768px]:block w-full min-[1440px]:hidden mt-[120px] "
      />
      <Image
        src="/dribbbleMax.png"
        alt="website"
        width={1076}
        height={676}
        className="hidden w-full min-[1440px]:block mt-[120px] "
      />
    </>
  );
};

export default Photo;
