import React, { Component } from "react";

class WelcomeClass extends Component {
  render() {
    return (
      <div>
        <h3>Welcome, {this.props.username || "Guest"}!</h3>
      </div>
    );
  }
}

export default WelcomeClass;
