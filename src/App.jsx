import React, {useState, useRef, useEffect, useMemo, useCallback} from 'react'
import{
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import axios from 'axios'
import { useCookies } from 'react-cookie'
import { CSSTransition } from 'react-transition-group'
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
import NavExpand from './Components/Navs/NavExpand'
import NavContract from './Components/Navs/NavContract'
import MusicNav from './Components/Songs/MusicNav'
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

  // ----- Registro de comportamientos
  const Logger = async (token, tipo, objeto) => {
    await axios.post('/analytic', JSON.stringify({token, tipo, objeto}))
  }

  // ----- Declaracion de Cookies
  const [cookies, setCookie] = useCookies(['colorAcorde', 'colorFuente', 'tipografia', 'tamano', 'nav'])
  const cookieOptions = useMemo(() => ({
      path: "/",
      sameSite: 'lax'
    }), [])

  // ----- Obtencion de canciones y artistas
  const [artistas, setArtistas] = useState([])

  const getArtist = async (search) => {
      const {data} = await axios.get(`/artist/${search}&num_registros=5`)
      const nuevoArray = data.map(item => (item))
      setArtistas(nuevoArray)
  }

  const [canciones, setCanciones] = useState([])

  const getSong = async (search) => {
      const {data} = await axios.get(`/song/${search}&num_registros=5`)
      const nuevoArray = data.map(item => (item))
      setCanciones(nuevoArray)
  }

  const getBusqueda = async (search) => {
      await getArtist(search)
      await getSong(search)
      await Logger(token, 'search', search)
  }

  // ----- Obtencion de artista o cancion especifica
  const [cancionElegida, setCancionElegida] = useState({})
  const [artistaElegido, setArtistaElegido] = useState({})

  const Eleccion = async (path, id) => {
    if(path === '/song/'){
      const {data} = await axios.get(`/song/one${id}`)
      setCancionElegida(data)
      await Logger(token, 'song', id)
    }
    else if(path === '/artist/'){
      const {data} = await axios.get(`/artist/one${id}`)
      setArtistaElegido(data)
      await Logger(token, 'artist', id)
    }

  }

  // ----- Helpers de obtencion de instrumento
  const [cualInstrumento, setCualInstrumento] = useState('')

  const QInstrumento = (instru) => {
    setCualInstrumento(instru)
  }

  // ----- Helpers de collapse
  const [colapsar, setColapsar] = useState(false)

  const Colapse = () => {
    setColapsar(!colapsar)
    setCookie("nav", String(!colapsar), cookieOptions)
  }

  // ----- Helper de scrolling
  const [scroll,setScroll] = useState(false)

  const Scrolling = () => {
    setScroll(!scroll)
  }

  // ----- Helper de acordes
  const [acordes,setAcordes] = useState(false)

  const MostrarAcordes = () => {
    setAcordes(!acordes)
  }

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
    setPersonalize({
    ...personalize,
    'color': e
    })
    setCookie("colorAcorde", e, cookieOptions)
  }
  // Color de fuente
  const VarFuente = (e) => {
    setPersonalize({
    ...personalize,
    'font': e
    })
    setCookie("colorFuente", e, cookieOptions)
  }
  // Tipografia
  const VarTipo = (e) => {
    setPersonalize({
    ...personalize,
    'fontFamily': e
    })
    setCookie("tipografia", e, cookieOptions)
  }
  // Tamano de fuente
  const VarSize = (e) => {
    setPersonalize({
    ...personalize,
    'fontSize': e+'rem',
    'titleFontSize': e+0.5+'rem'
    })
    setCookie("tamano", String(e), cookieOptions)
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
    setCookie("colorAcorde", 'inherit', cookieOptions)
    setCookie("colorFuente", 'inherit', cookieOptions)
    setCookie("tipografia", 'inherit', cookieOptions)
    setCookie("tamano", String(1), cookieOptions)
  }

  // Tema global de usuario
  const [temaInterfaz, setTemaInterfaz] = useState('noche')

  const cambiarTema = useCallback((e) => {
    if(e === 'dia'){
      document.documentElement.style.setProperty('--background-app', 'hsl(0, 0%, 86%)')
      document.documentElement.style.setProperty('--background-nav', 'hsl(0, 0%, 94%)')
      document.documentElement.style.setProperty('--inicio-color', 'hsl(0, 0%, 82%)')
      document.documentElement.style.setProperty('--color-default', 'hsl(0, 0%, 30%)')
    }else if(e === 'noche'){
      document.documentElement.style.setProperty('--background-app', 'hsl(0, 0%, 9%)')
      document.documentElement.style.setProperty('--background-nav', 'hsl(0, 0%, 7%)')
      document.documentElement.style.setProperty('--inicio-color', 'hsl(0, 0%, 13%)')
      document.documentElement.style.setProperty('--color-default', 'hsl(0, 0%, 70%)')
    }else{
      return alert('Error en el tema seleccionado')
    }
    setTemaInterfaz(e)
    setCookie("tema", e, cookieOptions)
  },[setCookie, cookieOptions])

  // --- Obtencion de cookies o set por default
  useEffect(() => {
    if(init){
      if(cookies){
        const ctam = parseFloat(cookies.tamano)
        const cnav = (cookies.nav === 'true')
        setPersonalize({
        'font': cookies.colorFuente,
        'color': cookies.colorAcorde,
        'fontFamily': cookies.tipografia,
        'fontSize': ctam+'rem',
        'titleFontSize': ctam+0.5+'rem'
        })
        cambiarTema(cookies.tema)
        setColapsar(cnav)
      }else{
        setCookie("colorAcorde", 'inherit', cookieOptions)
        setCookie("colorFuente", 'inherit', cookieOptions)
        setCookie("tipografia", 'inherit', cookieOptions)
        setCookie("tamano", String(1), cookieOptions)
        setCookie("nav", String(false), cookieOptions)
        setCookie("tema", 'noche', cookieOptions)
      }
    }
  }, [cookies, setCookie, cookieOptions, cambiarTema])

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

  const GetUser = async (token) => {
    const {data} = await axios.get(`/user/user_token?token=${token}`)
    setUser(data.data)
  }

  // ----- Eliminacion de sesion de usuario
  const DelUserSession = () => {
    setUser({})
    delToken()
  }

  // ----- Editar Usuario
  const EditarUsuario = async (updated_data) => {
    const {data} = await axios.patch(`/user/edit/${user.id}`, JSON.stringify(updated_data))
    return data
  }

  // ----- Eliminar Usuario
  const SoftDelUser = async (credentials) => {
    const {data} = await axios.patch(`/user/set_eliminated/${user.id}?is_eliminated=true`, JSON.stringify(credentials))
    return data
  }

  // ----- Inicio con Google
  const GoogleIn = async (gtoken) => {
    const {data} = await axios.get(`/user/google?gtoken=${gtoken}`)
    return data
  } 

  // ----- Auxiliares de animacion del navBar
  const [colapsado, setColapsado] = useState(false)
  const colapseNavBar = useRef(null)

  const Collapsed = () => {
    setColapsado(!colapsado)
  }

  return (
      <div className='container-fluid' id='App' style={styles}>
        <Router>
          <div className='row'>
            {
              colapsado &&
              (
                <div className='col-1 py-0' id='NavContract'>
                  <NavContract Colapse={Colapse} Collapsed={Collapsed} />
                </div>
              )
            }
            <CSSTransition
              in={!colapsar}
              nodeRef={colapseNavBar}
              classNames="expand-nav"
              timeout={200}
              unmountOnExit
              onExited={Collapsed}>
                <div ref={colapseNavBar} className='col-auto col-lg-3 py-0' id='NavExpand'>
                  <NavExpand Colapse={Colapse}/>
                </div>
            </CSSTransition>
            
            <div className='col'>
              <Switch>
                <Route path='/song/'>
                  <div className='row'>

                    <div className='col col-md-9 col-xl'>
                      <Busqueda getBusqueda={getBusqueda} />
                      <Song Eleccion={Eleccion} 
                      scroll={scroll} 
                      cualInstrumento={cualInstrumento} 
                      acordes={acordes} 
                      Scrolling={Scrolling} 
                      elegida={cancionElegida} 
                      personalize={personalize} />
                    </div>

                    <div className='col-2 col-md-3' id='MusicNav'>
                      <MusicNav scroll={scroll} acordes={acordes}
                      MostrarAcordes={MostrarAcordes} Scrolling={Scrolling} 
                      VarTipo={VarTipo} VarSize={VarSize}
                      VarFuente={VarFuente} VarAcordes={VarAcordes} 
                      personalize={personalize} ResetP={ResetP} 
                      QInstrumento={QInstrumento} />
                    </div>
                  </div>

                </Route>
                <Route path='/search/'>
                  <Busqueda getBusqueda={getBusqueda} />
                  <Resultados artistas={artistas} canciones={canciones}
                  getSong={getSong} getArtist={getArtist} />
                </Route>

                <Route path='/artist/'>
                  <Busqueda getBusqueda={getBusqueda} />
                  <Artist Eleccion={Eleccion} elegida={artistaElegido} />
                </Route>

                <Route path='/user/'>
                  <Busqueda getBusqueda={getBusqueda} />
                  <User LogUser={LogUser} SignUpUser={SignUpUser} 
                  GetUser={GetUser} SoftDelUser={SoftDelUser}
                  token={token} delToken={delToken} user={user}
                  setToken={setToken} DelUserSession={DelUserSession} 
                  EditarUsuario={EditarUsuario} GoogleIn={GoogleIn} 
                  cambiarTema={cambiarTema} temaInterfaz={temaInterfaz} />
                </Route>

                <Route exact path='/'>
                  <Busqueda getBusqueda={getBusqueda} />
                  <Inicio/>
                </Route>

                <Route path='*'>
                  <Busqueda getBusqueda={getBusqueda} />
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
