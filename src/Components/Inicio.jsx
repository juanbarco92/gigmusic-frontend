import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import '../Static/CSS/Inicio.css'

const Inicio = () => {

    document.title = "GIG - Inicio"

    const styles = {
      maxHeight : window.screen.height
    }

    const indicatorStyles: CSSProperties = {
        background: '#181818',
        border: '1px solid #fafbfe',
        width: 12,
        height: 12,
        borderRadius: '100px',
        display: 'inline-flex',
        margin: '5px',
    }

    const click = () => {
      console.log('click')
    }

    const renderIndicator = (onClickHandler, isSelected, index, label) => {
                if (isSelected) {
                    return (
                      <ul className='d-flex justify-content-end align-items-center'>
                        <li className='p-dots'
                            style={{ ...indicatorStyles, background: '#fafbfe' }}
                            aria-label={`Selected: ${label} ${index + 1}`}
                            title={`Selected: ${label} ${index + 1}`}
                        />
                      </ul>
                    );
                }
                return (
                  <ul className='d-flex justify-content-end align-items-start'>
                    <li className='p-dots'
                        style={indicatorStyles}
                        onClick={onClickHandler}
                        onKeyDown={onClickHandler}
                        value={index}
                        key={index}
                        role="button"
                        tabIndex={0}
                        title={`${label} ${index + 1}`}
                        aria-label={`${label} ${index + 1}`}
                    />
                  </ul>
                );
            }

  return (
    <div style={styles} id='Inicio-container'>
      <section 
      className="row justify-content-center mt-2">
        <div className='col col-md-9'>
          <Carousel
          axis='vertical' 
          centerMode={true}
          autoplay={true} 
          showArrows={false} 
          infiniteLoop={true} 
          showThumbs={false} 
          emulateTouch={true} 
          useKeyboardArrows={true} 
          stopOnHover={true}
          showStatus={false} 
          dynamicHeight={true}
          renderIndicator={renderIndicator}
          verticalSwipe='standard'
          >
            <div>
              <img className='accent img-fluid' src="https://okdiario.com/img/2020/06/09/la-flaca-jarabe-de-palo-655x368.jpg" alt='' />
              <div className='legend'>
                <span className='row ml-2 header-carousel h1'>Estreno Exclusivo</span>
                <span className='row ml-2 mb-2 body-carousel'>Mira lo nuevo de:</span>
                <button onClick={click} className='row ml-2 btn btn-carousel' type='button'>
                  Escuchar ahora
                </button>
              </div>
            </div>
            <div>
              <img className='accent img-fluid'  src="https://okdiario.com/img/2020/06/09/la-flaca-jarabe-de-palo-655x368.jpg" alt='' />
              <div className='legend'>
                <span className='row ml-2 header-carousel h1'>Top de la semana</span>
                <span className='row ml-2 mb-2 body-carousel'>Mira lo mejor</span>
                <button onClick={click} className='row ml-2 btn btn-carousel' type='button'>
                  Escuchar ahora
                </button>
              </div>
            </div>
          </Carousel>
        </div>
      </section>
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
