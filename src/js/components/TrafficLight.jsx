import React, { useState } from "react";
import "../../styles/index.css";

const colors = ["red", "yellow", "green"];

const TrafficLight = () => {
  const [active, setActive] = useState("");

  const clickActive = (color) => {
    setActive(color);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="traffic-light d-flex flex-column justify-content-around p-3 bg-dark rounded-3">
        {colors.map((color) => (
          <div
            key={color}
            className={`light ${color} ${active === color ? "active" : ""}`}
            onClick={() => clickActive(color)}
          />
        ))}
      </div>
    </div>
  );
};

export default TrafficLight;
