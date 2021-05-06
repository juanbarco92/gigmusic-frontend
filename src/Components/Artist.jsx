import React, {useState, useEffect} from 'react'
import {Redirect} from 'react-router-dom'
import '../Static/CSS/Artist.css'
import ArtistNav from './ArtistNav'
import {isEmpty} from '../Utils/utils'

let urlAnt = null

const Artist = (props) => {

	// ----- Estilos adicionales de adaptacion
	const styles = {
      maxHeight : window.screen.height
    }

	// ----- Obtencion de variables de inicio
	const {elegida, Eleccion} = props

    // ----- Funcionamiento de navbar
    const [navsClass, setNavClass] = useState(['nav-link activado','nav-link','nav-link','nav-link'])
    const [navNum, setNavNum] = useState(0)
    const [load, setLoad] = useState(false)

    const tabClick = (e) => {
    	setNavNum(e)
    	if(e===0){
    		setNavClass(['nav-link activado','nav-link','nav-link','nav-link'])
    	}
    	if(e===1){
    		setNavClass(['nav-link','nav-link activado','nav-link','nav-link'])
    	}
    	if(e===2){
    		setNavClass(['nav-link','nav-link','nav-link activado','nav-link'])
    	}
    	if(e===3){
    		setNavClass(['nav-link','nav-link','nav-link','nav-link activado'])
    	}
    }

    // ----- Obtencion de parametros desde url
    let urlPath = window.location.pathname
	let urlSearch = window.location.search

	// Obtencion de artista segun url
  	let artista

  	if (elegida.id === urlSearch.slice(4)){
  		artista = elegida
  	}else{
  		artista = {}
  	}

  	// ----- Peticiones al servidor y control de visualizacion
    useEffect(() => {
    	if(urlSearch !== urlAnt){
    		Eleccion(urlPath, urlSearch)
    		urlAnt = urlSearch
    	}
    	if(!urlSearch.startsWith('?id=')){
	        setLoad(false)
    	}
    	setLoad(!isEmpty(artista))
      return () => {
        setLoad(false)
      }
    }, [urlPath, urlSearch, Eleccion, artista])

    // ----- Define el titulo de la pagina
	document.title = 'GIG - ' + artista.nombre

	if(!urlSearch.startsWith('?id=')){
	    return(<Redirect to="/" />)
    }

  return (
    <div style={styles} id='Artist-container'>
    {
    	load ?
    	(
    		<div>
	    		<div className="row justify-content-center align-items-center mt-2">
		        	<div className='col-10'>
			        	<img className='card-image accent img-fluid w-100' src='https://okdiario.com/img/2020/06/09/la-flaca-jarabe-de-palo-655x368.jpg' alt='' />
			        	<div className='card-img-overlay d-flex p-0'>
				        	<div className='row align-items-end w-100'>
					        	<div className='col'>
					        		<div className='row ml-5 mr-5'>
					        			<div className='col-auto'>
					        				<img className='img-fluid artist-photo' src='https://direct.rhapsody.com/imageserver/images/Art.8229/356x237.jpg' alt='artist' />
					        			</div>
					        			<div className='col ml-4 artist-description'>
					        				<span className='row  h1'>{artista.nombre}</span>
					        				<span className='row h5'>35 canciones &middot; 10,257.000 seguidores</span>
					        				<div className='row'>
					        					<button className='btn mr-1 px-4 btn-artist-sound'>
					        						Rockear
					        					</button>
					        					<button className='btn ml-1 px-4 btn-artist-follow'>
					        						Seguir
					        					</button>
					        				</div>
					        			</div>
					        		</div>
					        		<div className='row navbar mt-2'>
					        			<div className='col'>
					        				<ul className='nav nav-fill ml-5 mr-5' role="tablist">
						        				<li className='nav-item' >
							        				<button 
							        				onClick={() => tabClick(0)}
							        				id='tabDiscografia' 
							        				className={navsClass[0]} role="tab" >
							        					Discografia
							        				</button>
						        				</li>
						        				<li className='nav-item' >
							        				<button 
							        				onClick={() => tabClick(1)}
							        				id='tabPopulares' 
							        				className={navsClass[1]} role="tab" >
							        					Canciones Populares
							        				</button>
						        				</li>
						        				<li className='nav-item' >
							        				<button 
							        				onClick={() => tabClick(2)}
							        				id='tabSimilares' 
							        				className={navsClass[2]} role="tab" >
							        					Artistas Similares
							        				</button>
						        				</li>
						        				<li className='nav-item' >
							        				<button 
							        				onClick={() => tabClick(3)}
							        				id='tabBiografia' 
							        				className={navsClass[3]} role="tab" >
							        					Biografia
							        				</button>
						        				</li>
					        				</ul>
					        			</div>
					        		</div>
					        	</div>
				        	</div>
			        	</div>
			        </div>
		      	</div>
		      	<div className='row justify-content-center align-items-center'>
			      		<div className='col-10'>
		      				<ArtistNav canciones={artista.canciones} navNum={navNum} />
		      			</div>
		      	</div>
	      	</div>
        )
        :
        (
        	<div className="row justify-content-center align-items-center mt-2">
	        	<span className='h1'>Cargando</span>
        	</div>
        )
	}     
    </div>
  );
}

export default Artist;
