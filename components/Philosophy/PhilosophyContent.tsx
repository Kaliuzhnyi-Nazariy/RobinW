import React from "react";
import Section from "../helper/Section";

const PhilosophyContent = () => {
  return (
    <Section
      isDiv
      extraStyles="bg-[var(--peachAccent)] text-[var(--levelOne)] min-[768px]:max-w-[50%] "
    >
      <h2 className="leading-[120%]  ">Philosophy & values</h2>
      <p className="text-[var(--darkGrey)] min-[768px]:mt-6 ">
        I think everyone wants the same thing - relationship with humanity,
        peace with the metaphysical, and experience with the universe. I try to
        grasp these things with my values: authenticity, creativity, &
        hospitality.
      </p>
      <div className="mt-[91px] min-[768px]:mt-[67px] ">
        <a href="" className="text-[16px]">
          More about me
        </a>
        <div className="w-[116px] h-[1px] bg-[var(--lightGrey)] "></div>
      </div>
    </Section>
  );
};

export default PhilosophyContent;
