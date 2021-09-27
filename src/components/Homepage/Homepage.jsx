import React from "react";
import "./home.css";
import Hero from "../../image/heroig.jpg";
import Co from "../Co/Co";
function Homepage() {
  return (
    <>
      <div className="backh">
        <Co
          heading="Hello, my name is"
          name="Ujjawal Kumar"
          imgsrc={Hero}
          des="I love to learn about new stuff and implement them in life.
          Life is a journey, and I aim to travel without regret."
        />
      </div>
    </>
  );
}

export default Homepage;
