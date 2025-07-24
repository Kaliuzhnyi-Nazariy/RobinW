import React from "react";

const NavListItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <li className="px-6 py-8 cursor-pointer hover:bg-[var(--primary)] transition-all hover:font-[700] ">
      {children}
    </li>
  );
};

export default NavListItem;
