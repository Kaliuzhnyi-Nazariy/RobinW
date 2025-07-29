import React from "react";
import Section from "../helper/Section";
import ReviewsList from "./ReviewsList";

const Reviews = () => {
  return (
    <Section extraStyles="min-[768px]:flex min-[768px]:gap-6 justify-center min-[1440px]:py-[120px] ">
      <div className="min-[768px]:w-[332px] min-[1440px]:w-[calc((100vw-168px)/2)] ">
        <h2 className=" min-[1440px]:w-[588px] ">
          This is what people say about me
        </h2>
        <p className="mt-4 text-[var(--lightGrey)] min-[1440px]:w-[588px]  ">
          Here are a few lines from people who I have worked with over the past
          8+ years in my design career.
        </p>
        <div className="mt-10 text-[var(--text)] ">
          <a href="" className="text-[16px]">
            See all testimonials
          </a>
          <div className="w-[146px] h-[1px] bg-[var(--lightGrey)] mt-1 "></div>
        </div>
      </div>
      <ReviewsList />
    </Section>
  );
};

export default Reviews;
