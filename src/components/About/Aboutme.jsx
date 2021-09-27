import React from "react";
import Co from "../Co/Co";
import "./about.css";
import Hero2 from "../../image/logo.png";
function Aboutme() {
  return (
    <>
      <div className="backa">
        <Co
          heading="Welcome to "
          name="About Page"
          imgsrc={Hero2}
          des="
          I am  Ujjawal Kumar. Academically I'm an undergrad student pursuing Computer Science and Business Systems.I've always been curious about different technical fields but have always been drawn towards the creative side.Being an innovator and a creative person I always liked to play with user interfaces of various apps and websites and study them."
        />
      </div>
    </>
  );
}

export default Aboutme;
