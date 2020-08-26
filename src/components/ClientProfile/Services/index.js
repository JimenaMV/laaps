import React from "react";
import services from "../../assets/services.png";
import styles from "./styles.module.css";
import infoServices from "../../assets/info-services.png";

const Services = () => {
  return (
    <div className={styles.servicesContainer}>
      <div>
        <h3>Nuestros servicios</h3>
      </div>
      <img className={styles.car} src={services} alt="" />

      <p>
        ¡Estamos trabajando para poder ofrecerte otros servicios en un futuro no
        tan lejano!
      </p>
      <div>
        <img className={styles.info} src={infoServices} alt="" />
        {/* <button className={styles.btnServices}>
          <div>
            <p>Lavado y encerado</p>
          </div>
          <div>
            <p>Hipercleaner 3mil</p>
            <p>Desechos orgánicos y cítricos</p>
          </div>
          <div>
            <p>130MNX</p>
            <p>Tiempo de lavado aproximado: 1hr</p>
          </div>
        </button> */}
      </div>
    </div>
  );
};

export default Services;
