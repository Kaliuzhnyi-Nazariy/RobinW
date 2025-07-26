import React from "react";
import Section from "../helper/Section";
import Image from "next/image";

const Skillset = () => {
  return (
    <Section changedYPadding="py-16 min-[1440px]:py-[120px] min-[1440px]:flex gap-18 ">
      <div className="min-[1440px]:min-w-[416px] min-[1440px]:max-w-[416px] ">
        <h2>Skillset</h2>
        <p className="mt-4 text-[var(--lightGrey)]">
          With skills in over 4 different fields of design, I am the perfect
          person to hire when it comes to a full fledged project. Whatever your
          needs are, I can pretty much take on any challenge.
        </p>
      </div>
      <ul className="mt-[69px] grid gap-12 min-[768px]:grid-cols-2 min-[768px]:grid-rows-3 min-[768px]:mt-12 min-[1440px]:grid-cols-2 min-[1440px]:grid-rows-2 min-[1440px]:mt-0 ">
        <li>
          <Image
            src={"/pd.svg"}
            alt="Product Design Icon"
            width={26}
            height={32}
          />
          <h3 className="mt-6">Product Design</h3>
          <p className="mt-3 text-[var(--lightGrey)] text-[16px] leading-[150%] ">
            Working at Facebook has taught me a lot about how to understand
            users, solve problems and build great products.
          </p>
        </li>
        <li>
          <Image
            src={"/vd.svg"}
            alt="Visual Design Icon"
            width={32}
            height={32}
          />
          <h3 className="mt-6">Visual Design</h3>
          <p className="mt-3 text-[var(--lightGrey)] text-[16px] leading-[150%] ">
            My experience at dribbble has helped me learn to develop the eye for
            design. Colors, typography, layout and the whole package.
          </p>
        </li>
        <li>
          <Image
            src={"/md.svg"}
            alt="Motion Design Icon"
            width={32}
            height={32}
          />
          <h3 className="mt-6">Motion Design</h3>
          <p className="mt-3 text-[var(--lightGrey)] text-[16px] leading-[150%] ">
            I started my design journey with motion design in my college days.
            Motion is something that really fascinates me because of the
            flexibility of story telling.
          </p>
        </li>
        <li>
          <Image
            src={"/photo.png"}
            alt="Photoparat Icon"
            width={32}
            height={32}
          />
          <h3 className="mt-6">Photogrphy</h3>
          <p className="mt-3 text-[var(--lightGrey)] text-[16px] leading-[150%] ">
            Clicking pictures really brings out the creative in me. Phtography
            really makes you look and percieve things in a different way.
          </p>
        </li>
      </ul>
    </Section>
  );
};

export default Skillset;
