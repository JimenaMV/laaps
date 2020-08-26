import React, { useState } from 'react'
import {auth} from '../../../firebase'
import styles from './styles.module.css'
import logo from "../../assets/logo.png";
import google from '../../assets/google.png'

const SingIn = ({setSignUp,setSingIn, setPrincipalWindow}) => {

    let [singData, setSingData] = useState ({
       email: '',
       password: '' 
    })

    const handleInputChange = (e) => {
        setSingData({
            ...singData,
            [e.target.name] : e.target.value,
        })
    }

    const handleSendToFirebase = async() => {
          await auth.signInWithEmailAndPassword(singData.email, singData.password)
          setPrincipalWindow(true)
          setSingIn(false)
    }

    return(
        <div className={styles.container}>
            <div>
                <img className={styles.logo} src={logo} alt="" />   
            </div>
            <form>
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
            <div className={styles.noRegisterContainer}>
                <p className={styles.noRegister}>Si aún no tienes cuenta</p>
                <button className={styles.registerHere} onClick={() =>{
                setSignUp(true)
                setSingIn(false)
                }}>
                    Regístrate aquí
                </button>
            </div>
        </div>
    )
}

export default SingIn