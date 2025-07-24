import React from "react";

const Section = ({
  children,
  extraStyles,
  extraPaddings,
}: {
  children: React.ReactNode;
  extraStyles?: string;
  extraPaddings?: string;
}) => {
  return (
    <section
      className={`px-1.5 min-[360px]:px-5  ${extraStyles} ${
        extraPaddings
          ? extraPaddings
          : "min-[768px]:px-10 min-[1440px]:px-[72px]"
      } `}
    >
      {children}
    </section>
  );
};

export default Section;
