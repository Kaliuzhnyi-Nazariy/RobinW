import Image from "next/image";
import React from "react";

const Photo = () => {
  return (
    <Image
      src="/glassPhoto.png"
      alt="Photo of glass and forest background"
      width={360}
      height={450}
      className="w-full min-h-[288px] max-h-[350px] object-cover object-top min-[768px]:min-h-[600px] min-[768px]:max-h-[600px] min-[768px]:min-w-[384px] min-[768px]:max-w-[50%] min-[1440px]:object-center "
    />
  );
};

export default Photo;
