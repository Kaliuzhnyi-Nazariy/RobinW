import React from "react";

const SponsorLI = ({ children }: { children: React.ReactNode }) => {
  return (
    <li className="w-[50%] h-[140px] flex items-center justify-center border-[1] border-[var(--levelOne)] ">
      {children}
    </li>
  );
};

export default SponsorLI;
