import React, {useEffect, useState} from 'react'
import {Redirect} from 'react-router-dom'
import '../Static/CSS/User.css'
import {isEmpty} from '../Utils/utils'
import Login from './Login'
import SignUp from './SignUp'
import ChangeUser from './ChangeUser'

let urlAnt = null

const User = (props) => {

  // ----- Obtencion de variables y funciones de entrada
	const { getUser, delUser, LogUser, SignUpUser, setToken, token, user, EditarUsuario} = props

  let urlSearch = window.location.search

  useEffect(() => {
    if(urlAnt !== urlSearch){
      if(token !== null){
        getUser(token)
      }
      urlAnt = urlSearch
      if(user!== null && !isEmpty(user)){
        document.title = "GIG - "+user.username
      }
    }

  }, [getUser, token, urlSearch, user])

  // ----- Controlador de boton de salir
  const LogOut = () => {
    delUser()
    window.location.reload()
  }

  // ----- Controlador de edicion de usuario
  const [edit, setEdit] = useState(false)

  const EditUser = () => {
    setEdit(!edit)
  }


  // ----- Verificacion de usuario activo
  if(!token) {
       
  	return (
      <div>
        <Redirect to="/user/log" />
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

  if(edit){
    return (
      <div>
        <ChangeUser EditUser={EditUser} EditarUsuario={EditarUsuario} />
      </div>
    )
  }

  return (
    <div className="container text-center" id='User-container'>
      <Redirect to={"/user?username="+user.username} />
    	<h1>Bienvenido {user.nombre}</h1>
      <button type='button' className='btn btn-primary' onClick={EditUser}>Editar cuenta</button>
    	<button type="button" className="btn btn-primary" onClick={LogOut} >Salir</button>
    </div>
  );
}

export default User;