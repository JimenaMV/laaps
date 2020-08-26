import React, { useState, Fragment } from 'react'
import {db, auth} from '../../../firebase'
import Auth from '../../Auth/signUp'
import EditProfile from '../../EditProfile/index'
import RouterSingIn from '../../Auth/singInRouter/index'

const AuthRouter = () =>{

    let [editProfile, setEditProfile] = useState(false)
    let [signUp, setSignUp] = useState(true)
    let [singIn, setSingIn] = useState(false)

    let [dataNewUser, setDataNewUser] = useState({
        email:'',
        password:'',
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
        let user= auth.currentUser
        // if(user === !null){
        //     await db.collection("users").doc().set({
        //         user: dataNewUser.userName,
        //         id: user.uid,
        //         email: dataNewUser.email
        //     })
        //     console.log("subio correctamente info :)")
        // }
        
        setSignUp(false)
        setEditProfile(true)
    } 

    return(
        <Fragment>
           {(signUp && !editProfile && !singIn) &&
           <Auth 
            handleInputChange = {handleInputChange}
            handleSendToFirebase = {handleSendToFirebase}
           />
           }
           {(editProfile && !signUp && !singIn) &&
           <EditProfile />
           }
           {(singIn && !editProfile && !signUp) &&
           <RouterSingIn
           
           />
           }
        </Fragment>
    )
}

export default AuthRouter;