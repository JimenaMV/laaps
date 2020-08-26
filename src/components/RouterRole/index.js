import React, { useState, Fragment } from 'react'
import SignUpClient from '../ClientProfile/AuthRouter/index'
import SelectRole from '../Role/Role'

const RouterRole = () =>{

    let [client, setClient] = useState(false)
    let [windowRole, setWindowRole] = useState(true)

    return(
        <div>
            {(client && !windowRole) &&
                <SignUpClient
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