import React, {useState, useEffect} from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import '../../Static/CSS/Songs/InstrumentSelector.css'
import { lInstrumentos } from '../../Utils/utils'

const InstrumentSelector = (props) => {

	// ----- Obtencion de parametros de entrada
	const { QInstrumento } = props

	// ----- Seleccionador nombre de instrumento
	const [inst, setInst] = useState(0)

	// ----- Modificadores de libreria Carousel
	const [slide, setSlide] = useState(0)

	const next = () => {
		setSlide(slide + 1)
	}

	const prev = () => {
		setSlide(slide - 1)
	}

	const updateSlide = (index) => {
		if (slide !== index) {
			setSlide(index)
			setInst(index)
		}
	}

	useEffect(() => {
		QInstrumento(lInstrumentos[inst].nombre)
	}, [QInstrumento, inst])

	return(
		<div className='container-fluid' id='Instrument-Container'>
			<div className='row justify-content-center'>
				<div className='col-10'>
					<Carousel
					selectedItem={slide}
					onChange={updateSlide}
					centerMode={false}
					infiniteLoop={true} 
					showThumbs={false} 
					showArrows={false} 
					showIndicators={false} 
					showStatus={false}
					dynamicHeight={true}
					>
					{
						lInstrumentos.map( (item, index) => (
							<div key={index} >
								<img className='img-fluid' src={item.img} alt='' />
							</div>
						))
					}
		            </Carousel>
            	</div>
            </div>
            <div className='row justify-content-between'>
				<div className='col-2' id='Prev-Container'>
					<button onClick={prev} type='button' className='btn mn-btn float-left' id='Prev-Instrument'>
						&lt;
					</button>
				</div>
				<div className='col text-center' id='Instrument'>
					<span>
						{lInstrumentos[inst].nombre}
					</span>
				</div>
				<div className='col-2' id='Next-Container'>
					<button onClick={next} type='button' className='btn mn-btn float-right' id='Next-Instrument'>
						&gt;
					</button>
				</div>
            </div>
		</div>
	);
}
export default InstrumentSelector;