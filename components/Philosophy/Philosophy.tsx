import React from "react";
import PhilosophyContent from "./PhilosophyContent";
import Photo from "./Photo";

const Philosophy = () => {
  return (
    <section className="min-[768px]:flex ">
      <PhilosophyContent />
      <Photo />
    </section>
  );
};

export default Philosophy;
