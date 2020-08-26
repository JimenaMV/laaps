import React from 'react'

const Auth = ({handleInputChange, handleSendToFirebase}) =>{
    return (
        <div>
        <div className="containerformSignup">
            <form className= "form">
                <input className= "input" id= "signUpEmail" type= "email" placeholder = "Correo electrónico" onChange={handleInputChange} name="email" required/>
                <input className= "input" id= "signUpPassword" type= "password" placeholder = "Contraseña" onChange={handleInputChange} name="password" minLength="6" maxLength="15" required/>
                <input className= "btn" id= "signup" type= "submit" placeholder="ENVIAR" onClick={handleSendToFirebase}/>
            </form>
       </div>
        </div>
    )
}

export default Auth