import React, { useState, Fragment } from 'react'
import {db, auth} from '../../../firebase'
import Auth from '../../Auth'
import EditProfile from '../../EditProfile/index'

const AuthRouter = () =>{

    let [editProfile, setEditProfile] = useState(false)
    let [signUp, setSignUp] = useState(true)

    let [dataNewUser, setDataNewUser] = useState({
        email:'',
        password:''
    })

    const handleInputChange = (e) =>{
        setDataNewUser({
            ...dataNewUser,
            [e.target.name] : e.target.value
        })
    }


    const handleSendToFirebase = async (e) => {
        e.preventDefault()
        console.log(dataNewUser.email, dataNewUser.password)
        await auth.createUserWithEmailAndPassword(dataNewUser.email, dataNewUser.password)
        setSignUp(false)
        setEditProfile(true)
    } 

    return(
        <Fragment>
           {(signUp && !editProfile) &&
           <Auth 
            handleInputChange = {handleInputChange}
            handleSendToFirebase = {handleSendToFirebase}
           />
           }
           {(editProfile && !signUp) &&
           <EditProfile />
           } 
        </Fragment>
    )
}

export default AuthRouter;