"use client";
import React, { useState } from "react";
const User = () => {
  const [h3Style, setH3Style] = useState({ backgroundColor: "green" });
  return (
    <div>
      <h1 style={{ backgroundColor: "blue", textAlign: "center" }}>
        User Page
      </h1>
      <h2>Heading two in User Page</h2>
      <h3 style={h3Style}>Heading 3 for user</h3>
      <button
        onClick={() => setH3Style({ backgroundColor: "red", color: "white" })}
      >
        Update Style
      </button>
    </div>
  );
};

export default User;
