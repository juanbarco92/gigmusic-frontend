import React from 'react'
import '../Static/CSS/User.css'
import Login from './Login'
import SignUp from './SignUp'

const User = (props) => {

	const { LogUser, SignUpUser, setToken, delToken, token } = props
    
    if(!token) {
    	return (
        <div>
          <div className='row'>
            <div className='col text-center'>
              <h1>Por favor inicia sesión o regístrate</h1>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <Login setToken={setToken} LogUser={LogUser} />
            </div>
            <div className='col'>
              <SignUp SignUpUser={SignUpUser} />
            </div>
          </div>
        </div>
        )
  	}

    document.title = "GIG - Cuenta"

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