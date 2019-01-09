import React from "react";
import ProjectList from "../components/ProjectList";
import batala from "../assets/images/batala.png";
import hoagiefest from "../assets/images/hoagiefest.png";
import farmer from "../assets/images/farmer.png";
import archaeology from "../assets/images/archaeology.png";

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
          <ProjectList
            image={batala}
            title="Batala Philadelphia"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />

          <ProjectList
            image={hoagiefest}
            title="Wawa Hoagiefest"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />

          <ProjectList
            image={farmer}
            title="The Farmer &amp; The Chef"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />

          <ProjectList
            image={archaeology}
            title="Archaeology and History"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
        </ul>
      </section>
    </div>
  );
}

export default Work;
