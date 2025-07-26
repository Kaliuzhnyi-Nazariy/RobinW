import React from "react";

const Section = ({
  children,
  extraStyles,
  extraPaddings,
  changedYPadding,
  isDiv = false,
}: {
  children: React.ReactNode;
  extraStyles?: string;
  extraPaddings?: string;
  changedYPadding?: string;
  isDiv?: boolean;
}) => {
  return (
    <>
      {isDiv ? (
        <div
          className={`px-1.5 min-[360px]:px-5 ${
            changedYPadding ? changedYPadding : "py-12 min-[768px]:py-20 "
          }  ${extraStyles} ${
            extraPaddings
              ? extraPaddings
              : "min-[768px]:px-10 min-[1440px]:px-[72px]"
          } `}
        >
          {children}
        </div>
      ) : (
        <section
          className={`px-1.5 min-[360px]:px-5 ${
            changedYPadding ? changedYPadding : "py-12 min-[768px]:py-20 "
          }  ${extraStyles} ${
            extraPaddings
              ? extraPaddings
              : "min-[768px]:px-10 min-[1440px]:px-[72px]"
          } `}
        >
          {children}
        </section>
      )}
    </>
  );
};

export default Section;
