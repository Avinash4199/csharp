import React, { useState } from "react";
import First from "./components/First";
import Second from "./components/Second";
import Third from "./components/Third";
import Fourth from "./components/Fourth";
import First1 from "./components/First1";
import Second1 from "./components/Second1";
import Third1 from "./components/Third1";
import Fourth1 from "./components/Fourth1";
import Student from "./components/Student";
import StudentClass from "./components/StudentClass";
import Display from "./components/Display";

function App() {
  const [name, setName] = useState("Yeshwanth");
  const [address, setAddress] = useState("India");

  const handleHello = () => alert("Hello!");
  const handleBye = () => alert("Bye!");

  return (
    <div>
      <h1>Hello World</h1>

      {/* Function Components */}
      <First />
      <Second />
      <Third />
      <Fourth />

      {/* Class Components */}
      <First1 />
      <Second1 />
      <Third1 />
      <Fourth1 />

      {/* Passing Props to Student Components */}
      <Student name="John Doe" address="New York" scores={[85, 90, 78]} />
      <StudentClass name="Jane Doe" address="Los Angeles" scores={[88, 92, 80]} />

      {/* Display Component */}
      <Display name={name} address={address} setName={setName} setAddress={setAddress} />

      {/* Buttons with onClick Events */}
      <button onClick={handleHello}>Say Hello</button>
      <button onClick={handleBye}>Say Bye</button>
    </div>
  );
}

export default App;
