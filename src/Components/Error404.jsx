import React from 'react'
import '../Static/CSS/Error404.css'

const Error404 = () => {

    document.title = "GIG - 404"

  return (
    <div className="container text-center" id='E404-container'>
    	<h1 className='display-1 text-center'>404</h1>
    	<h1 className='display-1'>Pagina no encontrada</h1>
    	<h2>Sentimos las molestias por favor use la barra de busqueda o vuelva a inicio</h2>
    </div>
  );
}

export default Error404;