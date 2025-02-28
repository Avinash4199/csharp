import React from "react";

const WelcomeFunction = ({ username }) => {
  return (
    <div>
      <h3>Welcome, {username || "Guest"}!</h3>
    </div>
  );
};

export default WelcomeFunction;
