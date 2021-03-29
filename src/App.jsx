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
    setSearchResults([dato, ...searchResults])
  }

  return (
      <div className='container-fluid' id='App' style={styles}>
        <Router>
          <div className='row'>
            {
              colapsar ?
              (
                <NavContract Colapse={Colapse}/>
              )
              :
              (
                <NavExpand Colapse={Colapse}/>
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
                      Scrolling={Scrolling} />
                    </div>
                    <div className='col' id='MusicNav'>
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
