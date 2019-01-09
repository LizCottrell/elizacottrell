import React from "react";

class Pills extends React.Component {
  render() {
    return (
      <div className="pills">
        <a href={this.props.link1url}>{this.props.link1text}</a>
        <a href={this.props.link2url}>{this.props.link2text}</a>
        <a href={this.props.link3url}>{this.props.link3text}</a>
      </div>
    );
  }
}

export default Pills;
