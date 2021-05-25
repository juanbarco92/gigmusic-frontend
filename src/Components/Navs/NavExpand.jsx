import React from 'react'
import {NavLink} from 'react-router-dom'
import '../../Static/CSS/Navs/NavExpand.css'
import logo from '../../Static/Icons/logo-004@3x.png'
import {ReactComponent as Inicio} from '../../Static/Icons/home-24-px.svg'
import {ReactComponent as Descubrir} from '../../Static/Icons/px-24-grid-interface.svg'
import {ReactComponent as Catalogo} from '../../Static/Icons/album-24-px.svg'
import {ReactComponent as Ajustes} from '../../Static/Icons/px-24-settings-gear.svg'
import {ReactComponent as Contraer} from '../../Static/Icons/px-16-block-left-collapse.svg'
import {ReactComponent as Facebook} from '../../Static/Icons/facebook.svg'
import {ReactComponent as Instagram} from '../../Static/Icons/instagram.svg'
import {ReactComponent as Youtube} from '../../Static/Icons/youtube.svg'

const NavExpand = (props) => {
	
	// ----- Obtencion de parametros de entrada
	const { Colapse } = props

	// ----- Estilos personalizados de adaptacion
	const styles = {
    	maxHeight : window.screen.height
  	}

  return (
  	<div style={styles}>
		<div className='row justify-content-center w-100' id='NavExpand-container'>
			<div className='col col-sm-10 col-lg-9'>
				<div className='row'>
					<div className='col-10 align-self-center'>
						<img src={logo} alt='Gig' id='LogoExpand'/>
					</div>
				</div>
				<div className='row justify-content-center'>
					<NavLink to='/' className='div-nav link-react-nav w-100' >
						<div className='col align-self-center'>
							<div className='row'>
								<span className='col-3 text-center nav-col-exp'><Inicio id='Inicio'/></span>
								<span className='col ml-3 nav-col-exp'>Inicio</span>
							</div>
						</div>
					</NavLink>
				</div>
				<div className='row justify-content-center'>
					<NavLink to='/artist' className='div-nav link-react-nav w-100' >
						<div className='col align-self-center'>
							<div className='row'>
								<span className='col-3 text-center nav-col-exp'><Descubrir id='Descubrir'/></span>
								<span className='col ml-3 nav-col-exp'>Descubrir</span>
							</div>
						</div>
					</NavLink>
				</div>
				<div className='row justify-content-center'>
					<NavLink to='/song' className='div-nav link-react-nav w-100' >
						<div className='col align-self-center'>
							<div className='row'>
								<span className='col-3 text-center nav-col-exp'><Catalogo id='Catalogo'/></span>
								<span className='col ml-3 nav-col-exp'>Catálogo</span>
							</div>
						</div>
					</NavLink>
				</div>
				<div className='row justify-content-center'>
					<NavLink to='/user' className='div-nav link-react-nav w-100' >
						<div className='col align-self-center'>
							<div className='row'>
								<span className='col-3 text-center nav-col-exp'><Ajustes id='Ajustes'/></span>
								<span className='col ml-3 nav-col-exp'>Ajustes</span>
							</div>
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

export default React.memo(NavExpand);
