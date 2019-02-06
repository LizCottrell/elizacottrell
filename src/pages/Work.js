import React from "react";
import ProjectList from "../components/ProjectList";
import projects from "../data/projects.js";

function Work() {
  return (
    <div className="work container">
      <section>
        <h1>Work</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>

      <section>
        <h2>Featured Projects</h2>
        <ul className="projectlist">
          {projects.map((project, index) => {
            return (
              <ProjectList
                key={index}
                image={project.image}
                title={project.title}
                text={project.text}
              />
            );
          })}
        </ul>
      </section>
    </div>
  );
}

export default Work;
