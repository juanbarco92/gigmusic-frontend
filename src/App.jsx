import React, {useState} from 'react'
import{
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import axios from 'axios'
import './App.css';
import {getToken, setToken, delToken} from './Utils/utils'
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


function App() {

  const token = getToken()
// ----- Configuracion de axios
  axios.defaults.baseURL = "http://localhost:8080/api"
  axios.defaults.headers.common['Content-type'] = 'application/json; charset=utf-8'
  axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
  axios.defaults.headers.common['Access-Control-Allow-Methods'] = '*'
  axios.defaults.headers.common['Access-Control-Allow-Headers'] = '*'
  axios.defaults.headers.common['cache-control'] = 'no-cache'

// ----- Variables de estado
  const [colapsar, setColapsar] = useState(false)
  const [scroll,setScroll] = useState(false)
  const [acordes,setAcordes] = useState(false)
  const [artistas, setArtistas] = useState([])
  const [canciones, setCanciones] = useState([])
  const [cancionElegida, setCancionElegida] = useState({})
  const [artistaElegido, setArtistaElegido] = useState({})
  const [personalize, setPersonalize] = useState({
    'font': 'inherit',
    'color': 'inherit',
    'fontFamily': 'inherit'
  })

// ----- Estilos adicionales de adaptacion
  const styles = {
    maxWidth : window.screen.width,
    maxHeight : window.screen.height
  }

// ----- Obtencion de canciones y artistas
  const getArtist = async (search?) => {
      const {data} = await axios.get(`/artist/${search}&num_registros=5`)
      const nuevoArray = data.map(item => (item))
      setArtistas(nuevoArray)
  }
  const getSong = async (search=null) => {
      const {data} = await axios.get(`/song/${search}&num_registros=5`)
      const nuevoArray = data.map(item => (item))
      setCanciones(nuevoArray)
  }

// ----- Obtencion de artista o cancion especifica
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

// ----- Login de usuario
  const LogUser = async (credentials) => {
    const {data} = await axios.post('/user/login', JSON.stringify(credentials))
    return data
  }

// ----- SignUp de usuario
  const SignUpUser = async(credentials) => {
    const {data} = await axios.post('/user', JSON.stringify(credentials))
    return data
  }

// ----- Helpers para collapse, scrolling y acordes
  const Colapse = () => {
    setColapsar(!colapsar)
  }

  const Scrolling = () => {
    setScroll(!scroll)
  }

  const MostrarAcordes = () => {
    setAcordes(!acordes)
  }

// ----- Personalizacion
  const VarAcordes = (e) => {
    setPersonalize({
    'font': personalize.font,
    'color': e,
    'fontFamily': personalize.fontFamily
    })
  }
  const VarFuente = (e) => {
    setPersonalize({
    'font': e,
    'color': personalize.color,
    'fontFamily': personalize.fontFamily
    })
  }
  const VarTipo = (e) => {
    setPersonalize({
    'font': personalize.font,
    'color': personalize.color,
    'fontFamily': e
    })
  }
// ----- Reset de Personalizacion
  const ResetP = () => {
    setPersonalize({
    'font': 'inherit',
    'color': 'inherit',
    'fontFamily': 'inherit'
    })
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
                      Scrolling={Scrolling} VarTipo={VarTipo} 
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
                  <User LogUser={LogUser} SignUpUser={SignUpUser} token={token} delToken={delToken} setToken={setToken} />
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
