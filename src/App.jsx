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
import{
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

function App() {

  const [searchData, setSearchData] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [colapsar, setColapsar] = useState(false)
  const [scroll,setScroll] = useState(false)
  const [acordes,setAcordes] = useState(false)
  const [songUrl,setSongUrl] = useState('')
  const [songInfo,setSongInfo] = useState(null)

  //const can = require('./JSongs/Jarabe De Palo - La Flaca.json')

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
    setSearchResults([dato, searchData, ...searchResults])
    setSongUrl('')
    setSongInfo(dato)
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
                      <Busqueda datos={datos}/>
                      <Song scroll={scroll} 
                      acordes={acordes} 
                      songUrl={songUrl}
                      songInfo={songInfo}
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
                  <Busqueda datos={datos}/>
                  <Resultados searchResults={searchResults}/>
                </Route>

                <Route exact path='/'>
                  <Busqueda datos={datos}/>
                  <Inicio/>
                </Route>

                <Route path='*'>
                  <Busqueda datos={datos}/>
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
