import React, {useState, useRef, useEffect} from 'react'
import {Redirect} from 'react-router-dom'
import GuitarChord from 'react-guitar-chords'
import Notas from './Songs/Notas'
import Reproductor from './Songs/Reproductor'
import {isEmpty} from '../Utils/utils'
import '../Static/CSS/Song.css'

let timer
let lineas = 0
let hOff = 0
let urlAnt = null
let estrofa

function Song(props) {
	
	// ----- Obtencion de variables de entrada
	const { scroll, Scrolling, acordes, elegida, Eleccion, personalize} = props

	// ----- Estilos adicionales de adaptacion
	const styles = {
		maxHeight : window.screen.height,
		color: personalize.font,
		fontFamily: personalize.fontFamily,
		fontSize: personalize.fontSize
	}
	const titleStyle = {
		fontSize: personalize.titleFontSize
	}

	// ----- verificacion de fin y scroll 
	const [lineasRec,setLineasRec] = useState(0)
	const [yOff,setYOff] = useState(0)
	const finCancion = useRef(null)

	const logicScroll = React.useCallback(() => {
		const offTop = finCancion.current ? finCancion.current.offsetTop : 0
		if(lineasRec + hOff <= offTop){
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
	const contenSong = useRef(null)

	const onScroll = () => {
	    setYOff(contenSong.current.scrollTop)
	    hOff = contenSong.current.offsetHeight
  	}

  	// ----- Recepcion de evento de rueda de mouse
  	const onWheel = (e) => {
  		clearTimeout(timer)
  		const yDelta = e.deltaY
  		if(yDelta >= 0){
  			setYOff(contenSong.current.scrollTop + e.deltaY)
  		}else{
  			setYOff(contenSong.current.scrollTop)
  		}
	    hOff = contenSong.current.offsetHeight
  	}

  	// ----- Obtencion de parametros desde url
	let urlPath = window.location.pathname
	let urlSearch = window.location.search

  	// Obtencion de cancion segun url
  	let can

  	if (elegida.id === urlSearch.slice(4)){
  		can = elegida
  	}else{
  		can = {}
  	}

	const {metadata, canción} = can

	// ----- Variables de control de visualizacion
  	const [load, setLoad] = useState(false)
	const [mostrar, setMostrar] = useState(false)

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

	// ----- Peticion de cancion especifica, control de visualizacion y scroll al salir
	useEffect(() => {
  		if(urlSearch !== urlAnt){
    		Eleccion(urlPath, urlSearch)
    		urlAnt = urlSearch
    	}
    	if(!urlSearch.startsWith('?id=')){
    		setMostrar(false)
	        setLoad(false)
    	}
    	setLoad(!isEmpty(can))
    	return () => {
    		setMostrar(false)
	        setLoad(false)
	        if(scroll){
	        	Scrolling()
	        }
	    }
  	}, [urlPath, urlSearch, Eleccion, can, scroll, Scrolling])

	// ----- Redireccion si no se esta pidiendo una cancion especifica
  	if(!urlSearch.startsWith('?id=')){
	    return(<Redirect to="/" />)
    }

  return (
	  <div style={styles} id='Song-Container'>
	  {
	  	mostrar ?
	  	(	
	  		<div>
		  		<div className='row justify-content-center'>

			    	<div className='col-6 mt-2' id='Cancion-Container'
			    	ref={contenSong}
			    	onScroll={onScroll}
			    	onWheel={(e) => onWheel(e)}>

			    		<h4 style={titleStyle} id='artist'>Artista: {metadata.artista}</h4>
			    		<h4 style={titleStyle} id='song'>Canción: {metadata.canción ? (metadata.canción):(metadata.cancion)}</h4>
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
				    							<h4 className='text-center' style={titleStyle}>{item.tipo}</h4>
			    							</div>
		    							</div>
		    							<ul className='list-group'>
		    								{
				    							item.contenido.map((item, index) => (
				    								<li className='list-group' key={index}>
														<Notas notas={item.notas} espacio={item.espacio} letra={item.letra} 
														colorAc={personalize.color} sizeAc={personalize.fontSize} />
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
		    				<div className='col-4 col-auto mt-2' id='Chord-Container'>
				    			<GuitarChord chordName='nota' frets={['x', 3, 0, 0, 1, 1]}/>
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
