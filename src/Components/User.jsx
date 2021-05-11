import React, {useEffect, useState} from 'react'
import {Redirect} from 'react-router-dom'
import '../Static/CSS/User.css'
import {isEmpty} from '../Utils/utils'
import Login from './Users/Login'
import SignUp from './Users/SignUp'
import ChangeUser from './Users/ChangeUser'
import DeleteUser from './Users/DeleteUser'

let urlAnt = null

const User = (props) => {

  // ----- Obtencion de variables y funciones de entrada
	const { GetUser, DelUserSession, SoftDelUser, LogUser, SignUpUser, setToken, token, user, EditarUsuario} = props

  let urlSearch = window.location.search

  useEffect(() => {
    if(urlAnt !== urlSearch){
      if(token !== null){
        GetUser(token)
      }
      urlAnt = urlSearch
      if(user!== null && !isEmpty(user)){
        document.title = "GIG - "+user.username
      }
    }

  }, [GetUser, token, urlSearch, user])

  // ----- Controlador de boton de salir
  const LogOut = () => {
    DelUserSession()
    window.location.reload()
  }

  // ----- Controlador de edicion de usuario
  const [edit, setEdit] = useState(false)

  const EditUser = () => {
    setEdit(!edit)
  }

  // ----- Controlador de eliminar cuenta
  const [deleter, setDeleter] = useState(false)

  const DeleteAccount = () => {
    setDeleter(!deleter)
  }

  if(deleter){
    return (
      <DeleteUser SoftDelUser={SoftDelUser} DelUserSession={DelUserSession} Atras={DeleteAccount}/>
    )
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
        <ChangeUser Atras={EditUser} EditUser={EditUser} EditarUsuario={EditarUsuario} />
      </div>
    )
  }

  return (
    <div className="container text-center" id='User-container'>
      <Redirect to={"/user?username="+user.username} />
      <div className='row'>
        <div className='col'>
          <button type='button' className='mt-2 sticky-top btn btn-primary' onClick={EditUser}>Editar cuenta</button>
        	<button type="button" className="mt-2 sticky-top mx-2 btn btn-primary" onClick={LogOut} >Salir</button>
          <button type="button" className="mt-2 sticky-top btn btn-primary" onClick={DeleteAccount} >Eliminar cuenta</button>
          <h1>Bienvenido {user.nombre}</h1>
        </div>
      </div>
    </div>
  );
}

export default User;