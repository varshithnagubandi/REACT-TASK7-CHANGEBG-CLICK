import "./App.css";
import React, { useState } from "react";

function App() {
  const [background, setBackground] = useState("black");
  const handleClick = () => {
    const newColor = background === "black" ? "red" : "black";
    setBackground(newColor);
  };
  return (
    <div
      style={{
        background,
        height: "500px",
        width: "500px",
      }}
    >
      <div className="button">
        <button onClick={handleClick}>CLICK ME</button>
      </div>
    </div>
  );
}

export default App;
