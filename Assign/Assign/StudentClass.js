import React, { Component } from "react";

class StudentClass extends Component {
  render() {
    const { name, address, scores } = this.props;
    return (
      <div>
        <h3>Student Info (Class Component)</h3>
        <p>Name: {name}</p>
        <p>Address: {address}</p>
        <p>Scores: {scores.join(", ")}</p>
      </div>
    );
  }
}

export default StudentClass;
