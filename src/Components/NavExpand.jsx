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
  	<div style={styles}>
		<div className='row justify-content-center w-100' id='NavExpand'>
			<div className='col-8'>
				<div className='row'>
					<div className='col'>
						<img src={logo} alt='Gig' id='LogoExpand'/>
					</div>
				</div>
				<div className='row'>
					<div className='col link-react-nav'>
						<NavLink to='/' className='link-react' >
							<Inicio id='Inicio'/>
							<span className='ml-3'>Inicio</span>
						</NavLink>
					</div>
				</div>
				<div className='row'>
					<div className='col link-react-nav'>
						<NavLink to='/' className='link-react' >
							<Descubrir id='Descubrir'/>
							<span className='ml-3'>Descubrir</span>
						</NavLink>
					</div>
				</div>
				<div className='row'>
					<div className='col link-react-nav'>
						<NavLink to='/' className='link-react'>
							<Catalogo id='Catalogo'/>
							<span className='ml-3'>Catálogo</span>
						</NavLink>
					</div>
				</div>
				<div className='row'>
					<div className='col link-react-nav'>
						<NavLink to='/' className='link-react'>
							<Ajustes id='Ajustes'/>
							<span className='ml-3'>Ajustes</span>
						</NavLink>
					</div>
				</div>
				<div className='row align-items-center justify-content-around'>
					<div className='col-4 text-center'>
						<Facebook id='facebook'/>
					</div>
					<div className='col-4 text-center'>
						<Youtube id='youtube'/>
					</div>
					<div className='col-4 text-center'>
						<Instagram id='instagram'/>
					</div>
				</div>
				<div className='row justify-content-end'>
					<div className='col-4' id='Contraer'>
					<button className='btn' onClick={Colapse}>
						<Contraer/>
					</button>
					</div>
				</div>
			</div>
		</div> 
	</div>  	
  );
}

export default NavExpand;
