import React, {useState} from 'react'
import Notas from './Notas'

function Song() {

	document.title = "Canción"

	const {metadata, canción} = require('../JSongs/andres_cepeda_cancion_rota.json');
	const estrofa = canción.map((item)=>({tipo: item.tipo, contenido: item.contenido}));
	const [mostrar,setMostrar] = useState(false)


	const mostrarDatos = () => {
		setMostrar(!mostrar)
		}

  return (
    <div className="fluid-container mt-4">
    	<div className='row'>
			<div className='col col-sm-2 mt-4'>
			</div>
	    	<div className='col bg-ligth mt-4'>
	    		<h3 id='artist'>Artista: {metadata.artista}</h3>
	    		<h4 id='song'>Canción: {metadata.canción}</h4>
	    		<p id='details'>Genero: {metadata.genero}<br/>
	    			Subgenero: {metadata.subgenero}<br/>
	    			Album: {metadata.album}<br/>
	    			Año: {metadata.año}<br/>
	    			Tonalidad: {metadata.tonalidad}<br/>
	    			Capo: {metadata.capo}</p>
	    		<button
		    		className='btn btn-info px-5 py-2 mt-3'
		    		onClick={mostrarDatos}>
		    		Ver
		    	</button>
	    	</div>
	    	<div className='col mt-4'>
	    		<ul className='list-group'>
	    			{
	    				mostrar ?
	    				(
	    					estrofa.map(item =>(
	    						<li className='list-group-item' key={item.tipo}>
	    							{item.tipo} : <br/>
	    							<ul className='list-group'>
	    								{
			    							item.contenido.map((item, index) => (
			    								<li className='list-group-item list-group-item-ligth' key={index}>
													<Notas notas={item.notas} espacio={item.espacio} />
													<div id='Letra' className='container mr-5'>
			    										{item.letra}
													</div>
			    								</li>
			    							))
		    							}
	    							</ul>
	    						</li>
	    					))
	    				)
	    				:
	    				(
	    					<span></span>
	    				)
	    			}
	    		</ul>

	    	</div>
			<div className='col col-sm-2 mt-4'>
			</div>
		</div>

    </div>
  );
}

export default Song;
