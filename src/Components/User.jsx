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
      <div id='delete'>
        <DeleteUser SoftDelUser={SoftDelUser} DelUserSession={DelUserSession} Atras={DeleteAccount}/>
      </div>
    )
  }

  // ----- Verificacion de usuario activo
  if(!token) {
       
  	return (
      <div id='sign'>
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
      <div id='edit'>
        <ChangeUser Atras={EditUser} EditUser={EditUser} EditarUsuario={EditarUsuario} />
      </div>
    )
  }

  return (
    <div className="container-fluid" id='User-container'>
      <Redirect to={"/user?username="+user.username} />
      <div className='row'>
        <div className='col text-center'>
          <button type='button' className='gig-btn mt-2 sticky-top btn' onClick={EditUser}>Editar cuenta</button>
        	<button type="button" className="gig-btn mt-2 sticky-top mx-2 btn" onClick={LogOut} >Salir</button>
          <button type="button" className="gig-btn mt-2 sticky-top btn" onClick={DeleteAccount} >Eliminar cuenta</button>
          <h1>Bienvenido {user.nombre}</h1>
        </div>
      </div>
    </div>
  );
}

export default User;