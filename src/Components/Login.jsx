import React, {useState} from 'react'
import PropTypes from 'prop-types'
import '../Static/CSS/Login.css'

const Login = (props) => {

// ----- Obtencion de variables y funciones de inicio
	const {setToken, LogUser} = props

	document.title = "GIG - Login - Signup"

// ----- Definicion de variables de estado
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

// ----- Autenticacion
	const submit = async (e) => {
		e.preventDefault()
		const token = await LogUser({
			email, password
		})
		if (token.error === null){
			setToken(token.token)
			window.location.reload()
		}
		else{
			return alert(token.error)
		}
	}
	const onEmail = (e) => {
		setEmail(e.target.value)
	}
	const onPassword = (e) => {
		setPassword(e.target.value)
	}

  return (
    <div className="container text-center" id='Login-container'>
    	<h1>Login</h1>
    	<form onSubmit={submit}>
			<div className="mb-3">
				<label htmlFor="email-login" className="form-label">Correo electrónico</label>
				<input type="email" onChange={onEmail} className="form-control" id="email-login"/>
			</div>
			<div className="mb-3">
				<label htmlFor="password-login" className="form-label">Contraseña</label>
				<input type="password" id="password-login" onChange={onPassword} className="form-control"/>
			</div>
			<button type="submit" className="btn btn-primary">Ingresar</button>
		</form>
    </div>
  );
}

export default Login;

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}