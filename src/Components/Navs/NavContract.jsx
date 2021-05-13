import React from 'react'
import {NavLink} from 'react-router-dom'
import '../../Static/CSS/Navs/NavContract.css'
import logo from '../../Static/Icons/logo@3x.png'
import {ReactComponent as Inicio} from '../../Static/Icons/home-24-px.svg'
import {ReactComponent as Descubrir} from '../../Static/Icons/px-24-grid-interface.svg'
import {ReactComponent as Catalogo} from '../../Static/Icons/album-24-px.svg'
import {ReactComponent as Ajustes} from '../../Static/Icons/px-24-settings-gear.svg'
import {ReactComponent as Expandir} from '../../Static/Icons/px-16-block-right-collapse.svg'

const NavContract = (props) => {

	// ----- Obtencion de parametros de entrada
	const { Colapse, Collapsed } = props

	const Colapsar = () => {
		Colapse()
		Collapsed()
	}

	// ----- Definicion de estilos de adaptacion
	const styles = {
    	maxHeight : window.screen.height
  	}

  return (
  	<div style={styles}>
	  	<div className='row justify-content-center w-100' id='NavContract-container'>
	    	<div className='col col-sm-10 col-lg-6'>
				<div className='row justify-content-center'>
					<div className='col'>
						<img src={logo} alt='Gig' id='LogoContract'/>
					</div>
				</div>
				<div className='row justify-content-center'>
					<NavLink to='/' className='div-nav link-react-nav w-100' >
						<div className='col-10 align-self-center inicio-nav'>
							<Inicio id='Inicio'/>
						</div>
					</NavLink>
				</div>
				<div className='row justify-content-center'>
					<NavLink to='/artist' className='div-nav link-react-nav w-100' >
						<div className='col-10 align-self-center descubrir-nav'>
							<Descubrir id='Descubrir'/>
						</div>
					</NavLink>
				</div>
				<div className='row justify-content-center'>
					<NavLink to='/song' className='div-nav link-react-nav w-100' >
						<div className='col-10 align-self-center catalogo-nav'>
							<Catalogo id='Catalogo'/>
						</div>
					</NavLink>
				</div>
				<div className='row justify-content-center'>
					<NavLink to='/user' className='div-nav link-react-nav w-100' >
						<div className='col-10 align-self-center ajustes-nav'>
							<Ajustes id='Ajustes'/>
						</div>
					</NavLink>
				</div>
				<div className='row justify-content-end' id='Expandir'>
					<div className='col'>
						<button className='btn' onClick={Colapsar}>
							<Expandir className='con-exp'/>
						</button>
					</div>
				</div>
			</div>
		</div> 
	</div>   	
  );
}

export default NavContract;
