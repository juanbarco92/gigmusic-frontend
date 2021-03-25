import React from 'react'
import '../Static/CSS/Resultados.css'
import{Link} from 'react-router-dom';

const Resultados = (props) => {

	const searchResults = props.searchResults

	document.title = 'GIG - Resultados de busqueda'

  return (
    <div className="row" id='Resultados-container'>
        <div className='col'>
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
    </div>
  );
}

export default Resultados;
