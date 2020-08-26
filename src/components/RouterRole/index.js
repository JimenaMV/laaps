import React, { useState, Fragment } from 'react'
import SelectRole from '../Role/Role'
import RouterSingIn from '../Auth/singInRouter/index'

const RouterRole = () =>{

    let [client, setClient] = useState(false)
    let [windowRole, setWindowRole] = useState(true)

    return(
        <div>
            {(client && !windowRole) &&
                <RouterSingIn
                />
            }
            {(windowRole && !client) &&
                <SelectRole 
                    setClient = {setClient}
                    setWindowRole = {setWindowRole}
                />
            }
        </div>
    )
}

export default RouterRole