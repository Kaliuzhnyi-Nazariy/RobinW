"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import MobMenu from "./MobMenu";

const MenuBtn = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const openMenu = () => {
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "";
    }
  }, [isMenuOpen]);

  return (
    <>
      <button onClick={() => openMenu()}>
        <Image
          src="/menuBurger.png"
          alt="menu burger"
          width={24}
          height={24}
          className="hidden max-md:block"
        />
      </button>
      <MobMenu isMenuOpen={isMenuOpen} closeMenu={closeMenu} />
    </>
  );
};

export default MenuBtn;
