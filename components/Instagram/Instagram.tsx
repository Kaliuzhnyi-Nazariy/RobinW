import React from "react";
import InstagramContent from "./InstagramContent";
import Photo from "./Photo";

const Instagram = () => {
  return (
    <div className="min-[768px]:flex ">
      <InstagramContent />
      <Photo />
    </div>
  );
};

export default Instagram;
