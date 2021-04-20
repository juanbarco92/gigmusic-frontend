import React, {useEffect} from 'react'
import '../Static/CSS/Resultados.css'
import{NavLink} from 'react-router-dom'

let urlAnt = null

const Resultados = (props) => {

    // ----- Obtencion de variables de entrada
	const { artistas, canciones, getArtist, getSong } = props
    let url = window.location.search

    // ----- Setea titulo de la pagina
	document.title = 'GIG - Resultados de busqueda'

    // ----- Peticion de lista de canciones despues de reload
    useEffect(() => {
        if(url !== urlAnt){
            getArtist(url)
            getSong(url)
            urlAnt = url
        }
    },[getArtist, getSong, url])

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
                                <p className='text-center'>
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
                                <p className='text-center'>
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
