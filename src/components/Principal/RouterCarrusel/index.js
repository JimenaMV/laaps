import React, { useState } from 'react'
import RouterRole from '../../RouterRole/index'
import CarruselWelcome from '../CarruselWelcome/index'

const ShowWelcome = () =>{

    let [routerRole, setRouterRole] = useState(false)
    let [carruselWelcome, setCarruselWelcome] = useState(true)

    return(
     <div>
         {(carruselWelcome && !routerRole) &&
            <CarruselWelcome 
                setCarruselWelcome = {setCarruselWelcome}
                setRouterRole = {setRouterRole}
            />
         }
         {(routerRole && !carruselWelcome) &&
            <RouterRole />
         }
     </div>   
    )
}

export default ShowWelcome