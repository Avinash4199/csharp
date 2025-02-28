import React from "react";

function Display({ name, address, setName, setAddress }) {
  return (
    <div>
      <h3>Modify Name & Address</h3>
      <label>
        Name: 
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Address: 
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
      </label>
    </div>
  );
}

export default Display;
