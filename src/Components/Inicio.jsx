import React from 'react'
import Busqueda from './Busqueda'
import './CSS/Inicio.css'

const Inicio = () => {

    document.title = "GIG - Inicio"

  return (
    <div className="container text-center" id='Inicio-container'>
        <h1 className='display-1'>Bienvenido/a :</h1>
        <h2>Gig Music</h2>
        <Busqueda/>
    </div>
  );
}

export default Inicio;
