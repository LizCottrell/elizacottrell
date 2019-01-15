import React, { Component } from "react";
import ArticleList from "../components/ArticleList";
import Pills from "../components/Pills";
import logoMedium from "../assets/icons/logo-medium.png";
import logoTechnically from "../assets/icons/logo-technically.png";
import logoGdi from "../assets/icons/logo-gdi.png";

class About extends Component {
  render() {
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
            with HTML, CSS, and JavaScript creating single page applications in
            an agile environment. I'm well-versed in quality assurance testing
            of websites and applications and writing thoughtful documentation.
          </p>
          <p>
            My transition into web development began with community
            organizations like Girl Develop It and other local tech meetups. I
            also learned with online courses, teaching myself how to code on
            nights and weekends. I quickly recognized there is more value in a
            classroom, lecture, panel or event as opposed to sitting alone in
            front of a computer trying to hack it on my own. Because of the
            enormous amount of support I received when I started out, I aimed to
            give back as soon as I could. I now teach, speak, volunteer, TA, and
            organize events in the tech community.
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
            <li>
              <strong>2013</strong> – A decade into my archaeology career, I
              realize it’s not the right career for me and I need a change. I
              leave my NYC archaeology job at the American Museum of Natural
              History to go back to school and work as a graphic design
              specialist at a small archaeology firm.
            </li>
            <li>
              <strong>2014</strong> – I design and develop my first website for
              the firm, Hunter Research.
            </li>
            <li>
              <strong>2015</strong> – I get my first internship in tech, as
              front end development intern for The Archer Group, a digital and
              brand agency in Wilmington, Delaware. Six weeks later I get hired
              as a full time front end developer. I develop sites for Chase
              Bank, Wawa, Penn Mutual, TD Bank, YMCA, and more.
            </li>
            <li>
              <strong>2017</strong> – I get a job as a front end developer at
              Webjunto, a mobile and web development company in Philadelphia.
            </li>
            <li>
              <strong>2018</strong> – I bootstrap the startup OpenForge for
              several months after Webjunto closes it’s doors.{" "}
            </li>
            <li>
              <strong>2018</strong> – I get a job as a software development
              apprentice at Think Company, working with JavaScript and React.
            </li>
            <li>
              <strong>2019</strong> – I get a job as a software developer at
              Think Company.
            </li>
          </ul>
        </section>

        <section id="articles">
          <h2>Articles</h2>
          <ul className="articlelist">
            <ArticleList
              image={logoMedium}
              title="We're teaching women in prison to code"
              date="January 30, 2018"
              link="https://medium.com/@girldevelopit/were-teaching-women-to-code-in-prison-a936887873a5"
            />

            <ArticleList
              image={logoTechnically}
              title="Here’s a resume tip (and more) from last night’s jobs fair: NET/WORK 2017"
              date="March 31, 2017"
              link="https://technical.ly/delaware/2017/03/31/network-de-2017-event-recap/"
            />

            <ArticleList
              image={logoTechnically}
              title="This archaeologist-turned-engineer wants to teach you how to build a website"
              date="December 15, 2016"
              link="http://technical.ly/delaware/2016/12/15/elizabeth-cottrell-teach-website/"
            />

            <ArticleList
              image={logoTechnically}
              title="How Elizabeth Cottrell went from archaeologist to coder"
              date="October 27, 2016"
              link="https://technical.ly/delaware/2016/10/27/elizabeth-cottrell-archer-group/"
            />
          </ul>
        </section>

        <section id="events">
          <h2>Events</h2>
          <ul className="articlelist">
            <ArticleList
              image={logoGdi}
              title="Instructor | Intro to Web Concepts"
              date="June 21, 2018"
              link="https://www.meetup.com/Girl-Develop-It-Philadelphia/events/251017416/"
            />

            <ArticleList
              image={logoGdi}
              title="Speaker | Women Who Transitioned Into Tech Panel"
              date="March 30, 2017"
              link="https://www.meetup.com/Girl-Develop-It-Wilmington/events/232970320/"
            />

            <ArticleList
              image={logoGdi}
              title="Organizer | Speed Mentoring"
              date="February 8, 2017"
              link="https://www.meetup.com/Girl-Develop-It-Wilmington/events/236501850/"
            />

            <ArticleList
              image={logoGdi}
              title="Instructor | Intro to HTML &amp; CSS"
              date="January 21, 2017"
              link="https://www.meetup.com/Girl-Develop-It-Wilmington/events/235984688/"
            />

            <ArticleList
              image={logoTechnically}
              title="Speaker | Making the Leap: Tips for Transitioning into a Career in Tech"
              date="December 15, 2016"
              link="https://tde.ticketleap.com/networkde17/details"
            />
          </ul>
        </section>
      </div>
    );
  }
}

export default About;
