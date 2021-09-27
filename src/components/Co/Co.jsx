import React from "react";
import "./co.css";

function Co(props) {
  return (
    <div className="home">
      <div className="about">
        <div className="about-top">
          <div className="about-info">
            {props.heading} <br />
            <span className="info-name"> {props.name}</span>
            <div className="about-desc">{props.des}</div>
          </div>
          <div className="about-photo">
            <img src={props.imgsrc} alt="hero" className="Picture" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Co;
