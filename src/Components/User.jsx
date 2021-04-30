import React from 'react'
import '../Static/CSS/User.css'
import Login from './Login'

const User = (props) => {

	const { LogUser, setToken, delToken, token } = props

    document.title = "GIG - User"
    
    if(!token) {
    	return <Login setToken={setToken} LogUser={LogUser} />
  	}

  	const LogOut = () => {
  		delToken()
  		window.location.reload()
  	}

  return (
    <div className="container text-center" id='User-container'>
    	<h1>Bienvenido</h1>
    	<button type="submit" className="btn btn-primary" onClick={LogOut} >Salir</button>
    </div>
  );
}

export default User;