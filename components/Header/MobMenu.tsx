import React from "react";
import NavListItem from "./NavListItem";

const MobMenu = ({
  isMenuOpen,
  closeMenu,
}: {
  isMenuOpen: boolean;
  closeMenu: () => void;
}) => {
  return (
    <div
      className={`${
        isMenuOpen ? "fixed" : " hidden"
      } w-[100vw] h-[100vh] bg-[var(--base)] text-[var(--text) text-[16px] flex justify-center items-center top-0 left-0 z-10 `}
    >
      <button onClick={() => closeMenu()} className="absolute top-6 right-10">
        X
      </button>
      <ul className="flex flex-col gap-6">
        <NavListItem closeMenu={closeMenu}>Experience</NavListItem>
        <NavListItem closeMenu={closeMenu}>Work</NavListItem>
        <NavListItem closeMenu={closeMenu}>Photography</NavListItem>
        <NavListItem closeMenu={closeMenu}>Contact</NavListItem>{" "}
      </ul>
    </div>
  );
};

export default MobMenu;
