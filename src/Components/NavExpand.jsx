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
	
	// ----- Obtencion de parametros de entrada
	const { Colapse } = props

	// ----- Estilos personalizados de adaptacion
	const styles = {
    	maxHeight : window.screen.height
  	}

  return (
  	<div style={styles}>
		<div className='row justify-content-center w-100' id='NavExpand'>
			<div className='col col-lg-9'>
				<div className='row'>
					<div className='col-10 align-self-center'>
						<img src={logo} alt='Gig' id='LogoExpand'/>
					</div>
				</div>
				<div className='row justify-content-center'>
					<NavLink to='/' className='link-react-nav w-100' >
						<div className='col-10 align-self-center'>
							<Inicio id='Inicio'/>
							<span className='ml-3'>Inicio</span>
						</div>
					</NavLink>
				</div>
				<div className='row justify-content-center'>
					<NavLink to='/artist' className='link-react-nav w-100' >
						<div className='col-10 align-self-center'>
							<Descubrir id='Descubrir'/>
							<span className='ml-3'>Descubrir</span>
						</div>
					</NavLink>
				</div>
				<div className='row justify-content-center'>
					<NavLink to='/song' className='link-react-nav w-100' >
						<div className='col-10 align-self-center'>
							<Catalogo id='Catalogo'/>
							<span className='ml-3'>Catálogo</span>
						</div>
					</NavLink>
				</div>
				<div className='row justify-content-center'>
					<NavLink to='/user' className='link-react-nav w-100' >
						<div className='col-10 align-self-center'>
							<Ajustes id='Ajustes'/>
							<span className='ml-3'>Ajustes</span>
						</div>
					</NavLink>
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
						<Contraer className='con-exp'/>
					</button>
					</div>
				</div>
			</div>
		</div> 
	</div>  	
  );
}

export default NavExpand;
