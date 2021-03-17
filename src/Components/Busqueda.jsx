import React, {useState} from 'react'
import './CSS/Busqueda.css';

const Busqueda = () => {

	const [search, setSearch] = useState('')

	const onSearch = (e) => {
		setSearch(e.target.value)
	}

  return (
      <div className='container' id='Search-container'>
		<div className="input-group mb-3 mt-2" id='Buscar'>
			<input type="search" 
			className="form-control" 
			placeholder="canción o artista"
			onChange={onSearch}/>
			<div className="input-group-append">
				<button className="btn btn-outline-primary" type="submit">Buscar</button>
			</div>
		</div>
		{search}
      </div>
  );
}

export default Busqueda;
