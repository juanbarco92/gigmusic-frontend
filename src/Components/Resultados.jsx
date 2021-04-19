import React from 'react'
import '../Static/CSS/Resultados.css'
import{NavLink} from 'react-router-dom';

const Resultados = (props) => {

	const { artistas, canciones, CAElegida } = props

	document.title = 'GIG - Resultados de busqueda'

    const Elegida = (item, estado) => {
        CAElegida(item, estado)
    }

  return (
    <div className="row" id='Resultados-container'>
        <div className='col'>
            <span className='h3'>Artistas</span>
        	<ul className='list-group'>
        		{
        			artistas.map((item, index )=> (
        				<li className='list-search link-react-results mt-3' key={index}>
    	            		<NavLink className='link-react' to={{
                            pathname: '/artist/',
                            search: `id=${item.id}`,
                            }}>
                                <p onClick={Elegida(item, false)} className='text-center'>
                                    {item.nombre + ' - ' + item.genero}
                                </p>
                            </NavLink>
    	            	</li>
        			))	
                }
        	</ul>
            <span className='h3'>Canciones</span>
            <ul className='list-group'>
                {
                    canciones.map((item, index )=> (
                        <li className='list-search link-react-results mt-3' key={index}>
                            <NavLink className='link-react' to={{
                            pathname: '/song/',
                            search: `id=${item.id}`,
                            }}>
                                <p onClick={Elegida(item, true)} className='text-center'>
                                    {item.metadata.artista + ' - ' + item.metadata.cancion}
                                </p>
                            </NavLink>
                        </li>
                    ))  
                }
            </ul>
        </div>
    </div>
  );
}

export default Resultados;
