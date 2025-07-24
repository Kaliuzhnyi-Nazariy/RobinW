import Image from "next/image";
import React from "react";

const Photo = () => {
  return (
    <Image
      src="/novik.jpg"
      alt="Robin.W photo"
      width={320}
      height={288}
      className="w-full min-h-[288px] max-h-[350px] object-cover object-top min-[768px]:min-h-[650px] min-[768px]:max-h-[700px] min-[768px]:w-[384px] min-[768px]:object-contain "
    />
  );
};

export default Photo;
