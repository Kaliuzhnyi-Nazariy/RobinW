import React from "react";
import Section from "../helper/Section";
import ChooseCountry from "./ChooseCountry";

const Photography = () => {
  return (
    <Section id="Photography">
      <h2>Photography</h2>
      <p className="mt-6 text-[var(--lightGrey)] min-[1440px]:w-[588px]">
        Here is a collection of my best travel pictures that I took while
        travelling places all around the world.{" "}
      </p>
      <ChooseCountry />
    </Section>
  );
};

export default Photography;
