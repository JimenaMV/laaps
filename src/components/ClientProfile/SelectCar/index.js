import React from "react";
import styles from "./styles.module.css";
import car from "../../assets/vento.png";

const SelectCar = () => {
  return (
    <div className={styles.carContainer}>
      <div>
        <h3>Selecciona tu auto</h3>
      </div>
      <div>
        <img src={car} alt="" />
      </div>
      <div>
        <ul>
          <li>
            <strong>Modelo:</strong> Vento 2020 Startline
          </li>
          <li>
            <strong>Número de placa:</strong> ALF-94-69
          </li>
          <li>
            <strong>Color:</strong> Blanco
          </li>
          <li>
            <strong>Comentarios:</strong> Tiene un rayón en la puerta del
            conductor
          </li>
        </ul>
      </div>
      <div>
        <button className={styles.btnCar}>Aceptar</button>
      </div>
    </div>
  );
};

export default SelectCar;
