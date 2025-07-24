import React from "react";
import NavListItem from "./NavListItem";
import Section from "../helper/Section";

const Header = () => {
  return (
    <Section extraStyles="w-full h-[72px] bg-transparent flex justify-between items-center min-md:h-[88px] ">
      <h1>Robin.W</h1>
      <div className="w-6 h-6 bg-white hidden max-md:block"></div>
      <nav className="hidden min-md:block">
        <ul className="flex text-[16px] ">
          <NavListItem>Experience</NavListItem>
          <NavListItem>Work</NavListItem>
          <NavListItem>Photography</NavListItem>
          <NavListItem>Contact</NavListItem>
        </ul>
      </nav>
    </Section>
  );
};

export default Header;
