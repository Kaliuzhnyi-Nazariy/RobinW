import React from "react";
import Section from "../helper/Section";
import Photo from "./Photo";

const Dribbble = () => {
  return (
    <Section changedYPadding="py-16 min-[768px]:py-[120px] ">
      <div className="min-[1440px]:w-[636px] ">
        <h2>Dribbble</h2>
        <p className="mt-6 text-[var(--lightGrey)]">
          Each dribbble shot is made with love and care. Do check out my work on
          Dribbble. Likes and comments are appreciated.
        </p>
        <div className="mt-10 text-[var(--text)] ">
          <a href="" className="text-[16px]">
            Follow me on Dribbble
          </a>
          <div className="w-[171px] h-[1px] bg-[var(--lightGrey)] "></div>
        </div>
      </div>
      <Photo />
    </Section>
  );
};

export default Dribbble;
