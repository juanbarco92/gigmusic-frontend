import React, {useState} from 'react'
import '../../Static/CSS/Users/DeleteUser.css'

const DeleteUser = (props) => {

	// ----- Obtencion de funciones de entrada
	const {Atras, SoftDelUser, DelUserSession} = props

	// ----- Obtencion de contraseña
	const [password, setPassword] = useState('')

	const onPass = (e) => {
		setPassword(e.target.value)
	}

	// ----- Submit de eliminar cuenta
	const Eliminar = async (e) => {
		e.preventDefault()
		const res = await SoftDelUser({password})
		if (res.error===null){
			DelUserSession()
			window.location.reload()
			alert('Su cuenta se eliminó exitosamente')
		}
		else{
			alert(res.error)
		}
	}

  return (
    <div className="container text-center" id='Delete-container'>
    	<h1>¿Esta seguro de eliminar su cuenta?</h1>
    	<h2>Tenga en cuenta que si quiere recuperarla sera necesario contactar con soporte</h2>
    	<p>Los datos de su cuenta se mantendran con fines estadisticos y recuperacion</p>

    	<form onSubmit={Eliminar}>
    		<div className="mb-3">
				<label htmlFor="password-delete" className="form-label">
					<span>
						Confirme la eliminacion introduciendo su contraseña
					</span>
				</label>
				<input required type="password" onChange={onPass} className="form-control" id="password-delete"/>
			</div>
			<input type="submit" value='Eliminar cuenta' className="btn btn-primary"/>
		</form>
    	<button type="button" className="mt-2 btn btn-primary" onClick={Atras} >Atras</button>
    </div>
  );
}

export default DeleteUser;
