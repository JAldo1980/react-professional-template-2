import React from "react";
import ProjectData from "/src/ProjectData.jsx";
import Project from "/components/Project.jsx";

export default function Work() {
  const projectElements = ProjectData.map(function (project) {
    return (
      <Project
        key={project.headline}
        headline={project.headline}
        description={project.description}
        tech={project.tech} // Pass the tech array directly
        buttonOne={project.buttonOne}
        buttonTwo={project.buttonTwo}
        image={project.image}
      />
    );
  });

  return (
    <div className="work-container" id="project-scroll">
      <h2 className="work-headline">Recent Projects</h2>
      <main className="project-area">{projectElements}</main>
    </div>
  );
}
