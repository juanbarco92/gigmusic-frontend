import React, {useState, useRef} from 'react'
import ReactPlayer from 'react-player'
import { useWindowScroll } from 'react-use'
import Notas from './Notas'
import '../Static/CSS/Song.css'

let timer
let lineas

function Song(props) {

	const {metadata, canción} = require('../JSongs/Jarabe De Palo - La Flaca.json');
	//const {metadata, canción} = require('../JSongs/Andrés Cepeda-Canción Rota.json');
	//const {metadata, canción} = require('../JSongs/andres_cepeda_cancion_rota.json');

	document.title = 'GIG - ' + (metadata.canción ? (metadata.canción):(metadata.cancion))

	const estrofa = canción.map((item)=>({tipo: item.tipo, contenido: item.contenido}));
	const [mostrar,setMostrar] = useState(false)

	const [scroll,setScroll] = useState(false)
	const [lineasRec,setLineasRec] = useState(0)
	const finCancion = useRef(null)
	const { y: pageYOffset } = useWindowScroll()

	const mostrarDatos = () => {
		setMostrar(!mostrar)
		lineas = 0
		estrofa.map(item => lineas += parseInt(item.contenido.length))
		lineas += estrofa.length 
	}

	const scrollObjects = () => {
		setLineasRec(pageYOffset)
		setScroll(!scroll)
	}

	const logicScroll = () => {
		console.log(finCancion.current.offsetTop)
		console.log(lineasRec)
		console.log(lineas)
		if(lineasRec <= finCancion.current.offsetTop){
			setLineasRec(pageYOffset + (finCancion.current.offsetTop)/(lineas*50))
			window.scrollTo({ 
				top: lineasRec,
				behavior: 'smooth'
			})
		}else{
			clearTimeout(timer)
			setScroll(false)
			setLineasRec(pageYOffset)
		}
	}

  return (
    	<div className='row'>
	    	<div className='col-sm-auto'>
				<div className='row'>
					<div className='colsm-auto'>
			    		<h3 id='artist'>Artista: {metadata.artista}</h3>
			    		<h4 id='song'>Canción: {metadata.canción ? (metadata.canción):(metadata.cancion)}</h4>
			    		<p id='details'>Género: {metadata.genero ? (metadata.genero):(metadata.género)}<br/>
			    			Subgénero: {metadata.subgenero ? (metadata.subgenero):(metadata.subgénero)}<br/>
			    			Álbum: {metadata.album ? (metadata.album):(metadata.álbum)}<br/>
			    			Año: {metadata.año}<br/>
			    			Tonalidad: {metadata.tonalidad}<br/>
			    			Capo: {metadata.capo}</p>
			    		<button
				    		className='btn btn-info px-5 py-2 mt-3'
				    		onClick={mostrarDatos}>
				    		Ver
				    	</button>
				    	<ReactPlayer
				          url='https://www.youtube.com/watch?v=r2g0pM3PMNQ'
				          className='react-player mt-5'
				          playing={false}
				          controls={true}
				          width='100%'
				          height='100%'
				        />
					</div>
				</div>
	    	</div>
	    	<div className='col-sm-auto'>
	    		<ul className='list-group' id='Cancion'>
	    			{
	    				mostrar ?
	    				(
	    					estrofa.map((item, index) =>(
	    						<li className='list-group' key={index}>
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
	    			<div ref={finCancion} >
	    			</div>
	    		</ul>
	    	</div>
	    	<div className='col'>
	    		{
	    			mostrar ?
	    			(
			    		<div>
			    			<button
			    			className="cursor-pointer text-center" 
			    			onClick={scrollObjects}
			    			id='scroll-btn'>
			    				<i className="fas fa-angle-double-down" id='icon-scroll'>
			    				</i>
			    			</button>
			    			<div style={{display: 'none'}}>
				    			{
				    				scroll ?
				    				(
										timer = setTimeout(logicScroll, 50)
				    				)
				    				:
				    				(
				    					clearTimeout(timer)
				    				)
				    			}
			    			</div>
			    		</div>
		    		)
		    		:
		    		(
		    			<span></span>
		    		)
		    	}
	    	</div>
		</div>
  );
}

export default Song;
