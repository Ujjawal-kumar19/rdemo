import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../image/UJ.png";
import styles from "./navigation.module.css";
function Navigation() {
  return (
    <div className={styles.navigation}>
      <Link className={styles.logo} to="/">
        <img src={Logo} alt="UJ" />
      </Link>
      <div className={styles.navigationButtonContainer}>
        <Link to="/">
          <button className={styles.navigationButton}>Home</button>
        </Link>
        <Link to="/Aboutme">
          <button className={styles.navigationButton}>About</button>
        </Link>
        <Link to="/Miniproject">
          <button className={styles.navigationButton}> Project</button>
        </Link>
      </div>
    </div>
  );
}

export default Navigation;
