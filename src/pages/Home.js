import React from "react";
var Link = require("react-router-dom").Link;

function Home() {
  return (
    <div className="home container">
      <section>
        <h1>Hi, I'm Eliza</h1>
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
          in Philly. I also continue to work with the archaeology community on
          freelance projects creating interpretive signs and laying out
          scientific reports.
        </p>
        <Link
          className="home__button button"
          to={`${process.env.PUBLIC_URL}/about`}
        >
          Read more
          <span className="sr-only">about Eliza</span>
        </Link>
      </section>
    </div>
  );
}

export default Home;
