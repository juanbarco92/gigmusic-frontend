import React, {useState} from 'react'
import PropTypes from 'prop-types'
import '../Static/CSS/Login.css'

const Login = (props) => {

	const {setToken, LogUser} = props

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const submit = async (e) => {
		const token = await LogUser({
			email, password
		})
		setToken(token)
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
				<input type="email" onChange={onEmail} className="form-control" id="email-login" aria-describedby="emailHelp"/>
			</div>
			<div className="mb-3">
				<label htmlFor="password-login" className="form-label">Contraseña</label>
				<input type="password" onChange={onPassword} className="form-control" id="exampleInputPassword1"/>
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