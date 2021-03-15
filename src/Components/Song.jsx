import React, {useState} from 'react'
import Notas from './Notas'
import './CSS/Song.css'
import ReactPlayer from 'react-player'

function Song() {

	const {metadata, canción} = require('../JSongs/Andrés Cepeda-Canción Rota.json');
	//const {metadata, canción} = require('../JSongs/andres_cepeda_cancion_rota.json');

	document.title = "Canción"

	const estrofa = canción.map((item)=>({tipo: item.tipo, contenido: item.contenido}));
	const [mostrar,setMostrar] = useState(false)


	const mostrarDatos = () => {
		setMostrar(!mostrar)
	}

  return (
    <div className="fluid-container mt-4">
    	<div className='row'>
	    	<div className='col-sm-4 bg-ligth mt-4'>
				<div className='row'>
					<div className='col-sm-2'></div>
					<div className='col list-group-item'>
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
				    	<ReactPlayer
				          url='https://www.youtube.com/watch?v=xWmZhSf_a9c'
				          className='react-player mt-5'
				          playing
				          controls='true'
				          width='100%'
				          height='100%'
				        />
					</div>
				</div>
	    	</div>
	    	<div className='col mt-4'>
	    		<ul className='list-group' id='Cancion'>
	    			{
	    				mostrar ?
	    				(
	    					estrofa.map(item =>(
	    						<li className='list-group' key={item.tipo}>
	    							<span className='h4' id='Intro-title'>{item.tipo} : </span><br/>
	    							<ul className='list-group'>
	    								{
			    							item.contenido.map((item, index) => (
			    								<li className='list-group list-group-item-ligth' key={index}>
													<Notas notas={item.notas} espacio={item.espacio} letra={item.letra}/>
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
		</div>
    </div>
  );
}

export default Song;
