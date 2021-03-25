import React, {useState} from 'react'
import propTypes from 'prop-types'
import{Link} from 'react-router-dom';
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

  return (
      <div className='row' id='Search-container'>
      	<div className='col-xl-auto'>
			<form className="input-group" id='Buscar'>
				<Link to='/search'>
					<button className="btn" 
					type="submit" id='search-button'
					onClick={() => submit(search)}
					onSubmit={() => submit(search)}>
						<img src={buscador} alt='lupa' id='icon-search'/>
					</button>
				</Link>
				<div className="input-group-append">
					<input type="search" 
					className="form-control" 
					value={search}
					required='required' 
					placeholder="canción o artista"
					onChange={onSearch}/>
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
