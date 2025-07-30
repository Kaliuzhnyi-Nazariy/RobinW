import React from "react";

const BChoose = ({
  country,
  setCountry,
  setFn,
}: {
  country: string;
  setCountry: string;
  setFn: (e: { currentTarget: { value: string } }) => void;
}) => {
  const btnStyle =
    "uppercase flex justify-center items-center max-[767px]:w-[148px] h-[51px] border-[1] border-[var(--primary)] min-[768px]:px-4  ";

  return (
    <button
      className={`${btnStyle} ${
        setCountry === country ? "bg-[var(--primary)] " : ""
      }`}
      value={country}
      onClick={(e) => {
        setFn(e);
      }}
    >
      {country}
    </button>
  );
};

export default BChoose;
