import React, { Fragment, useState } from 'react'
import SingIn from '../singIn/index'
import SignUp from '../../Auth/signUp'
import PrincipalWindow from '../../ClientProfile/PrincipalWindow/index'

const RouterSingIn = () => {
    let [singIn, setSingIn] = useState(true)
    let [signUp, setSignUp] = useState(false)
    let [principalWindow, setPrincipalWindow] = useState(false)
    return(
        <Fragment>
            {(singIn && !signUp && !principalWindow) &&
                <SingIn
                    setSingIn = {setSingIn}
                    setSignUp = {setSignUp}
                    setPrincipalWindow = {setPrincipalWindow}
                />
            }
            {(signUp && !singIn && !principalWindow) &&
                <SignUp />                        
            }
            {(principalWindow && !signUp && !singIn) &&
                <PrincipalWindow 
                />
            }
        </Fragment>
    )
}

export default RouterSingIn