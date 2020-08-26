import React, { useState } from 'react'
import {auth, storage} from '../../firebase'

const EditProfile = () =>{

    console.log(auth.currentUser)

    let [dataUser, setDataUser] = useState({
        userID: "",
        userImg: "",
        userName: "",
        userEmail: ""
    })

    const handleImgChange = (e) =>{
        return {[e.target.name]: e.target.files[0]}
    }

    const handleInputChange = (e) =>{
        console.log({[e.target.name]: e.target.value})
    }

    const handleSendToFirebase = (e) =>{
        setDataUser({
            ...dataUser,

        })
        e.preventDefault()
        console.log('se envío! D:')
    }

    return(
        <div>
            <form>
                <input type="file" accept="image/*" className="addImage" id="addImage" onChange={handleImgChange} name="userImg" required/>
                <input className= "input" id= "signUpUser" type ="text" placeholder = "Nombre de usuario" onChange={handleInputChange} name="userName" required/>
                <input className= "btn" id= "signup" type= "submit" placeholder="GUARDAR" onClick={handleSendToFirebase}/>
            </form>
        </div>
    )
}

export default EditProfile