import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import '../Static/CSS/Inicio.css'

const Inicio = () => {

    document.title = "GIG - Inicio"

    const indicatorStyles: CSSProperties = {
        background: '#b3b3b3',
        width: 10,
        height: 10,
        boxShadow: '2px 2px 3px -2px #181818',
        borderRadius: '100px',
        display: 'inline-flex',
        margin: '5px',
    };

    const renderIndicator = (onClickHandler, isSelected, index, label) => {
                if (isSelected) {
                    return (
                      <ul className='d-flex justify-content-end align-items-center'>
                        <li
                            style={{ ...indicatorStyles, background: '#181818', boxShadow: '2px 2px 3px -2px #b3b3b3' }}
                            aria-label={`Selected: ${label} ${index + 1}`}
                            title={`Selected: ${label} ${index + 1}`}
                        />
                      </ul>
                    );
                }
                return (
                  <ul className='d-flex justify-content-end align-items-start'>
                    <li
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
    <div className="row justify-content-center mt-2" id='Inicio-container'>
      <div className='col col-md-9'>
        <Carousel axis='vertical' 
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
        >
          <div>
          <img src="https://okdiario.com/img/2020/06/09/la-flaca-jarabe-de-palo-655x368.jpg" alt='' />
          <span className='legend'>Estreno Exclusivo</span>
          </div>
          <div>
          <img src="https://imagenes.20minutos.es/files/image_656_370/uploads/imagenes/2020/06/09/todo-comenzo-con-la-flaca.jpeg" alt='' />
          <span className='legend'>La Flaca</span>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Inicio;
