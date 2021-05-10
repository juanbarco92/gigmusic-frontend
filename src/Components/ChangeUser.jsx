import React, {useState} from 'react'
import '../Static/CSS/ChangeUser.css'

const ChangeUser = (props) => {

	// ----- Obtencion de variables y funciones de inicio
	const {EditarUsuario, EditUser} = props

	// ----- Obtencion de email
	const [email, setEmail] = useState('')

	const onEmail = (e) => {
		setEmail(e.target.value)
	}

	// ----- Obtencion de Username
	const [username, setUsername] = useState('')

	const onUsername = (e) => {
		setUsername(e.target.value)
	}

	// ----- Obtencion de nombre
	const [nombre, setNombre] = useState('')

	const onNombre = (e) => {
		setNombre(e.target.value)
	}

	// ----- Obtencion de password
	const [password, setPassword] = useState('')

	const onPassword = (e) => {
		setPassword(e.target.value)
	}

	// ----- Obtencion de verify password
	const [verifyPassword, setVerifyPassword] = useState('')

	const onVerifyPassword = (e) => {
		setVerifyPassword(e.target.value)
	}

	// ----- Autenticacion y registro
	const submit = async (e) => {
		e.preventDefault()
		let data = {}
		if(password===verifyPassword){
			data['verify_password'] = verifyPassword.length>0 ? verifyPassword : null
			data['password'] = password.length>0 ? password : null
			data['email'] = email.length>0 ? email : null
			data['nombre'] = nombre.length>0 ? nombre : null
			data['username'] = username.length>0 ? username : null
			const res = await EditarUsuario(data)
			if (res.error === null){
				window.location.reload()
				alert('Se guardó con éxito')
				EditUser()
			}
			else{
				return alert(res.error)
			}
		}else{
			alert('Las contraseñas no coinciden')
		}
	}

  return (
    <div className="container text-center" id='SignUp-container'>
    	<h1>Edit</h1>
    	<form onSubmit={submit}>
    		<div className="mb-3">
				<label htmlFor="nombre-signup" className="form-label">Nombre</label>
				<input type="text" onChange={onNombre} className="form-control" id="nombre-signup"/>
			</div>
			{
				(email.length>0 && (!email.includes('.') || !email.includes('@')))&&
				(
					<span className='text-danger'>Ingrese un email válido</span>
				)
			}
			<div className="mb-3">
				<label htmlFor="email-signup" className="form-label">Correo electrónico</label>
				<input type="email" minLength='5' onChange={onEmail} className="form-control" id="email-signup"/>
			</div>
			<div className="mb-3">
				<label htmlFor="username-signup" className="form-label">Username</label>
				<input type="text" onChange={onUsername} id="username-signup"  className="form-control"/>
			</div>
			{
				(password !== verifyPassword) && 
				(
					<span className='text-danger'>Las contraseñas no coinciden</span>
				)
			}
			<div className="mb-3">
				<label htmlFor="password-signup" className="form-label">Contraseña</label>
				<input type="password" minLength='4' id="password-signup" onChange={onPassword} className="form-control"/>
			</div>
			<div className="mb-3">
				<label htmlFor="verifypassword-signup" className="form-label">Vuelva a ingresar su contraseña</label>
				<input required={password.length>0 ? true : false} type="password" minLength='4' id="verify-password-signup" onChange={onVerifyPassword} className="form-control"/>
			</div>
			<input type="submit" value='Guardar cambios' className="btn btn-primary"/>
		</form>
    </div>
  );
}

export default ChangeUser;
