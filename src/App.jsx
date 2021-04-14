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

  const [searchData, setSearchData] = useState(null)
  const [colapsar, setColapsar] = useState(false)
  const [scroll,setScroll] = useState(false)
  const [acordes,setAcordes] = useState(false)
  const [artistas, setArtistas] = useState([])
  const [canciones, setCanciones] = useState([])

  //const can = require('./JSongs/Jarabe De Palo - La Flaca.json')

  const getArtist = async (search?, bus=false) => {
      console.log(search)
      const {data} = bus ? (await axios.get(`/api/artists/?search=${search}`)):(await axios.get(`/api/artists/`))
      console.log(data)
      const nuevoArray = data.map(item => (item))
      setArtistas(nuevoArray)
  }
  const getSong = async (search=null, bus=false) => {
      console.log(search)
      const {data} = bus ? (await axios.get(`/api/songs/?search=${search}`)):(await axios.get(`/api/songs/`))
      const nuevoArray = data.map(item => (item))
      console.log(data)
      setCanciones(nuevoArray)
  }

  const styles = {
    maxWidth : window.screen.width,
    maxHeight : window.screen.height
  }

  const Colapse = () => {
    setColapsar(!colapsar)
  }

  const Scrolling = () => {
    setScroll(!scroll)
  }

  const MostrarAcordes = () => {
    setAcordes(!acordes)
  }

  const datos = (dato) =>{
    setSearchData(dato)
    //setSearchResults([dato, searchData, ...searchResults])
    //setSongUrl('')
    //setSongInfo(dato)
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
                      <Song scroll={scroll} 
                      acordes={acordes} 
                      Scrolling={Scrolling} />
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
                  <Resultados artistas={artistas} canciones={canciones} />
                </Route>

                <Route path='/artist/'>
                  <Busqueda getSong={getSong} getArtist={getArtist} />
                  <Artist />
                </Route>

                <Route exact path='/'>
                  <Busqueda getSong={getSong} getArtist={getArtist} />
                  <Inicio/>
                </Route>

                <Route path='*'>
                  <Busqueda getSong={getSong} getArtist={getArtist} />
                  <Error404/>
                  <div>
                  <ul>
                    {
                      artistas.map((item, index) => (
                        <li key={index}>
                          <span className='h4'>{item.nombre}</span>
                        </li>
                      ))
                    }
                  </ul>
                  </div>
                  <div>
                  <ul>
                    {
                      canciones.map((item, index) => (
                        <li key={index}>
                                <span className='h4'>{JSON.parse(item.metadata).artista}</span>
                        </li>
                      ))
                    }
                  </ul>
                  </div>
                </Route>
              </Switch>
            </div>
          </div>
        </Router>
      </div>   
  );
}

export default App;
