import React, {useState} from 'react'
import './App.css';
import Song from './Components/Song'
import Inicio from './Components/Inicio'
import Resultados from './Components/Resultados'
import Busqueda from './Components/Busqueda'
import Error404 from './Components/Error404'
import{
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

function App() {

  const [searchData, setSearchData] = useState('')
  const [searchResults, setSearchResults] = useState([])

  const datos = (dato) =>{
    setSearchData(dato)
    setSearchResults([dato, 'Hola'])
  }

  return (
      <Router>
          <div className='container-fluid'>   
              <Link to='/'><h2 className='h2 text-center'>Gig Music</h2> </Link>                  
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
      </Router>
  );
}

export default App;
