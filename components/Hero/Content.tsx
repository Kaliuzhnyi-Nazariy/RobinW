import React from "react";
import Section from "../helper/Section";

const HeroContent = () => {
  return (
    <Section
      extraStyles="flex flex-col items-center gap-4 min-[768px]:w-[408px]  min-[768px]:ml-[-36px] min-[768px]:pr-10 "
      extraPaddings="min-[768px]:p-0"
    >
      <h1 className="min-[360px]:w-[320px] min-[768px]:w-[408px]">
        I{"’"}m Robin Williams. <br className="hidden min-[768px]:block " />A
        Product Designer <span className="opacity-50">based in Italy.</span>
      </h1>
      <p>
        I’m probably the most passionate designer you will ever get to work
        with. If you have a great project that needs some amazing skills, I’m
        your guy.
      </p>
    </Section>
  );
};

export default HeroContent;
