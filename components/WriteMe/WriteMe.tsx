import React from "react";
import Section from "../helper/Section";
import Form from "./Form";

const WriteMe = () => {
  return (
    <Section extraPaddings="min-[768px]:flex gap-6 justify-center  ">
      <div className="min-[768px]:w-[332px] min-[1440px]:w-[526px] ">
        <h2>Let’s get started</h2>
        <p className="text-[var(--lightGrey)] mt-4 ">
          Now that you know a lot about me, let me know if you are interested to
          work with me.
        </p>
      </div>
      <Form />
    </Section>
  );
};

export default WriteMe;
