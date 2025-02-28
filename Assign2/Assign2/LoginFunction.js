import React, { useState } from "react";
import WelcomeFunction from "./WelcomeFunction";

const LoginFunction = () => {
  const [username, setUsername] = useState("");

  return (
    <div>
      <h2>Login (Function Component)</h2>
      <input
        type="text"
        placeholder="Enter Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <WelcomeFunction username={username} />
    </div>
  );
};

export default LoginFunction;
