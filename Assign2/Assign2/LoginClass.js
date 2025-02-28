import React, { Component } from "react";
import WelcomeClass from "./WelcomeClass";

class LoginClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
    };
  }

  handleChange = (event) => {
    this.setState({ username: event.target.value });
  };

  render() {
    return (
      <div>
        <h2>Login (Class Component)</h2>
        <input
          type="text"
          placeholder="Enter Username"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <WelcomeClass username={this.state.username} />
      </div>
    );
  }
}

export default LoginClass;
