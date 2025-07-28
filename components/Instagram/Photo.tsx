import Image from "next/image";
import React from "react";

const Photo = () => {
  return (
    <Image
      src="/flight_view.png"
      alt="flight view"
      width={320}
      height={450}
      className="w-full object-cover object-center min-[768px]:min-w-[384px] min-[768px]:h-[600px] "
    />
  );
};

export default Photo;
