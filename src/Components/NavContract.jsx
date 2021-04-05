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
  	<div style={styles}>
	  	<div className='row justify-content-center w-100' id='NavContract'>
	    	<div className='col-6'>
				<div className='row'>
				<div className='col'>
					<img src={logo} alt='Gig' id='LogoContract'/>
				</div>
				</div>
				<div className='row'>
					<div className='col link-react-nav'>
						<NavLink to='/' className='link-react' >
							<Inicio id='Inicio'/>
						</NavLink>
					</div>
				</div>
				<div className='row'>
					<div className='col link-react-nav'>
						<NavLink to='/' className='link-react' >
							<Descubrir id='Descubrir'/>
						</NavLink>
					</div>
				</div>
				<div className='row'>
					<div className='col link-react-nav'>
						<NavLink to='/' className='link-react'>
							<Catalogo id='Catalogo'/>
						</NavLink>
					</div>
				</div>
				<div className='row'>
					<div className='col link-react-nav'>
						<NavLink to='/' className='link-react'>
							<Ajustes id='Ajustes'/>
						</NavLink>
					</div>
				</div>
				<div className='row justify-content-center' id='Expandir'>
					<div className='col'>
						<button className='btn' onClick={Colapse}>
							<Expandir/>
						</button>
					</div>
				</div>
			</div>
		</div> 
	</div>   	
  );
}

export default NavContract;
