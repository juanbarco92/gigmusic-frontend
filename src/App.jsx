import React, {useState} from 'react'
import './App.css';
import Song from './Components/Song'
import Inicio from './Components/Inicio'
import Resultados from './Components/Resultados'
import Busqueda from './Components/Busqueda'
import{
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

function App() {

  const [searchData, setSearchData] = useState('Hhhh')

  const datos = (dato) =>{
    console.log(dato)
    setSearchData(dato)
  }

  return (
      <Router>
          <div className='container-fluid'>   
              <Link to='/'><h2 className='h2 text-center'>Gig Music</h2> </Link>                  
              <Busqueda datos={datos}/>
              <Switch>
                  <Route path='/song/'>
                       <div className='col'>
                           <Song/>
                       </div>
                  </Route>
                  <Route path='/search/'>
                       <div className='col'>
                           <Resultados/>
                       </div>
                  </Route>
                  <Route exact path='/'>
                       <div className='col'>
                           <Inicio/>
                       </div>
                  </Route>
              </Switch>
          </div>
      </Router>
  );
}

export default App;
