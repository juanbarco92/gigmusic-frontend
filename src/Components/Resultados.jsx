import React from 'react'
import './CSS/Resultados.css'
import{Link} from 'react-router-dom';

const Resultados = (props) => {

	document.title = 'GIG - Resultados de busqueda'

  return (
    <div className="container text-center" id='Resultados-container'>
    	<ul className='list-group'>
    		<li className='list-group-item mt-3'>
            	<Link to='/song'>Canción</Link>
            </li>
    	</ul>
    </div>
  );
}

export default Resultados;
