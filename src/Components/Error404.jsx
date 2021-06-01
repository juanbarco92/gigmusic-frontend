import React from 'react'
import '../Static/CSS/Error404.css'
import logo from '../Static/Icons/logo-004@3x.png'

const Error404 = () => {

    document.title = "GIG - 404"

  return (
    <div className="container text-center mt-2" id='E404-container'>
      <div className='row justify-content-center title-404'>
        <div className='col-auto'>
          <img src={logo} alt='gig'/>
        </div>
        <div className='col-auto'>
          <h1 className='display-1 text-center'>-</h1>
        </div>
        <div className='col-auto'>
          <h1 className='display-1 text-center'>404</h1>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <h1 className='display-3 header-404'>Parece que te has perdido</h1>
          <h2 className='body-404' >Puedes usar la barra de busqueda o la navegacion para ubicarte nuevamente</h2>
        </div>
      </div>
    </div>
  );
}

export default Error404;