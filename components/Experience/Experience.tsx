import React from "react";
import Section from "../helper/Section";

const Experience = () => {
  return (
    <Section>
      <p className=" text-[16px] text-[var(--lightGrey)] uppercase ">
        work experience
      </p>
      <h2 className="mt-2">Companies I have worked for in the past</h2>
      <ul className="mt-10 flex flex-col gap-10">
        <li>
          <span className="text-[117px] text-[var(--lightGrey)] opacity-50 ">
            01
          </span>
          <h3>
            <span className="text-[var(--greenAccent)] ">Google</span>,
            Interaction Designer
          </h3>
          <p className="text-[var(--lightGrey)] mt-4 text-[16px] opacity-50 ">
            I currently am the lead designer on the interaction design team for
            Google Play.
          </p>
        </li>
        <li>
          <span className="text-[117px] text-[var(--lightGrey)] opacity-50 ">
            02
          </span>
          <h3>
            <span className="text-blue-400 ">Facebook</span>, Product Designer
          </h3>
          <p className="text-[var(--lightGrey)] mt-4 text-[16px] opacity-50 ">
            I’ve worked on a wide variety of internal tools for facebook over
            the past 6 years.
          </p>
        </li>
        <li>
          <span className="text-[117px] text-[var(--lightGrey)] opacity-50 ">
            03
          </span>
          <h3>
            <span className="text-[var(--pinkAccent)] ">Dribbble</span>, Graphic
            Designer
          </h3>
          <p className="text-[var(--lightGrey)] mt-4 text-[16px] opacity-50 ">
            I started my design career with Dribbble. I was incharge of creating
            illustrations for the platform.
          </p>
        </li>
      </ul>
    </Section>
  );
};

export default Experience;
