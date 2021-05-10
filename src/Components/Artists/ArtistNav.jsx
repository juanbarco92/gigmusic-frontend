import React from 'react'
import '../../Static/CSS/Artists/ArtistNav.css'

const ArtistNav = (props) => {
	
	// ----- Obtencion de parametros de entrada
    const {navNum, canciones} = props

  return (
      <div className='container' id='ArtistNav-container'>
          {
	      		navNum === 0 &&
	      		(
	      			<div>
		      			<ul className='list-group'>
		      			{
		      				canciones.map((item, index) => (
		      					<li key={index} className='list-group mt-2'>
		      						<div className='row'>
		      							<span className='col' >
		      								{item.cancion}
		      							</span>
		      						</div>
		      					</li>
		      				))
		      			}
		      			</ul>
			      		
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
