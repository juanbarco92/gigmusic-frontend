import React, {useState} from 'react'
//import propTypes from 'prop-types'
import {NavLink} from 'react-router-dom';
import '../Static/CSS/Busqueda.css';
import {ReactComponent as Buscador} from '../Static/Icons/search-icon.svg'

const Busqueda = (props) => {
	
	const {getArtist, getSong} = props
	const [search, setSearch] = useState('')

	const onSearch = (e) => {
		setSearch(e.target.value)
	}

	const submit = (busqueda) => {
		if(busqueda !== ''){
			getArtist(busqueda)
    		getSong(busqueda)
		}
	}

  return (
      <div className='row sticky-top w-100' id='Search-container'>
      	<div className='col'>
			<form className="input-group" id='Buscar'>
				<div className='input-group-prepend'>
					<Buscador className='align-self-center input-group-text' id='icon-search'/>
				</div>
				<input type="search" 
					className="form-control align-self-center"
					id='search-bar' 
					value={search}
					required='required' 
					placeholder="Search"
					onChange={onSearch}
					onSubmit={() => submit(search)}/>
				<div className="input-group-append">
					<NavLink className='link-react' to={{
                            pathname: '/search/',
                            search: `?q=${search}`,
                            }}>
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

export default Busqueda;
