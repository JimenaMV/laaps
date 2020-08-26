import React from 'react'

const EditProfile = () =>{

    const handleInputChange = (e) =>{
        console.log(e.target.value)
    }

    const handleSendToFirebase = (e) =>{
        e.preventDefault()
        console.log('se envío! D:')
    }

    return(
        <div>
            <p>Aquí me editas :|</p>
            <form>
                <input type="file" accept="image/*" className="addImage" id="addImage" onChange={handleInputChange} name="userImg" required/>
                <input className= "input" id= "signUpUser" type ="text" placeholder = "Nombre de usuario" onChange={handleInputChange} name="userName" required/>
                <input className= "btn" id= "signup" type= "submit" placeholder="GUARDAR" onClick={handleSendToFirebase}/>
            </form>
        </div>
    )
}

export default EditProfile