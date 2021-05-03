import React, {useState} from 'react'
import '../Static/CSS/SignUp.css'

const SignUp = (props) => {

// ----- Obtencion de variables y funciones de inicio
	const {SignUpUser} = props

// ----- Definicion de variables de estado
	const [email, setEmail] = useState('')
	const [username, setUsername] = useState('')
	const [nombre, setNombre] = useState('')
	const [password, setPassword] = useState('')
	const [verifyPassword, setVerifyPassword] = useState('')


// ----- Autenticacion
	const submit = async (e) => {
		e.preventDefault()
		const verify_password = verifyPassword
		const res = await SignUpUser({
			username, nombre, password, verify_password, email
		})
		if (res.error === null){
			window.location.reload()
			alert('Se registró con éxito')
		}
		else{
			return alert(res.error)
		}
	}
	const onEmail = (e) => {
		setEmail(e.target.value)
	}
	const onNombre = (e) => {
		setNombre(e.target.value)
	}
	const onUsername = (e) => {
		setUsername(e.target.value)
	}
	const onPassword = (e) => {
		setPassword(e.target.value)
	}
	const onVerifyPassword = (e) => {
		setVerifyPassword(e.target.value)
	}


  return (
    <div className="container text-center" id='SignUp-container'>
    	<h1>Signup</h1>
    	<form onSubmit={submit}>
    		<div className="mb-3">
				<label htmlFor="nombre-signup" className="form-label">Nombre</label>
				<input type="text" onChange={onNombre} className="form-control" id="nombre-signup"/>
			</div>
			<div className="mb-3">
				<label htmlFor="email-signup" className="form-label">Correo electrónico</label>
				<input type="email" onChange={onEmail} className="form-control" id="email-signup"/>
			</div>
			<div className="mb-3">
				<label htmlFor="username-signup" className="form-label">Username</label>
				<input type="text" onChange={onUsername} id="username-signup"  className="form-control"/>
			</div>
			<div className="mb-3">
				<label htmlFor="password-signup" className="form-label">Contraseña</label>
				<input type="password" id="password-signup" onChange={onPassword} className="form-control"/>
			</div>
			<div className="mb-3">
				<label htmlFor="verifypassword-signup" className="form-label">Vuelva a ingresar su contraseña</label>
				<input type="password" id="verify-password-signup" onChange={onVerifyPassword} className="form-control"/>
			</div>
			<button type="submit" className="btn btn-primary">Registrarse</button>
		</form>
    </div>
  );
}

export default SignUp;
