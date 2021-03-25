import React from 'react'
import {NavLink} from 'react-router-dom';
import '../Static/CSS/NavExpand.css'
import logo from '../Static/Icons/logo-004@3x.png'
import inicio from '../Static/Icons/home-24-px.svg'
import descubrir from '../Static/Icons/px-24-grid-interface.svg'
import catalogo from '../Static/Icons/album-24-px.svg'
import ajustes from '../Static/Icons/px-24-settings-gear.svg'
import contraer from '../Static/Icons/px-16-block-left-collapse.svg'
import facebook from '../Static/Icons/facebook.svg'
import instagram from '../Static/Icons/instagram.svg'
import youtube from '../Static/Icons/youtube.svg'

const NavExpand = (props) => {
	
	const { Colapse } = props

  return (
	<div className='col' id='NavExpand'>
			<div>
				<img src={logo} alt='Gig' id='LogoExpand'/>
			</div>
			<div>
				<NavLink to='/' className='link-react'>
					<img src={inicio} alt='Inicio' id='Inicio'/>
					Inicio
				</NavLink>
			</div>
			<div>
				<NavLink to='/' className='link-react' >
					<img src={descubrir} alt='Descubrir' id='Descubrir'/>
					Descubrir
				</NavLink>
			</div>
			<div>
				<NavLink to='/' className='link-react'>
					<img src={catalogo} alt='Catálogo' id='Catalogo'/>
					Catálogo
				</NavLink>
			</div>
			<div>
				<NavLink to='/' className='link-react'>
					<img src={ajustes} alt='Ajustes' id='Ajustes'/>
					Ajustes
				</NavLink>
			</div>
			<div>
				<img src={facebook} alt='Gig' id='facebook'/>
				<img src={youtube} alt='Gig' id='youtube'/>
				<img src={instagram} alt='Gig' id='instagram'/>
			</div>
			<div>
				<button className='btn' onClick={Colapse} id='btn-cont'>
					<img src={contraer} alt='Contraer' id='Contraer'/>
				</button>
			</div>
	</div>  	
  );
}

export default NavExpand;
