import React from "react";
import Section from "../helper/Section";

const InstagramContent = () => {
  return (
    <Section
      extraPaddings="p-0"
      extraStyles=" text-[var(--levelOne)] bg-[var(--violetAccent)] min-[768px]:max-w-[50%] min-[768px]:px-10 "
      changedYPadding="py-12 min-[768px]:py-20"
    >
      <div className="">
        <h2 className="leading-[120%]">Instagram</h2>
        <p className="text-[var(--darkGrey)] mt-6">
          If you area a person who enjoys photography, then I highly recommend
          that you check out my Instagram. I’m an avid traveller and I capture
          the best moments that I would love to cherish with the world
        </p>
        <div className="mt-[91px] min-[768px]:mt-[133px] ">
          <a href="" className="text-[16px]">
            Follow me on IG
          </a>
          <div className="w-[125px] h-[1px] bg-[var(--lightGrey)] "></div>
        </div>
      </div>
    </Section>
  );
};

export default InstagramContent;
