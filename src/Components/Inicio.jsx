import React from 'react'
import '../Static/CSS/Inicio.css'
import Banner from './Banner'

const Inicio = () => {
    
    // ----- Definicion titulo del documento
    document.title = "GIG - Inicio"

    const styles = {
      maxHeight : window.screen.height
    }

  return (
    <div style={styles} id='Inicio-container'>
      <Banner />
      <section 
      className="row justify-content-center align-items-center mt-2">
        <div className='col-10'>
          <span className='h4'>Lo ultimo</span>
          <div className='card-columns ultimo mt-1'>
            <div className='card py-1 px-1'>
              <div className='row'>
                <img src='https://files.musiclist.es/songs/covers/5d15be29812e2/default.jpeg' className='col card-image' alt='' />
                <div className='col align-self-center'>
                  <p className='h4' >Nombre del Artista</p>
                  <p className='h5' >Album</p>
                </div>
              </div>
            </div>
            <div className='card py-1 px-1'>
              <div className='row'>
                <img src='https://files.musiclist.es/songs/covers/5d15be29812e2/default.jpeg' className='col card-image' alt='' />
                <div className='col align-self-center'>
                  <p className='h4' >Nombre del Artista</p>
                  <p className='h5' >Album</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section 
      className="row justify-content-center align-items-center mt-2">
        <div className='col-10'>
          <span className='h4'>Populares</span>
          <div className='card-columns populares mt-1'>
            <div className='card'>
              <div className='row'>
                <div className='col'>
                  <img src='https://files.musiclist.es/songs/covers/5d15be29812e2/default.jpeg' className='card-image w-100' alt='' />
                  <div className='card-img-overlay'>
                    <h5>Cancion</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className='card'>
              <div className='row'>
                <div className='col'>
                  <img src='https://files.musiclist.es/songs/covers/5d15be29812e2/default.jpeg' className='card-image w-100' alt='' />
                  <div className='card-img-overlay'>
                    <h5>Cancion</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Inicio;
