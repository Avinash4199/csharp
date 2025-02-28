import React from "react";

function Student({ name, address, scores }) {
  return (
    <div>
      <h3>Student Info (Function Component)</h3>
      <p>Name: {name}</p>
      <p>Address: {address}</p>
      <p>Scores: {scores.join(", ")}</p>
    </div>
  );
}

export default Student;
