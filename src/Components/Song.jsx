import React, {useState, useRef, useEffect} from 'react'
import GuitarChord from 'react-guitar-chords'
import Notas from './Notas'
import Reproductor from './Reproductor'
import {isEmpty} from '../Utils/utils'
import '../Static/CSS/Song.css'

let timer
let lineas = 0
let hOff = 0
let urlAnt = null
let estrofa

function Song(props) {
	
	// ----- Obtencion de variables de entrada
	let urlPath = window.location.pathname
	let urlSearch = window.location.search
	const { scroll, Scrolling, acordes, elegida, Eleccion } = props
	
	// ----- Destructuring de la cancion
	const can = elegida
	const {metadata, canción} = can

	// ----- Variables de estado
	const [load, setLoad] = useState(false)
	const [mostrar, setMostrar] = useState(false)
	const [lineasRec,setLineasRec] = useState(0)
	const [yOff,setYOff] = useState(0)
	const finCancion = useRef(null)
	const contenSong = useRef(null)

	const styles = {
		maxHeight : window.screen.height
	}

	// ----- verificacion de fin y scroll 
	const logicScroll = React.useCallback(() => {
		if(lineasRec + hOff <= finCancion.current.offsetTop){
			setLineasRec(yOff + (finCancion.current.offsetTop)/(lineas*50))
			document.getElementById('Cancion-Container').scrollTo({ 
				top: lineasRec,
				behavior: 'smooth'
			})
		}else{
			clearTimeout(timer)
			Scrolling()
			setLineasRec(yOff)
		}
	},[Scrolling, yOff, lineasRec])

	// ----- Actualizacion de posicion de scroll
	const onScroll = () => {
	    setYOff(contenSong.current.scrollTop)
	    hOff = contenSong.current.offsetHeight
  	}

  	// ----- Recepcion de evento de rueda de mouse
  	const onWheel = (e) => {
  		clearTimeout(timer)
  		setYOff(contenSong.current.scrollTop + e.deltaY)
	    hOff = contenSong.current.offsetHeight
  	}

  	// ----- Inicializacion de variables y timer luego de carga
	useEffect(() => {
		if(load === true){
			document.title = 'GIG - ' + (metadata.canción ? (metadata.canción):(metadata.cancion))
			estrofa = canción.map((item)=>({tipo: item.tipo, contenido: item.contenido}))
			lineas = 0
			estrofa.map(item => lineas += parseInt(item.contenido.length))
			lineas += estrofa.length
			setMostrar(true)
		}
		else{
			setMostrar(false)
		}
		if (scroll){
			timer = setTimeout(logicScroll, 20)
		}else{
			clearTimeout(timer)
		}
	},[scroll, logicScroll, load, canción, metadata])

	// ----- Peticion de cancion especifica y control de visualizacion
	useEffect(() => {
  		if(urlSearch !== urlAnt){
    		Eleccion(urlPath, urlSearch)
    		urlAnt = urlSearch
    	}
    	setLoad(!isEmpty(can))
    	return () => {
    		setMostrar(false)
	        setLoad(false)
	    }
  	}, [urlPath, urlSearch, Eleccion, can])

  return (
	  <div style={styles} id='Song-Container'>
	  {
	  	mostrar ?
	  	(	
	  		<div>
		  		<div className='row justify-content-center'>

			    	<div className='col-5 col-auto mt-2' id='Cancion-Container'
			    	ref={contenSong}
			    	onScroll={onScroll}
			    	onWheel={(e) => onWheel(e)}>

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
		    							<div className='row offset-1'>
				    						<div className='col col-auto' id='Intro-title'>
				    							<h4 className='text-center'>{item.tipo}</h4>
			    							</div>
		    							</div>
		    							<ul className='list-group'>
		    								{
				    							item.contenido.map((item, index) => (
				    								<li className='list-group' key={index}>
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
			    	{
		    			acordes ?
		    			(
		    				<div className='col-5 col-auto mt-2' id='Chord-Container'>
				    			<GuitarChord className='acordes-svg' chordName='nota' frets={['x', 3, 0, 0, 1, 1]}/>
				    		</div>
		    			)
		    			:
		    			(
		    				<span></span>
		    			)
		    		}
				</div>
				<div className='row sticky-bottom mt-3' >
					<div className='col' id='Reproductor-Container'>
						<Reproductor />
					</div>
				</div>
			</div>
	  	)
	  	:
	  	(
	  		<div className='row justify-content-center align-items-center mt-2'>
	  			<span className='h1'>Cargando</span>
	  		</div>
	  	)
	  }
		</div>
  );
}

export default Song;
