import React from "react";

const SponsorAutoItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="keen-slider__slide min-w-[340px] w-[340px] h-[140px] flex items-center justify-center border-[1] border-[var(--levelOne)] ">
      {children}
    </div>
  );
};

export default SponsorAutoItem;
