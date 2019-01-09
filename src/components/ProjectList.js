import React from "react";

class ProjectList extends React.Component {
  render() {
    return (
      <li className="project">
        <img src={this.props.image} alt="" />
        <div>
          <div className="project__header">
            <h3>{this.props.title}</h3>
            <div className="project__icons">
              <a href="https://github.com/">
                <i className="fa fa-github" />
                <span className="sr-only">Github</span>
              </a>
              <a href="http://wwww.google.com">
                <i className="fa fa-link" />
                <span className="sr-only">See more</span>
              </a>
              <a href="http://wwww.google.com">
                <i className="fa fa-external-link" />
                <span className="sr-only">External link</span>
              </a>
            </div>
          </div>
          <p>{this.props.text}</p>
          <ul className="project__pills">
            <li>Design</li>
            <li>Development</li>
          </ul>
        </div>
      </li>
    );
  }
}

export default ProjectList;
