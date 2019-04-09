import React, { Component } from "react";
import pdf from "../assets/resume_cottrell2019.pdf";

class Contact extends Component {
  render() {
    return (
      <div className="contact container">
        <section>
          <h1>Contact</h1>

          <p>
            <strong>elizabeth.cottrell at gmail.com</strong>
            <br />
            Contact me for my most recent work samples. <br />
            Professional inquiries only, please.
          </p>
          <div className="resume">
            <a href={pdf} target="_blank" className="button">
              View Resume
            </a>
          </div>
        </section>
      </div>
    );
  }
}

export default Contact;
