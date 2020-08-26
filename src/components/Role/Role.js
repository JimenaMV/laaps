import React from 'react'
import styles from "./styles.module.css";

const SelectRole = ({setClient, setWindowRole}) =>{
    return (
        <div className={styles.container}>
            <div>
                <button className={styles.button} onClick={() =>{
                    setClient(true)
                    setWindowRole(false)
                }}>¿Quieres que lavemos tu auto?</button>
            </div>
            <div>
                <button className={styles.button}>¿Quieres generar ganancias?</button>
            </div>
        </div>
    )
}

export default SelectRole