import React from 'react'

import logo from "../../assets/logo.png";
import styles from "./style.module.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className={styles.container}>
      {/*  <div>
        <img src={plantas} alt="" />
      </div> */}
      <div className={styles.logo}>
        <Link to="/carrusel">
          <img src={logo} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default Home;