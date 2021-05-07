import React, { useEffect, useState } from 'react'
import '../Static/CSS/Portal.css'
import { ColAc, ColFu, SelTi } from '../Utils/utils'

const Portal = (props) => {
	
	// ----- Obtencion de funciones y propiedades iniciales
	const { method, tipo, varExt, selection } = props

	// ----- Obtiene el resultado de la seleccion
	const Seleccion = (e) => {
		varExt(e.target.value)
	}

	// ----- De que tipo es el portal
	const [metodo, setMetodo] = useState([])
	
	useEffect(() => {
		if(tipo === 'ColAc'){
			setMetodo(ColAc)
		}
		else if(tipo === 'ColFu'){
			setMetodo(ColFu)
		}
		else if(tipo === 'SelTi'){
			setMetodo(SelTi)
		}
	}, [tipo])

  return (
      <div className='container' id='Portal-container'>
      	<div className='row'>
      		<div className='col float-left w-75 py-0'>
				<select value={selection} id='Portal-Select' onChange={e => Seleccion(e)} >
					{
						metodo.map( (item, index) => (
							<option key={index} value={item.value} >{item.name}</option>
						))
					}
				</select>
      		</div>
      		<div className='col-4 float-right w-25'>
      			<button className='btn btn-danger p-0' onClick={method} >
      				<span>x</span>
      			</button>
      		</div>
      	</div>
      </div>
  );
}

export default Portal;
