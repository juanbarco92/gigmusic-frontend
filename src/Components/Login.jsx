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
    		{
				(email.length>0 && (!email.includes('.') || !email.includes('@')))&&
				(
					<span className='text-danger'>Ingrese un email válido</span>
				)
			}
			<div className="mb-3">
				<label htmlFor="email-login" className="form-label">Correo electrónico</label>
				<input required type="email" onChange={onEmail} className="form-control" id="email-login"/>
			</div>
			<div className="mb-3">
				<label htmlFor="password-login" className="form-label">Contraseña</label>
				<input required type="password" id="password-login" minlength='4' onChange={onPassword} className="form-control"/>
			</div>
			<input type="submit" value='Ingresar' className="btn btn-primary"/>
		</form>
    </div>
  );
}

export default Login;

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}