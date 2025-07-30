"use client";

import { useState } from "react";
import BChoose from "./BChoose";
import PhotosList from "./PhotosList";

const ChooseCountry = () => {
  const [country, setCountry] = useState<
    "italy" | "australia" | "india" | "brazil"
  >("italy");

  const liStyle = "max-md:w-[calc((100%-24px)/2)] flex justify-center ";

  const setFn = (e: { currentTarget: { value: string } }) => {
    setCountry(
      e.currentTarget.value as "italy" | "australia" | "india" | "brazil"
    );
  };

  return (
    <>
      <ul className="flex flex-wrap gap-6 mt-10 min-[768px]:flex-row ">
        <li className={liStyle}>
          <BChoose country="italy" setCountry={country} setFn={setFn} />
        </li>

        <li className={liStyle}>
          <BChoose country="australia" setCountry={country} setFn={setFn} />
        </li>
        <li className={liStyle}>
          <BChoose country="india" setCountry={country} setFn={setFn} />
        </li>
        <li className={liStyle}>
          <BChoose country="brazil" setCountry={country} setFn={setFn} />
        </li>
      </ul>
      <PhotosList chosenCountry={country} />
    </>
  );
};

export default ChooseCountry;
