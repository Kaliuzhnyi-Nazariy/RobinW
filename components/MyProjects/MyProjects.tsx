import React from "react";
import Section from "../helper/Section";
import projects from "../../myProjects.json";
import ProjectItem from "./ProjectItem";

const MyProjects = () => {
  return (
    <Section
      changedYPadding="pt-[120px] pb-[153px] flex flex-col min-[1440px]:grid gap-12 min-[1440px]:grid-cols-2 min-[1440px]:grid-rows-[repeat(5,1fr)] "
      id="Work"
    >
      <div className="row-span-1">
        <p className=" text-[16px] text-[var(--lightGrey)] uppercase font-bold ">
          my projects
        </p>
        <h2 className="mt-2 min-[768px]:w-[688px] min-[1440px]:w-[690px] ">
          Work that I’ve done for the past 8 years
        </h2>
      </div>
      {projects.map((project) => {
        return <ProjectItem project={project} key={project.id} />;
      })}
      <button className="hidden min-[1440px]:grid uppercase px-8 py-6 border-[1] border-[var(--primary)] self-center justify-self-center grid-start-row-5 ">
        VIeW ALL PROJECTS
      </button>
    </Section>
  );
};

export default MyProjects;
