import React, {useState} from 'react'
import '../../Static/CSS/Users/ChangeUser.css'

const ChangeUser = (props) => {

	// ----- Obtencion de variables y funciones de inicio
	const {EditarUsuario, EditUser, Atras} = props

	// ----- Titulo de pagina
	document.title = "GIG - Editar Cuenta"

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
	const [antPassword, setAntPassword] = useState('')

	const onAntPassword = (e) => {
		setAntPassword(e.target.value)
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
		if (antPassword.length>0){
			let data = {}
			if(password===verifyPassword){
				data['verify_password'] = verifyPassword.length>0 ? verifyPassword : null
				data['password'] = password.length>0 ? password : null
				data['email'] = email.length>0 ? email : null
				data['nombre'] = nombre.length>0 ? nombre : null
				data['username'] = username.length>0 ? username : null
				data['password_ant'] = antPassword
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
		else{
			alert('introduzca su contraseña actual')
		}
	}

  return (
    <div className="container text-center" id='Editar-container'>
    	<div className='row'>
    		<div className='col'>
		    	<h1>Edit</h1>
		    	<form onSubmit={submit}>
		    		<div className="mb-3">
						<label htmlFor="nombre-edit" className="form-label">Nombre</label>
						<input type="text" onChange={onNombre} className="form-control form-input-p" id="nombre-edit"/>
					</div>
					{
						(email.length>0 && (!email.includes('.') || !email.includes('@')))&&
						(
							<span className='text-danger'>Ingrese un email válido</span>
						)
					}
					<div className="mb-3">
						<label htmlFor="email-edit" className="form-label">Correo electrónico</label>
						<input type="email" minLength='5' onChange={onEmail} className="form-control form-input-p" id="email-edit"/>
					</div>
					<div className="mb-3">
						<label htmlFor="username-edit" className="form-label">Username</label>
						<input type="text" onChange={onUsername} id="username-edit"  className="form-control form-input-p"/>
					</div>
					{
						(password !== verifyPassword) && 
						(
							<span className='text-danger'>Las contraseñas no coinciden</span>
						)
					}
					<div className="mb-3">
						<label htmlFor="password-edit" className="form-label">Nueva contraseña</label>
						<input type="password" minLength='4' id="password-edit" onChange={onPassword} className="form-control form-input-p"/>
					</div>
					<div className="mb-3">
						<label htmlFor="verifypassword-edit" className="form-label">Vuelva a ingresar su nueva contraseña</label>
						<input required={password.length>0 ? true : false} type="password" minLength='4' id="verify-password-signup" onChange={onVerifyPassword} className="form-control form-input-p"/>
					</div>
					<div className="mb-3">
						<label htmlFor="ant-password-edit" className="form-label text-danger">Ingrese su contraseña actual</label>
						<input required type="password" minLength='4' id="ant-password-edit" onChange={onAntPassword} className="form-control form-input-p"/>
					</div>
					<input type="submit" value='Guardar cambios' className="gig-btn btn"/>
				</form>
				<button type="button" className="gig-btn mt-2 btn" onClick={Atras} >Atras</button>
    		</div>
    	</div>
    </div>
  );
}

export default ChangeUser;
