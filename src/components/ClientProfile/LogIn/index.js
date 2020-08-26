import React from "react";
import logo from "../../assets/logo.png";
import styles from "./styles.module.css";

const LogIn = () => {
  return (
    <div className={styles.container}>
      <div>
        <img className={styles.logo} src={logo} alt="" />
      </div>
      <div className={styles.info}>
        <input type="number" name="" id="" placeholder="Número de teléfono" />
        <br />
        <input type="password" name="" id="" placeholder="Contraseña" />
      </div>
      <div className={styles.loginContainer}>
        <button className={styles.btnLogin}>Iniciar sesión</button>
        <hr />
        <button className={styles.btnGoogle}>Gmail</button>
      </div>
      <div className={styles.noRegisterContainer}>
        <p className={styles.noRegister}>Aún no tienes cuenta</p>
        <p className={styles.registerHere}>Regístrate aquí</p>
      </div>
    </div>
  );
};

export default LogIn;
