import React, {useState, useRef, useEffect} from 'react'
import GuitarChord from 'react-guitar-chords'
import Notas from './Notas'
import '../Static/CSS/Song.css'

let timer
let lineas = 0
let hOff = 0

function Song(props) {

	const {metadata, canción} = require('../JSongs/Jarabe De Palo - La Flaca.json');
	//const {metadata, canción} = require('../JSongs/Andrés Cepeda-Canción Rota.json');
	//const {metadata, canción} = require('../JSongs/andres_cepeda_cancion_rota.json');

	document.title = 'GIG - ' + (metadata.canción ? (metadata.canción):(metadata.cancion))

	const estrofa = canción.map((item)=>({tipo: item.tipo, contenido: item.contenido}));

	const [scroll,setScroll] = useState(false)
	const [lineasRec,setLineasRec] = useState(0)
	const [yOff,setYOff] = useState(0)
	const finCancion = useRef(null)
	const contenSong = useRef(null)

	const scrollObjects = () => {
		setLineasRec(yOff)
		setScroll(!scroll)
	}

	const logicScroll = () => {
		if(lineasRec + hOff <= finCancion.current.offsetTop){
			setLineasRec(yOff + (finCancion.current.offsetTop)/(lineas*50))
			document.getElementById('Cancion-Container').scrollTo({ 
				top: lineasRec,
				behavior: 'smooth'
			})
		}else{
			clearTimeout(timer)
			setScroll(false)
			setLineasRec(yOff)
		}
	}

	const onScroll = () => {
	    setYOff(contenSong.current.scrollTop)
	    hOff = contenSong.current.offsetHeight
  }

	useEffect(() => {
		lineas = 0
		estrofa.map(item => lineas += parseInt(item.contenido.length))
		lineas += estrofa.length 
	},[estrofa])

  return (
	  <div>
	    	<div className='row' id='Song-Container'>

	    		<div className='col mt-2' id='Chord-Container'>
	    			<GuitarChord chordName='nota' frets={['x', 3, 0, 0, 1, 1]}/>
	    		</div>

		    	<div className='col mt-2' id='Cancion-Container'
		    	ref={contenSong}
		    	onScroll={onScroll}>

		    		<h3 id='artist'>Artista: {metadata.artista}</h3>
		    		<h4 id='song'>Canción: {metadata.canción ? (metadata.canción):(metadata.cancion)}</h4>
		    		<p id='details'>Género: {metadata.genero ? (metadata.genero):(metadata.género)}<br/>
		    			Subgénero: {metadata.subgenero ? (metadata.subgenero):(metadata.subgénero)}<br/>
		    			Álbum: {metadata.album ? (metadata.album):(metadata.álbum)}<br/>
		    			Año: {metadata.año}<br/>
		    			Tonalidad: {metadata.tonalidad}<br/>
		    			Capo: {metadata.capo}</p>
		    		<ul className='list-group' id='Cancion'>
		    			{
	    					estrofa.map((item, index) =>(
	    						<li className='list-group' key={index}>
	    							<span className='h4 text-center' id='Intro-title'>{item.tipo}</span><br/>
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
		    			}
		    			<div ref={finCancion} >
		    			</div>
		    		</ul>
		    	</div>

		    	<div className='col'>
		    		{
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
										timer = setTimeout(logicScroll, 20)
				    				)
				    				:
				    				(
				    					clearTimeout(timer)
				    				)
				    			}
			    			</div>
			    		</div>
			    	}
		    	</div>
		    	
			</div>
			<div className='row'>
			</div>
		</div>
  );
}

export default Song;
