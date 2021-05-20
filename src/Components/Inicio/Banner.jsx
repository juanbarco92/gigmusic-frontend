import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import '../../Static/CSS/Inicio/Banner.css'

const Banner = () => {

    // ----- Modificaciones a libreria carousel para indicadores
    const indicatorStyles: CSSProperties = {
        background: '#181818',
        border: '1px solid #fafbfe',
        width: 12,
        height: 12,
        borderRadius: '100%',
        display: 'inline-flex',
        margin: '5px',
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

    // ----- Controlador de boton del banner
    const click = () => {
      console.log('click')
    }

  return (
    <div className='container-fluid' id='Banner-Container'>
      <div className="row justify-content-center mt-2">
        <div className='col col-md-10'>
          <Carousel
          axis='vertical' 
          centerMode={false}
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
      </div>
    </div>
  );
}

export default Banner;
