import React from 'react'
import './CSS/Resultados.css'
import{Link} from 'react-router-dom';

const Resultados = (props) => {

	const searchResults = props.searchResults

	document.title = 'GIG - Resultados de busqueda'

  return (
    <div className="container text-center" id='Resultados-container'>
    	<ul className='list-group'>
    		{
    			searchResults.map((item, index )=> (
    				<li className='list-group-item mt-3' key={index}>
	            		<Link to='/song'>{item}</Link>
	            	</li>
    			))	
            }
    	</ul>
    </div>
  );
}

export default Resultados;
