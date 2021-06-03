import React, {useEffect, useState} from 'react'
import {Redirect} from 'react-router-dom'
import { GoogleLogin } from 'react-google-login'
import '../Static/CSS/User.css'
import {isEmpty} from '../Utils/utils'
import Login from './Users/Login'
import SignUp from './Users/SignUp'
import ChangeUser from './Users/ChangeUser'
import DeleteUser from './Users/DeleteUser'

let urlAnt = null
const clienteIDGoogle = "693094359127-1sfd9rka41nih5buojvmfglgbcabvmb0.apps.googleusercontent.com"

const User = (props) => {

  // ----- Obtencion de variables y funciones de entrada
	const { temaInterfaz, cambiarTema, GetUser, DelUserSession, SoftDelUser, LogUser, 
    SignUpUser, setToken, token, user, EditarUsuario, GoogleIn} = props

  let urlSearch = window.location.search

  // ----- Obtencion de usuario activo
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

  // ----- Inicio de session con google
  const responseGoogle = async (res) => {
    if(!res.error){
      const data = await GoogleIn(res.tokenId)
      if(data.error === null){
        if(data.result === 1){
          alert('El usuario fue creado con exito, su contraseña y username son su correo, le recomendamos que los cambie')
        }else if(data.result === 0){
          alert('Inicio de sesión satisfactorio')
        }
        setToken(data.token)
        window.location.reload()
      }else{
        alert(data.error)
      }
    }
    else{
      alert('Error de Inicio')
    }
  }

  // ----- Redireccion a user activo
  if(!urlSearch.startsWith('?username=')){
    if(token){
      return(<Redirect to={{
        pathname: "/user",
        search: "?username="+user.username
      }} />)
    }
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
        <GoogleLogin
          clientId={clienteIDGoogle}
          buttonText="Inicia con Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
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
      <div className='row mt-2'>
        <div className='col text-center d-flex justify-content-around'>
          <button type='button' className='gig-btn sticky-top btn' onClick={EditUser}>Editar cuenta</button>
        	<button type="button" className="gig-btn sticky-top btn" onClick={LogOut} >Salir</button>
          <button type="button" className="gig-btn sticky-top btn" onClick={DeleteAccount} >Eliminar cuenta</button>
          <select className="gig-btn sticky-top btn" value={temaInterfaz} onChange={e => cambiarTema(e.target.value)}>
            <option value='dia'>Día</option>
            <option value='noche'>Noche</option>
          </select>
        </div>
      </div>
      <div className='row mt-2'>
        <div className='col text-center'>
          <h1>Bienvenido {user.nombre}</h1>
          </div>
      </div>
    </div>
  );
}

export default User;