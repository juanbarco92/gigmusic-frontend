import React, {useState} from 'react'
import './App.css';
import Song from './Components/Song'
import Inicio from './Components/Inicio'
import Resultados from './Components/Resultados'
import Busqueda from './Components/Busqueda'
import Error404 from './Components/Error404'
import NavExpand from './Components/NavExpand'
import NavContract from './Components/NavContract'
import MusicNav from './Components/MusicNav'
import Artist from './Components/Artist'
import{
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import axios from 'axios'

function App() {

// ----- Variables de estado
  const [colapsar, setColapsar] = useState(false)
  const [scroll,setScroll] = useState(false)
  const [acordes,setAcordes] = useState(false)
  const [artistas, setArtistas] = useState([])
  const [canciones, setCanciones] = useState([])
  const [cancionElegida, setCancionElegida] = useState({})
  const [artistaElegido, setArtistaElegido] = useState({})

// ----- Configuracion de axios headers
  var config = {
       headers: {
            'Content-type': 'application/json; charset=utf-8',
            'Access-Control-Allow-Origin':'*',
            'Access-Control-Allow-Methods': '*',
            'Access-Control-Allow-Headers':'*',
            'cache-control': 'no-cache'
          }
    }

// ----- Estilos adicionales de adaptacion
  const styles = {
    maxWidth : window.screen.width,
    maxHeight : window.screen.height
  }

// ----- Obtencion de canciones y artistas
  const getArtist = async (search?) => {
      const {data} = await axios.get(`/api/artist/${search}&num_registros=5`, config)
      const nuevoArray = data.map(item => (item))
      setArtistas(nuevoArray)
  }
  const getSong = async (search=null) => {
      const {data} = await axios.get(`/api/song/${search}&num_registros=5`, config)
      const nuevoArray = data.map(item => (item))
      setCanciones(nuevoArray)
  }

// ----- Obtencion de artista o cancion especifica
  const Eleccion = async (path, id?) => {
    if(path === '/song/'){
      const {data} = await axios.get(`/api/song/one${id}`, config)
      setCancionElegida(data)
    }
    else if(path === '/artist/'){
      const {data} = await axios.get(`/api/artist/one${id}`, config)
      setArtistaElegido(data)
    }
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
                      elegida={cancionElegida} />
                    </div>

                    <div className='col-3' id='MusicNav'>
                      <MusicNav scroll={scroll} 
                      MostrarAcordes={MostrarAcordes}
                      Scrolling={Scrolling} />
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
