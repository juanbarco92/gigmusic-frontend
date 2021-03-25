import React from 'react'
import '../Static/CSS/NavExpand.css'
import logo from '../Static/Icons/logo-004@3x.png'
import inicio from '../Static/Icons/home-24-px.svg'
import descubrir from '../Static/Icons/px-24-grid-interface.svg'
import catalogo from '../Static/Icons/album-24-px.svg'
import ajustes from '../Static/Icons/px-24-settings-gear.svg'
import contraer from '../Static/Icons/px-16-block-left-collapse.svg'

const NavExpand = (props) => {

	const { Colapse } = props

  return (
	<div className='row' id='NavExpand'>
		<div className='col'>
			<div>
				<img src={logo} alt='Gig' id='LogoExpand'/>
			</div>
			<div>
				<img src={inicio} alt='Inicio' id='Inicio'/>
				Inicio
			</div>
			<div>
				<img src={descubrir} alt='Descubrir' id='Descubrir'/>
				Descubrir
			</div>
			<div>
				<img src={catalogo} alt='Catálogo' id='Catalogo'/>
				Catálogo
			</div>
			<div>
				<img src={ajustes} alt='Ajustes' id='Ajustes'/>
				Ajustes
			</div>
			<div>
				<button className='btn' onClick={Colapse} id='btn-cont'>
					<img src={contraer} alt='Contraer' id='Contraer'/>
				</button>
			</div>
		</div>
	</div>  	
  );
}

export default NavExpand;
