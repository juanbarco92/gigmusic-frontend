import React, {useState} from 'react'
import propTypes from 'prop-types'
import {NavLink} from 'react-router-dom';
import '../Static/CSS/Busqueda.css';
import {ReactComponent as Buscador} from '../Static/Icons/search-icon.svg'

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



  return (
      <div className='row' id='Search-container'>
      	<div className='col'>
			<form className="input-group" id='Buscar'>
				<Buscador className='align-self-center' id='icon-search'/>
				<input type="search" 
					className="form-control align-self-center"
					id='search-bar' 
					value={search}
					required='required' 
					placeholder="Search"
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
      </div>
  );
}

Busqueda.propTypes = {
	datos: propTypes.func.isRequired
}

export default Busqueda;
