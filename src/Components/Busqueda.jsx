import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import '../Static/CSS/Busqueda.css'
import {ReactComponent as Buscador} from '../Static/Icons/search-icon.svg'

const Busqueda = (props) => {
	
	// ----- Obtencion de variables de inicio
	const {getBusqueda} = props
	
	// ----- Obtencion de valor de input
	const [search, setSearch] = useState('')
	
	const onSearch = (e) => {
		setSearch(e.target.value)
	}

	// ----- acceso a barra de direcciones
	let history = useHistory()

	// ----- Peticion de lista de canciones con valor buscado
	const onSubmit = (e) => {
		e.preventDefault()
		if(search !== ''){
			getBusqueda('?busqueda='+search)
		}
		history.push(`/search?busqueda=${search}`)
	}

  return (
      <div className='row sticky-top w-100' id='Search-container'>
      	<div className='col'>
			<form onSubmit={onSubmit}>
				<div className="input-group" id='Buscar'>
					<div className='input-group-prepend'>
						<Buscador className='align-self-center input-group-text' id='icon-search'/>
					</div>
					<input type="search" 
						className="form-control align-self-center"
						id="search-bar" 
						value={search} 
						required
						placeholder="Search"
						onChange={onSearch}/>
				</div>
				<button type="submit" id="search-button" />
			</form>
		</div>
      </div>
  );
}

export default Busqueda;
