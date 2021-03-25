import React from 'react'
import Slider from 'react-animated-slider'
import 'react-animated-slider/build/vertical.css'
import '../Static/CSS/Inicio.css'

const Inicio = () => {

    document.title = "GIG - Inicio"

  return (
    <div className="row" id='Inicio-container'>
    	<Slider>
	    	<div>
	    		<h2>La fLaca</h2>
	    		<img src='https://i.musicaimg.com/discos/200/25553.jpg' alt='la flaca'/>
	    	</div>
	    	<div>
	    		<h2>La Flaca</h2>
	    		<img src='https://i.musicaimg.com/discos/200/25553.jpg' alt='la flaca'/>
	    	</div>
    	</Slider>
    </div>
  );
}

export default Inicio;
