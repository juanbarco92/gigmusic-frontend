import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import '../Static/CSS/Inicio.css'

const Inicio = () => {

    document.title = "GIG - Inicio"

  return (
    <div className="row justify-content-center" id='Inicio-container'>
	    <div className='col d-flex'>
			<Carousel axis='vertical' 
	    	autoplay={true} 
	    	showArrows={false} 
	    	infiniteLoop={true} 
	    	showThumbs={false} 
	    	verticalSwipe='natural' 
	    	emulateTouch={true} 
	    	useKeyboardArrows={true} 
	    	showStatus={false} 
	    	>
				<div>
					<img src="https://okdiario.com/img/2020/06/09/la-flaca-jarabe-de-palo-655x368.jpg" alt='' />
					<p className="legend">Estreno exclusivo: La Flaca</p>
				</div>
				<div>
					<img src="https://imagenes.20minutos.es/files/image_656_370/uploads/imagenes/2020/06/09/todo-comenzo-con-la-flaca.jpeg" alt='' />
					<p className="legend">La Flaca</p>
				</div>
			</Carousel>
		</div>
    </div>
  );
}

export default Inicio;
