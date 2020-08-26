import React from 'react'

const CarruselWelcome = ({setCarruselWelcome, setRouterRole}) =>{

    return(
     <div>
        <p>Holaa, aquí va carrusel y después pantalla 
             para elegir botón para tipo de usuario
        </p>
        <button onClick={() =>{
            setRouterRole(true)
            setCarruselWelcome(false)
        }}>Comenzar</button>
     </div>   
    )
}

export default CarruselWelcome