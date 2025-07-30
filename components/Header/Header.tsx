import React from "react";
import NavListItem from "./NavListItem";
import Section from "../helper/Section";
import Image from "next/image";
import MenuBtn from "./MenuBtn";

const Header = () => {
  return (
    <Section
      extraStyles="w-full h-[72px] bg-transparent flex justify-between items-center min-md:h-[88px] "
      changedYPadding="p-0"
    >
      <Image src="Logo.svg" alt="Robin.W" width={79} height={24} />
      <MenuBtn />
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
