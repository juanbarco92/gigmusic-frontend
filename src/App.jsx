import React from 'react'
import './App.css';
import Song from './Components/Song'
import Inicio from './Components/Inicio'
import{
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

function App() {

  return (
      <Router>
          <div className='container-fluid'>
              <div className='row'>
                  <div className='col col-sm-2'>
                      <ul className='list-group list-group-horizontal'>
                          <li className='list-group-item list-group-item-info mt-3'>
                              <Link to='/'>Inicio</Link>
                          </li>
                          <li className='list-group-item list-group-item-info mt-3'>
                              <Link to='/song'>Canción</Link>
                          </li>
                      </ul>
                  </div>
              </div>
              <Switch>
                  <Route path='/song'>
                       <div className='col'>
                           <Song/>
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
