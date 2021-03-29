import React from 'react'
import '../Static/CSS/Resultados.css'
import{NavLink} from 'react-router-dom';

const Resultados = (props) => {

	const searchResults = props.searchResults

	document.title = 'GIG - Resultados de busqueda'

  return (
    <div className="row" id='Resultados-container'>
        <div className='col'>
        	<ul className='list-group'>
        		{
        			searchResults.map((item, index )=> (
        				<li className='list-search mt-3' key={index}>
    	            		<NavLink className='link-react' to='/song'>{item}</NavLink>
    	            	</li>
        			))	
                }
        	</ul>
        </div>
    </div>
  );
}

export default Resultados;
