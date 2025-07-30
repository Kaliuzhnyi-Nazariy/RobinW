import React from "react";
import Section from "../helper/Section";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <Section extraStyles="bg-[var(--levelOne)] grid min-[768px]:grid-rows-[minmax(48px,_1fr)] min-[768px]:grid-cols-4 min-[768px]:pt-20 min-[768px]:pb-14 ">
        <div className="min-[768px]:row-span-1">
          <Image src="/Logo.svg" alt="Robin.W" width={131} height={40} />
          <ul className="mt-8 flex gap-4">
            <li>
              <a href="https://x.com/" target="_blank">
                <Image
                  src="/TwitterLogo.png"
                  alt="Twitter logo"
                  width={24}
                  height={24}
                />
              </a>
            </li>
            <li>
              <a href="https://dribbble.com/" target="_blank">
                <Image
                  src="/DribbbleLogo.png"
                  alt="Dribble logo"
                  width={24}
                  height={24}
                />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/" target="_blank">
                <Image
                  src="/LinkedIn.png"
                  alt="LinkedIn logo"
                  width={24}
                  height={24}
                />
              </a>
            </li>
          </ul>
        </div>

        <ul className="mt-12 w-[154px] text-[16px] min-[768px]:col-3 min-[768px]:mt-0 min-[1440px]:justify-self-center">
          <li className="w-full h-12 flex items-center cursor-pointer">Home</li>
          <li className="w-full h-12 flex items-center cursor-pointer">
            About
          </li>
          <li className="w-full h-12 flex items-center cursor-pointer">Work</li>
          <li className="w-full h-12 flex items-center cursor-pointer">
            Process
          </li>
        </ul>
        <ul className="w-[154px] text-[16px] ">
          <li className="w-full h-12 flex items-center cursor-pointer">
            Store
          </li>
          <li className="w-full h-12 flex items-center cursor-pointer">Blog</li>
          <li className="w-full h-12 flex items-center cursor-pointer">
            Reading List
          </li>
        </ul>
        <p className="mt-12 text-[16px] text-[var(--lightGrey)] min-[768px]:col-end-3 min-[768px]:col-start-1 ">
          Not Copyright 2020 • Robin Williams. Webflow cloneable
        </p>
      </Section>
    </footer>
  );
};

export default Footer;
