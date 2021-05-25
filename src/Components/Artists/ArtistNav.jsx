import React from 'react'
import '../../Static/CSS/Artists/ArtistNav.css'
import Discografia from './Discografia'

const ArtistNav = (props) => {
	
	// ----- Obtencion de parametros de entrada
    const {navNum, canciones} = props

  return (
      <div className='container-fluid' id='ArtistNav-container'>
          {
	      		navNum === 0 &&
	      		(
	      			<div>
	      			{
	      				!(canciones.length === 0) ?
	      				(
	      					<div className='mt-2 text-center'>
	      						<Discografia canciones={canciones} />
	      					</div>
	      				)
	      				:
	      				(
	      					<div className='mt-2 text-center'>
	      						<span>No hay canciones</span>
	      					</div>
	      				)
	      			}	
			      	</div>
	      		)
	      	}
	      	{
	      		navNum === 1 &&
	      		(
	      			<div>
			      		<span> 1 </span>
			      	</div>
	      		)
	      	}
	      	{
	      		navNum === 2 &&
	      		(
	      			<div>
			      		<span> 2 </span>
			      	</div>
	      		)
	      	}
	      	{
	      		navNum === 3 &&
	      		(
	      			<div>
			      		<span> 3 </span>
			      	</div>
	      		)
	      	}
      </div>
  );
}

export default ArtistNav;
