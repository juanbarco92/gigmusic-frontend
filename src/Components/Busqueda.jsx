import React, {useState} from 'react'
import propTypes from 'prop-types'
import './CSS/Busqueda.css';
import{Link} from 'react-router-dom';

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
      <div className='container' id='Search-container'>
		<form className="input-group mb-3 mt-2" id='Buscar'>
			<input type="search" 
			className="form-control" 
			value={search}
			required='required' 
			placeholder="canción o artista"
			onChange={onSearch}/>
			<div className="input-group-append">
				<Link to='/search'>
					<button className="btn btn-outline-primary" 
					type="submit" onClick={() => submit(search)} 
					onSubmit={() => submit(search)}>
						<i className="fas fa-search"></i>
						<span className='ml-2'>Buscar</span>
					</button>
				</Link>
			</div>
		</form>
      </div>
  );
}

Busqueda.propTypes = {
	datos: propTypes.func.isRequired
}

export default Busqueda;
