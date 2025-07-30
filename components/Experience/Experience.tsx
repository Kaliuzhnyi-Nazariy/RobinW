import React from "react";
import Section from "../helper/Section";

const Experience = () => {
  return (
    <Section id="Experience">
      <p className=" text-[16px] text-[var(--lightGrey)] uppercase font-bold ">
        work experience
      </p>
      <h2 className="mt-2 min-[768px]:w-[688px] min-[1440px]:w-[690px] ">
        Companies I have worked for in the past
      </h2>
      <ul className="mt-10 flex flex-col gap-10 min-[768px]:flex-row min-[768px]:gap-6 ">
        <li className="min-[768px]:w-[calc((100%-48px)/3)]">
          <span className="text-[117px] text-[var(--lightGrey)] opacity-50 ">
            01
          </span>
          <h3 className="min-[768px]:w-[197px] max-[1439px]:w-[197px] ">
            <span className="text-[var(--greenAccent)] ">Google</span>,
            Interaction Designer
          </h3>
          <p className="text-[var(--lightGrey)] mt-4 text-[16px] opacity-50 min-[768px]:w-[197px] min-[1440px]:w-[368px] ">
            I currently am the lead designer on the interaction design team for
            Google Play.
          </p>
        </li>
        <li className="min-[768px]:w-[calc((100%-48px)/3)]">
          <span className="text-[117px] text-[var(--lightGrey)] opacity-50 ">
            02
          </span>
          <h3 className="min-[768px]:w-[197px] max-[1439px]:w-[197px] ">
            <span className="text-blue-400 ">Facebook</span>, Product{" "}
            {/* <br className="hidden min-[768px]:block min-[1440px]:hidden " />{" "} */}
            Designer
          </h3>
          <p className="text-[var(--lightGrey)] mt-4 text-[16px] opacity-50 min-[768px]:w-[197px] min-[1440px]:w-[368px] ">
            I’ve worked on a wide variety of internal tools for facebook over
            the past 6 years.
          </p>
        </li>
        <li className="min-[768px]:w-[calc((100%-48px)/3)]">
          <span className="text-[117px] text-[var(--lightGrey)] opacity-50 ">
            03
          </span>
          <h3 className="min-[768px]:w-[197px] max-[1439px]:w-[197px] ">
            <span className="text-[var(--pinkAccent)] ">Dribbble</span>
            {/* <br className="hidden min-[768px]:block min-[1440px]:hidden " /> */}
            , Graphic Designer
            {/* <br className="hidden min-[768px]:block min-[1440px]:hidden " />{" "} */}
          </h3>
          <p className="text-[var(--lightGrey)] mt-4 text-[16px] opacity-50 min-[768px]:w-[197px] min-[1440px]:w-[368px] ">
            I started my design career with Dribbble. I was incharge of creating
            illustrations for the platform.
          </p>
        </li>
      </ul>
    </Section>
  );
};

export default Experience;
