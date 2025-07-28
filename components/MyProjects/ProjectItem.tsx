import Image from "next/image";
import React from "react";

const ProjectItem = ({
  project,
}: {
  project: { id: number; image: string; title: string; text: string };
}) => {
  const gridStylesForFirst = "min-[1440px]:row-start-2 min-[1440px]:row-end-4 ";
  const gridStylesForSecond =
    "min-[1440px]:row-start-4 min-[1440px]:row-end-6 ";
  const gridStylesForThird =
    "min-[1440px]:row-start-1 min-[1440px]:row-end-3 min-[1440px]:col-start-2 ";
  const gridStylesForForth =
    "min-[1440px]:row-start-3 min-[1440px]:row-end-5 min-[1440px]:col-start-2 ";

  return (
    <div
      className={`min-w-[320px] max-[768px]:max-h-[754px] min-[768px]:h-[830px] bg-[var(--levelOne)] min-[1440px]:w-[636px] ${
        project.id === 1 && gridStylesForFirst
      } ${project.id === 2 && gridStylesForSecond} ${
        project.id === 3 && gridStylesForThird
      } ${project.id === 4 && gridStylesForForth}
         `}
    >
      <Image
        src={project.image}
        alt={project.title}
        width={320}
        height={400}
        className="w-full min-[768px]:max-h-[620px] min-[768px]:h-[620px] object-cover "
      />
      <div className="py-10 px-8">
        <h3>{project.title}</h3>
        <p className="mt-[13px] text-[var(--lightGrey)] ">{project.text}</p>
      </div>
    </div>
  );
};

export default ProjectItem;
