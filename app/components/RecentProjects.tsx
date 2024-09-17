import React from "react";
import { CardHoverEffectDemo } from "./ui/ProjectGrid";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        Some of my
        <span className="text-purple"> recent projects</span>
      </h1>
      <div>
        <CardHoverEffectDemo />
      </div>
    </div>
  );
};

export default RecentProjects;
