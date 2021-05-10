import React, {useState} from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import '../../Static/CSS/Songs/InstrumentSelector.css'

const InstrumentSelector = () => {
	
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
		}
	}

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
						<div>
							<img className='img-fluid' src="https://http2.mlstatic.com/D_NQ_NP_653834-MCO31121764137_062019-O.webp" alt='' />
						</div>
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
						Guitarra Acustica
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