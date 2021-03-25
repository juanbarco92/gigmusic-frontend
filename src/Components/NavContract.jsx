import React from 'react'
import '../Static/CSS/NavContract.css'
import logo from '../Static/Icons/logo@3x.png'
import inicio from '../Static/Icons/home-24-px.svg'
import descubrir from '../Static/Icons/px-24-grid-interface.svg'
import catalogo from '../Static/Icons/album-24-px.svg'
import ajustes from '../Static/Icons/px-24-settings-gear.svg'
import expandir from '../Static/Icons/px-16-block-right-collapse.svg'
import {NavLink} from 'react-router-dom';

const NavContract = (props) => {

	const { Colapse } = props

  return (
    <div className='col' id='NavContract'>
			<div>
				<img src={logo} alt='Gig' id='LogoContract'/>
			</div>
			<div>
				<NavLink to='/' className='link-react'>
					<img src={inicio} alt='Inicio' id='Inicio'/>
				</NavLink>
			</div>
			<div>
				<NavLink to='/' className='link-react'>
					<img src={descubrir} alt='Descubrir' id='Descubrir'/>
				</NavLink>
			</div>
			<div>
				<NavLink to='/' className='link-react'>
					<img src={catalogo} alt='Catálogo' id='Catalogo'/>
				</NavLink>
			</div>
			<div>
				<NavLink to='/' className='link-react'>
					<img src={ajustes} alt='Ajustes' id='Ajustes'/>
				</NavLink>
			</div>
			<div>
				<button className='btn' onClick={Colapse} id='btn-exp'>
					<img src={expandir} alt='Expandir' id='Expandir'/>
				</button>
			</div>
	</div>  	
  );
}

export default NavContract;
