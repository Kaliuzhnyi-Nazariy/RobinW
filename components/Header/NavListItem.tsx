import React from "react";

const NavListItem = ({
  children,
  closeMenu,
}: {
  children: React.ReactNode;
  closeMenu?: () => void;
}) => {
  return (
    <li>
      <a
        href={`#${children}`}
        className="min-[768px]:px-6 min-[768px]:py-8 min-[768px]:hover:bg-[var(--primary)] transition-all hover:font-[700] "
        onClick={() => {
          if (closeMenu) closeMenu();
        }}
      >
        {children}
      </a>
    </li>
  );
};

export default NavListItem;
