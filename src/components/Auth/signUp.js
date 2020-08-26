import React from 'react'
import styles from './styles.module.css'
import logo from "../assets/logo.png";
import google from '../assets/google.png'


const Auth = ({handleInputChange, handleSendToFirebase}) =>{
    return (
        <div className={styles.container}>
            <h2>Regístrate</h2>
            <div>
                <img className={styles.logo} src={logo} alt="" />   
            </div>
                <form className= "form">
                    <div className={styles.info}>   
                        <input className= "input" id= "signUpEmail" type= "email" placeholder = "Correo electrónico" onChange={handleInputChange} name="email" required/>
                        <input className= "input" id= "signUpPassword" type= "password" placeholder = "Contraseña" onChange={handleInputChange} name="password" minLength="6" maxLength="15" required/>
                    </div>
                    <div className={styles.loginContainer}>
                        <input className={styles.btnLogin} id= "signup" type= "submit" placeholder="ENVIAR" onClick={handleSendToFirebase}/>   
                    </div>
                </form>
                <button className={styles.btnGoogle}>
                    <img src={google}/>
                </button>
        </div>
    )
}

export default Auth