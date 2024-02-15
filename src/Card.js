import React, { useState } from "react";
import "./Card.css";

// render a card component 

function Card({ name, image }) {
  const [{ angle }] = useState({
    angle: Math.random() * 90 - 45
  });

  const transform = `rotate(${angle}deg)`

  return <img
      className="Card"
      alt={name}
      src={image}
      style={{ transform }} />;
}

export default Card;