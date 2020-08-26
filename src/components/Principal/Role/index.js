import React from "react";
//import plantas from "../../assets/plantas.png";
import styles from "./styles.module.css";

const index = () => {
  return (
    <div className={styles.container}>
      <div>
        <button className={styles.button}>¿Quieres que lavemos tu auto?</button>
      </div>
      <div>
        <button className={styles.button}>¿Quieres generar ganancias?</button>
      </div>
    </div>
  );
};

export default index;
