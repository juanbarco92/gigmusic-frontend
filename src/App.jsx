import React, {useState, useEffect} from 'react'
import{
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import axios from 'axios'
import { useCookies } from "react-cookie"
import './App.css'
import {
  getToken, 
  setToken, 
  delToken
} from './Utils/utils'
import Song from './Components/Song'
import Inicio from './Components/Inicio'
import Resultados from './Components/Resultados'
import Busqueda from './Components/Busqueda'
import Error404 from './Components/Error404'
import NavExpand from './Components/NavExpand'
import NavContract from './Components/NavContract'
import MusicNav from './Components/MusicNav'
import Artist from './Components/Artist'
import User from './Components/User'

let init = true

function App() {

// ----- Configuracion de axios
  axios.defaults.baseURL = "http://localhost:8080/api"
  axios.defaults.headers.common['Content-type'] = 'application/json; charset=utf-8'
  axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
  axios.defaults.headers.common['Access-Control-Allow-Methods'] = '*'
  axios.defaults.headers.common['Access-Control-Allow-Headers'] = '*'
  axios.defaults.headers.common['cache-control'] = 'no-cache'

  // ----- Estilos adicionales de adaptacion
  const styles = {
    maxWidth : window.screen.width,
    maxHeight : window.screen.height
  }

  // ----- Obtencion de canciones y artistas
  const [artistas, setArtistas] = useState([])

  const getArtist = async (search?) => {
      const {data} = await axios.get(`/artist/${search}&num_registros=5`)
      const nuevoArray = data.map(item => (item))
      setArtistas(nuevoArray)
  }

  const [canciones, setCanciones] = useState([])

  const getSong = async (search=null) => {
      const {data} = await axios.get(`/song/${search}&num_registros=5`)
      const nuevoArray = data.map(item => (item))
      setCanciones(nuevoArray)
  }

  // ----- Obtencion de artista o cancion especifica
  const [cancionElegida, setCancionElegida] = useState({})
  const [artistaElegido, setArtistaElegido] = useState({})

  const Eleccion = async (path, id?) => {
    if(path === '/song/'){
      const {data} = await axios.get(`/song/one${id}`)
      setCancionElegida(data)
    }
    else if(path === '/artist/'){
      const {data} = await axios.get(`/artist/one${id}`)
      setArtistaElegido(data)
    }
  }

  // ----- Helpers para collapse, scrolling y acordes
  const [colapsar, setColapsar] = useState(false)
  const [scroll,setScroll] = useState(false)
  const [acordes,setAcordes] = useState(false)

  const Colapse = () => {
    setColapsar(!colapsar)
  }

  const Scrolling = () => {
    setScroll(!scroll)
  }

  const MostrarAcordes = () => {
    setAcordes(!acordes)
  }

  // ----- Declaracion de Cookies
  const [cookies, setCookie] = useCookies(['colorAcorde', 'colorFuente', 'tipografia', 'tamano'])

  // ----- Personalizacion
  const [personalize, setPersonalize] = useState({
    'font': 'inherit',
    'color': 'inherit',
    'fontFamily': 'inherit',
    'fontSize': '1rem',
    'titleFontSize': '1.5rem'
  })
  // Color acordes
  const VarAcordes = (e) => {
    console.log('VarAcorde')
    setPersonalize({
    ...personalize,
    'color': e
    })
    setCookie("colorAcorde", e, {
      path: "/"
    })
  }
  // Color de fuente
  const VarFuente = (e) => {
    console.log('VarFuente')
    setPersonalize({
    ...personalize,
    'font': e
    })
    setCookie("colorFuente", e, {
      path: "/"
    })
  }
  // Tipografia
  const VarTipo = (e) => {
    console.log('VarTipo')
    setPersonalize({
    ...personalize,
    'fontFamily': e
    })
    setCookie("tipografia", e, {
      path: "/"
    })
  }
  // Tamano de fuente
  const VarSize = (e) => {
    setPersonalize({
    ...personalize,
    'fontSize': e+'rem',
    'titleFontSize': e+0.5+'rem'
    })
    setCookie("tamano", String(e), {
      path: "/"
    })
  }
  // Reset de Personalizacion
  const ResetP = () => {
    setPersonalize({
    'font': 'inherit',
    'color': 'inherit',
    'fontFamily': 'inherit',
    'fontSize': '1rem',
    'titleFontSize': '1.5rem'
    })
    setCookie("colorAcorde", 'inherit', {
      path: "/"
    })
    setCookie("colorFuente", 'inherit', {
      path: "/"
    })
    setCookie("tipografia", 'inherit', {
      path: "/"
    })
    setCookie("tamano", String(1), {
      path: "/"
    })
  }

  // --- Obtencion de cookies o set por default
  useEffect(() => {
    if(init){
      if(cookies){
        const ctam = parseFloat(cookies.tamano)
        setPersonalize({
        'font': cookies.colorFuente,
        'color': cookies.colorAcorde,
        'fontFamily': cookies.tipografia,
        'fontSize': ctam+'rem',
        'titleFontSize': ctam+0.5+'rem'
        })
      }else{
        setCookie("colorAcorde", 'inherit', {
          path: "/"
        })
        setCookie("colorFuente", 'inherit', {
          path: "/"
        })
        setCookie("tipografia", 'inherit', {
          path: "/"
        })
        setCookie("tamano", String(1), {
          path: "/"
        })
      }
    }
  }, [cookies, setCookie])

  // ----- Login de usuario
  const LogUser = async (credentials) => {
    const {data} = await axios.post('/user/login', JSON.stringify(credentials))
    return data
  }

  // ----- Obtencion de usuario desde local
  const token = getToken()

  // ----- SignUp de usuario
  const SignUpUser = async (credentials) => {
    const {data} = await axios.post('/user', JSON.stringify(credentials))
    return data
  }

  // ----- Obtencion de usuario
  const [user, setUser] = useState({})

  const getUser = async (token) => {
    const {data} = await axios.get(`/user/user_token?token=${token}`)
    setUser(data)
  }

  // ----- Eliminacion de usuario
  const delUser = () => {
    setUser({})
  }

  return (
      <div className='container-fluid' id='App' style={styles}>
        <Router>
          <div className='row'>
            {
              colapsar ?
              (
                <div className='col-1 py-0' id='NavContract'>
                  <NavContract Colapse={Colapse}/>
                </div>
              )
              :
              (
                <div className='col-3 py-0' id='NavExpand'>
                  <NavExpand Colapse={Colapse}/>
                </div>
              )
            }
            <div className='col'>
              <Switch>
                <Route path='/song/'>
                  <div className='row'>

                    <div className='col'>
                      <Busqueda getSong={getSong} getArtist={getArtist} />
                      <Song Eleccion={Eleccion} 
                      scroll={scroll} 
                      acordes={acordes} 
                      Scrolling={Scrolling} 
                      elegida={cancionElegida} 
                      personalize={personalize} />
                    </div>

                    <div className='col-3' id='MusicNav'>
                      <MusicNav scroll={scroll} 
                      MostrarAcordes={MostrarAcordes}
                      Scrolling={Scrolling} VarTipo={VarTipo} VarSize={VarSize}
                      VarFuente={VarFuente} VarAcordes={VarAcordes} 
                      personalize={personalize} ResetP={ResetP} />
                    </div>
                  </div>

                </Route>
                <Route path='/search/'>
                  <Busqueda getSong={getSong} getArtist={getArtist} />
                  <Resultados artistas={artistas} canciones={canciones}
                  getSong={getSong} getArtist={getArtist} />
                </Route>

                <Route path='/artist/'>
                  <Busqueda getSong={getSong} getArtist={getArtist} />
                  <Artist Eleccion={Eleccion} elegida={artistaElegido} />
                </Route>

                <Route path='/user/'>
                  <Busqueda getSong={getSong} getArtist={getArtist} />
                  <User LogUser={LogUser} SignUpUser={SignUpUser} getUser={getUser}
                  token={token} delToken={delToken} user={user}
                  setToken={setToken} delUser={delUser} />
                </Route>

                <Route exact path='/'>
                  <Busqueda getSong={getSong} getArtist={getArtist} />
                  <Inicio/>
                </Route>

                <Route path='*'>
                  <Busqueda getSong={getSong} getArtist={getArtist} />
                  <Error404/>
                </Route>
              </Switch>
            </div>
          </div>
        </Router>
      </div>   
  );
}

export default App;
