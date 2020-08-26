import React from 'react'

const SelectRole = ({setClient, setWindowRole}) =>{
    return (
        <div>
            <button>Ingresa como lavaautos</button>
            <button onClick={() =>{
                setClient(true)
                setWindowRole(false)
            }}>Ingresa como cliente</button>
        </div>
    )
}

export default SelectRole