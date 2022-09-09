import React from "react";
import "../css/Card.css";

function Card({ imagen }) {
  return (
    <div>
      <div className="card">
        <div className="card_img">
          <img src={imagen} alt="" />
        </div>
        <div className="card_text">
          <h1 className="title_card">loremsita</h1>
          <p children="precio"></p>
        </div>
      </div>
    </div>
  );
}

export default Card;
