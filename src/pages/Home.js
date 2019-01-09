import React from "react";
import { BrowserRouter as Link } from "react-router-dom";

function Home() {
  return (
    <div className="home container">
      <section>
        <h1>Hi, I'm Eliza.</h1>
        <p>
          I’m a <strong>front end developer</strong>, <strong>designer</strong>,
          and <strong>former archaeologist</strong> from Philadelphia. I work as
          a full stack software developer at{" "}
          <a
            href="https://www.thinkcompany.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Think Company
          </a>{" "}
          in Philly. I also continue design work in the archaeology community
          creating interpretive signs and laying out scientific reports.
        </p>
        <p>
          This site is intended to show my work and career transition from
          archaeology to technology. I accomplished my career change through
          meetups, online MOOCs, workshops, networking, and simply putting
          myself out there. My passion-projects are web accessibility and
          motivating people of all backgrounds looking to break into tech.
        </p>
        <Link className="home__button button" to="/about">
          Read more
          <span className="sr-only">about Eliza</span>
        </Link>
      </section>
    </div>
  );
}

export default Home;
