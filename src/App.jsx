import React, {useState} from 'react'
import './App.css';
import Song from './Components/Song'
import Inicio from './Components/Inicio'
import Resultados from './Components/Resultados'
import Busqueda from './Components/Busqueda'
import Error404 from './Components/Error404'
import NavExpand from './Components/NavExpand'
import NavContract from './Components/NavContract'
import{
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

function App() {

  const [searchData, setSearchData] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [colapsar, setColapsar] = useState(false)

  const Colapse = () => {
    setColapsar(!colapsar)
  }


  const datos = (dato) =>{
    setSearchData(dato)
    setSearchResults([dato, ...searchResults])
  }

  return (
      <div className='container-fluid' id='App'>
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
              <Busqueda datos={datos}/>
              <Switch>
                <Route path='/song/'>
                      <Song/>
                </Route>
                <Route path='/search/'>
                      <Resultados searchResults={searchResults}/>
                </Route>
                <Route exact path='/'>
                      <Inicio/>
                </Route>
                <Route path='*'>
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
