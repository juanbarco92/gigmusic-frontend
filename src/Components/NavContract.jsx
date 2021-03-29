import React from 'react'
import {NavLink} from 'react-router-dom'
import '../Static/CSS/NavContract.css'
import logo from '../Static/Icons/logo@3x.png'
import {ReactComponent as Inicio} from '../Static/Icons/home-24-px.svg'
import {ReactComponent as Descubrir} from '../Static/Icons/px-24-grid-interface.svg'
import {ReactComponent as Catalogo} from '../Static/Icons/album-24-px.svg'
import {ReactComponent as Ajustes} from '../Static/Icons/px-24-settings-gear.svg'
import {ReactComponent as Expandir} from '../Static/Icons/px-16-block-right-collapse.svg'

const NavContract = (props) => {

	const { Colapse } = props

	const styles = {
    	maxHeight : window.screen.height
  	}

  return (
    <div className='col' id='NavContract' style={styles}>
			<div>
				<img src={logo} alt='Gig' id='LogoContract'/>
			</div>
			<div>
				<NavLink to='/' className='link-react' >
					<Inicio style={{fillColor: '#f24405'}} id='Inicio'/>
				</NavLink>
			</div>
			<div>
				<NavLink to='/' className='link-react' >
					<Descubrir id='Descubrir'/>
				</NavLink>
			</div>
			<div>
				<NavLink to='/' className='link-react'>
					<Catalogo id='Catalogo'/>
				</NavLink>
			</div>
			<div>
				<NavLink to='/' className='link-react'>
					<Ajustes id='Ajustes'/>
				</NavLink>
			</div>
			<div>
				<button className='btn' onClick={Colapse} id='btn-exp'>
					<Expandir id='Expandir'/>
				</button>
			</div>
	</div>  	
  );
}

export default NavContract;
