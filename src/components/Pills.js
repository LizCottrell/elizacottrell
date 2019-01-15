import React, { Component } from "react";
import PropTypes from "prop-types";

class Pills extends React.Component {
  render() {
    return (
      <div className="pills">
        <button>{this.props.link1text}</button>
        <button>{this.props.link2text}</button>
        <button>{this.props.link3text}</button>
      </div>
    );
  }
}

export default Pills;
