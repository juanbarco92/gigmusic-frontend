import React from 'react'
import '../Static/CSS/Inicio.css'
import Banner from './Inicio/Banner'

const Inicio = () => {
    
    // ----- Definicion titulo del documento
    document.title = "GIG - Inicio"

    const delBanner = [
      {
        'src': 'https://okdiario.com/img/2020/06/09/la-flaca-jarabe-de-palo-655x368.jpg',
        'boton': 'Escuchar Ahora',
        'header': 'Estreno Exclusivo',
        'body': 'Mira lo nuevo de:'
      },
      {
        'src': 'https://okdiario.com/img/2020/06/09/la-flaca-jarabe-de-palo-655x368.jpg',
        'boton': 'Escuchar Ahora',
        'header': 'Estreno Exclusivo',
        'body': 'Mira lo nuevo de:'
      }
    ]
    const loUltimo = [
      {
        'src': 'https://files.musiclist.es/songs/covers/5d15be29812e2/default.jpeg',
        'artista': 'Nombre del artista',
        'album': 'album'
      },
      {
        'src': 'https://files.musiclist.es/songs/covers/5d15be29812e2/default.jpeg',
        'artista': 'Nombre del artista',
        'album': 'album'
      }
    ]
    const lasPopulares = [
      {
        'src': 'https://files.musiclist.es/songs/covers/5d15be29812e2/default.jpeg',
        'cancion': 'cancion'
      },
      {
        'src': 'https://files.musiclist.es/songs/covers/5d15be29812e2/default.jpeg',
        'cancion': 'cancion'
      }
    ]

    // ----- Definicion de estilos de adaptacion
    const styles = {
      maxHeight : window.screen.height
    }

  return (
    <div style={styles} id='Inicio-container'>
      <Banner delBanner={delBanner} />
      <section 
      className="row justify-content-center align-items-center mt-2">
        <div className='col-10'>
          <span className='h4'>Lo ultimo</span>
          <div className='card-columns ultimo mt-1'>
          {
            loUltimo.map((item, index) => (
              <div className='card py-1 px-1' key={index} >
                <div className='row'>
                  <img src={item.src} className='col card-image' alt='' />
                  <div className='col align-self-center'>
                    <p className='h4' >{item.artista}</p>
                    <p className='h5' >{item.album}</p>
                  </div>
                </div>
              </div>
            ))
          }
          </div>
        </div>
      </section>
      <section 
      className="row justify-content-center align-items-center mt-2">
        <div className='col-10'>
          <span className='h4'>Populares</span>
          <div className='card-columns populares mt-1'>
          {
            lasPopulares.map((item, index) => (
              <div className='card' key={index} >
                <div className='row'>
                  <div className='col'>
                    <img src={item.src} className='card-image w-100' alt='' />
                    <div className='card-img-overlay'>
                      <h5>{item.cancion}</h5>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
          </div>
        </div>
      </section>
    </div>
  );
}

export default Inicio;
