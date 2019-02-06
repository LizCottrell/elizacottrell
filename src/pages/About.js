import React, { Component } from "react";
import ArticleList from "../components/ArticleList";
import Pills from "../components/Pills";
import timeline from "../data/timeline.js";
import articles from "../data/articles.js";
import events from "../data/events.js";

function About() {
  return (
    <div className="about container">
      <section>
        <header className="about__header">
          <h1>About me</h1>

          <Pills
            link1url="timeline"
            link1text="Timeline"
            link2url="articles"
            link2text="Articles"
            link3url="events"
            link3text="Events"
          />
        </header>

        <p>
          I’m a self taught web developer and designer from Philadelphia
          currently working as a full stack software developer. Day to day, I
          collaborate with cross-functional teams of technical leads,
          developers, UX designers, visual designers, and researchers. I work
          with HTML, CSS, and JavaScript creating single page applications in an
          agile environment. I'm well-versed in quality assurance testing of
          websites and applications and writing thoughtful documentation.
        </p>
        <p>
          My transition into web development began with community organizations
          like Girl Develop It and other local tech meetups. I also learned with
          online courses, teaching myself how to code on nights and weekends. I
          quickly recognized there is more value in a classroom, lecture, panel
          or event as opposed to sitting alone in front of a computer trying to
          hack it on my own. Because of the enormous amount of support I
          received when I started out, I aimed to give back as soon as I could.
          I now teach, speak, volunteer, TA, and organize events in the tech
          community.
        </p>
        <p>
          This site is intended to show my work and career transition from
          archaeology to technology. Throughout this transition, I've found my
          passion-projects are web accessibility and motivating people of all
          backgrounds looking to break into tech.
        </p>
      </section>

      <section id="timeline">
        <h2>Timeline</h2>
        <ul className="timeline__list">
          {timeline.map((milestone, index) => {
            return (
              <li key={index}>
                <strong>{milestone.date}</strong> – {milestone.text}
              </li>
            );
          })}
        </ul>
      </section>

      <section id="articles">
        <h2>Articles</h2>
        <ul className="articlelist">
          {articles.map((article, index) => {
            return (
              <ArticleList
                key={index}
                image={article.image}
                title={article.title}
                date={article.date}
                link={article.link}
              />
            );
          })}
        </ul>
      </section>

      <section id="events">
        <h2>Events</h2>
        <ul className="articlelist">
          {events.map((event, index) => {
            return (
              <ArticleList
                key={index}
                image={event.image}
                title={event.title}
                date={event.date}
                link={event.link}
              />
            );
          })}
        </ul>
      </section>
    </div>
  );
}

export default About;
