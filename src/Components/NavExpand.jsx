import React from 'react'
import {NavLink} from 'react-router-dom'
import '../Static/CSS/NavExpand.css'
import logo from '../Static/Icons/logo-004@3x.png'
import {ReactComponent as Inicio} from '../Static/Icons/home-24-px.svg'
import {ReactComponent as Descubrir} from '../Static/Icons/px-24-grid-interface.svg'
import {ReactComponent as Catalogo} from '../Static/Icons/album-24-px.svg'
import {ReactComponent as Ajustes} from '../Static/Icons/px-24-settings-gear.svg'
import {ReactComponent as Contraer} from '../Static/Icons/px-16-block-left-collapse.svg'
import {ReactComponent as Facebook} from '../Static/Icons/facebook.svg'
import {ReactComponent as Instagram} from '../Static/Icons/instagram.svg'
import {ReactComponent as Youtube} from '../Static/Icons/youtube.svg'

const NavExpand = (props) => {
	
	const { Colapse } = props

	const styles = {
    	maxHeight : window.screen.height
  	}

  return (
	<div className='col' id='NavExpand' style={styles}>
			<div>
				<img src={logo} alt='Gig' id='LogoExpand'/>
			</div>
			<div>
				<NavLink to='/' className='link-react' >
					<Inicio style={{fillColor: '#f24405'}} id='Inicio'/>
					Inicio
				</NavLink>
			</div>
			<div>
				<NavLink to='/' className='link-react' >
					<Descubrir id='Descubrir'/>
					Descubrir
				</NavLink>
			</div>
			<div>
				<NavLink to='/' className='link-react'>
					<Catalogo id='Catalogo'/>
					Catálogo
				</NavLink>
			</div>
			<div>
				<NavLink to='/' className='link-react'>
					<Ajustes id='Ajustes'/>
					Ajustes
				</NavLink>
			</div>
			<div>
				<Facebook id='facebook'/>
				<Youtube id='youtube'/>
				<Instagram id='instagram'/>
			</div>
			<div>
				<button className='btn' onClick={Colapse} id='btn-cont'>
					<Contraer id='Contraer'/>
				</button>
			</div>
	</div>  	
  );
}

export default NavExpand;
