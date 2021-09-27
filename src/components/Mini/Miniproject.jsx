import React, { useState, useEffect } from "react";
import "./mini.css";

function Miniproject() {
  const [number, setNumber] = useState(0);

  //ComponentDidMount
  useEffect(() => {
    alert("Component Mounted");
  }, []);

  //ComponentDidUpdate
  useEffect(() => {
    alert("Number Updated");
  }, [number]);

  //ComponentDidUnmount
  useEffect(() => {
    return () => alert("Component Unmounted");
  });
  return (
    <>
      <div className="main">
        <div className="head"> Welcome to Mini project page</div>
        <div className="dsc">
          My gratitude to you for all you have done, which I will never forget.
          I truly appreciate you and the time you spent helping me and others
          through the Bootcamp. Thank you very much for the course. You helped
          me to push further and to learn more.
        </div>
        <div className="work">
          <h1 className="num">{number}</h1>
          <div className="btn">
            <button onClick={() => setNumber((prev) => prev + 1)}>
              Click Me to add 1
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Miniproject;
