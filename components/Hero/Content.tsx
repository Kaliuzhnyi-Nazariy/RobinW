import React from "react";
import Section from "../helper/Section";
import Photo from "./Photo";
import Image from "next/image";

const HeroContent = () => {
  return (
    <Section
      extraStyles="flex flex-col min-[768px]:flex-row items-center gap-4 min-[768px]:w-[408px]  min-[768px]:-ml-12 min-[768px]:pr-8 min-[768px]:mt-8 min-[1440px]:m-0 min-[1440px]:w-[738px] min-[1440px]:abolute min-[1440px]:top-1/2 min-[1440px]:right-10  "
      extraPaddings="min-[768px]:p-0 min-[1440px]:p-0 min-[1440px]:m-0 "
    >
      <div className=" min-[1140px]:w-[900px] min-[1440px]:h-[900px] bg-[var(--levelOne)] z-[-1] absolute right-0 top-0"></div>
      {/* <Photo />{" "} */}
      <Image
        src="/robinPc.jpg"
        alt="Robin.W photo"
        width={750}
        height={650}
        className="w-full hidden min-[1440px]:block object-cover object-top min-[1440px]:h-[650px] min-[1440px]:w-[750px] min-[1440px]:object-contain "
      />
      <div className=" min-[768px]:absolute min-[1440px]:right-10 ">
        <h1 className="min-[360px]:w-[320px] min-[768px]:w-[408px] min-[768px]:leading-[100%] min-[1440px]:w-[738px] z-[1] ">
          I{"’"}m Robin Williams. <br className="hidden min-[768px]:block " />A
          Product Designer <span className="opacity-50">based in Italy.</span>
        </h1>
        <p className="min-[768px]:w-[408px] min-[768px]:mt-8 min-[1440px]:w-[738px] ">
          I’m probably the most passionate designer you will ever get to work
          with. If you have a great project that needs some amazing skills, I’m
          your guy.
        </p>
      </div>
    </Section>
  );
};

export default HeroContent;

// <Section
//   extraStyles="flex flex-col items-center gap-4 min-[768px]:w-[408px]  min-[768px]:-ml-12 min-[768px]:pr-8 min-[768px]:mt-8 min-[1440px]:m-0 min-[1440px]:w-[738px] min-[1440px]:abolute min-[1440px]:top-1/2 min-[1440px]:right-10 min-[1440px]:bg-[var(--levelOne)] "
//   extraPaddings="min-[768px]:p-0 min-[1440px]:p-0 min-[1440px]:m-0 "
// >

//   <h1 className="min-[360px]:w-[320px] min-[768px]:w-[408px] min-[768px]:leading-[100%] min-[1440px]:w-[738px] z-[1] ">
//     I{"’"}m Robin Williams. <br className="hidden min-[768px]:block " />A
//     Product Designer <span className="opacity-50">based in Italy.</span>
//   </h1>
//   <p className="min-[768px]:w-[408px] min-[768px]:mt-8 min-[1440px]:w-[738px] ">
//     I’m probably the most passionate designer you will ever get to work
//     with. If you have a great project that needs some amazing skills, I’m
//     your guy.
//   </p>
// </Section>
