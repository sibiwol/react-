import React, { Component } from "react";

class readContent extends Component {
  render() {
    console.log("readContent");
    return (
      <article>
        <h2>{this.props.title}</h2>
        {this.props.desc}
      </article>
    );
  }
}

export default readContent;
