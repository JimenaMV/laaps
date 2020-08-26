import React from "react";
import style from "./style.module.css";

const Geolocation = () => {
  return (
    <div>
      <div>
        <p>Legamos a ti</p>
      </div>
      <div className={style.mapa}></div>
      <div>
        <button>Solicitar servicio</button>
      </div>
    </div>
  );
};

export default Geolocation;
