import React from "react";
import style from "./style.module.css";
import ubication from "../../assets/ubication.png";

const Geolocation = () => {
  return (
    <div className={style.GeoContainer}>
      <div className={style.title}>
        <h3>Llegamos a ti</h3>
      </div>

      <div className={style.map}>
        <img src={ubication} alt="" />
      </div>
      <div>
        <button className={style.btnGeo}>Solicitar servicio</button>
      </div>
    </div>
  );
};

export default Geolocation;
