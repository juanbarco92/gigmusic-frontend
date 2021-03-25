import React, {useState} from 'react'
import propTypes from 'prop-types'
import {NavLink} from 'react-router-dom';
import '../Static/CSS/Busqueda.css';
import buscador from '../Static/Icons/search-icon.svg'

const Busqueda = (props) => {
	
	const {datos} = props
	const [search, setSearch] = useState('')

	const onSearch = (e) => {
		setSearch(e.target.value)
	}

	const submit = (busqueda) => {
		if(busqueda !== ''){
			datos(busqueda)
		}
	}

	const bar = {
		backgroundImage: `url(${buscador})`,
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'left center',
		paddingLeft: '30px'
	}

  return (
      <div className='row' id='Search-container'>
			<form className="input-group" id='Buscar'>
				<input type="search" 
					className="form-control"
					style={bar}
					id='search-bar' 
					value={search}
					required='required' 
					placeholder="Seacrh"
					onChange={onSearch}
					onSubmit={() => submit(search)}/>
				<div className="input-group-append">
					<NavLink to='/search' className='link-react'>
						<button
						type="submit" id='search-button'
						onClick={() => submit(search)}/>
					</NavLink>
				</div>
			</form>
		
      </div>
  );
}

Busqueda.propTypes = {
	datos: propTypes.func.isRequired
}

export default Busqueda;
