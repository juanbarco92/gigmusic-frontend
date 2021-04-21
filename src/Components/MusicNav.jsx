import React from 'react'
import '../Static/CSS/MusicNav.css'

const MusicNav = (props) => {
  	
  	// ----- Obtencion de variables y funciones de entrada
	const { Scrolling, scroll, MostrarAcordes } = props

	const styles = {
		maxHeight : window.screen.height
	}

  return (
  	<div style={styles}>
  		<div className='row' id='MusicNav-Container' >
  			<div className='col px-0'>
	  			<p className='h4 text-center'>ACORDES PARA</p>
	  			<div className="row justify-content-between" >
	  				<div className='col'>
	  					<div className="row" >
	  						<div className='col'>
	  							IMG
	  						</div>
	  					</div>
	  					<div className="row" >
	  						<div className='col-3'>
	  							<button type='button' className='btn mn-btn' id='Prev-Instrument'>&lt;</button>
	  						</div>
	  						<div className='col-6'>
	  							Guitarra Acustica
	  						</div>
	  						<div className='col-3'>
	  							<button type='button' className='btn mn-btn' id='Next-Instrument'>&gt;</button>
	  						</div>
	  					</div>
	  				</div>
	  			</div>
			    <div className="row justify-content-between" >
			    	<div className='col float-left'>
			    		<span>AutoScroll</span>
			    	</div>
			    	<div className="col custom-control custom-switch float-right">
						<input type="checkbox" className="custom-control-input" id="scroll-btn" checked={scroll}			onChange={Scrolling} />
						<label className="custom-control-label" htmlFor="scroll-btn"></label>
					</div>
			    </div>
			    <div className="row">
			    	<div className='col float-left'>
			    		<span>Mostrar acordes</span>
			    	</div>
			    	<div className="col custom-control custom-switch float-right">
						<input type="checkbox" className="custom-control-input" id="acordes-btn" onChange={MostrarAcordes}/>
						<label className="custom-control-label" htmlFor="acordes-btn"></label>
					</div>
			    </div>
			    <div className="row align-items-center">
			    	<div className='col float-left'>
			    		<span>Tono</span>
			    	</div>
			    	<div className='col btn-group float-right'>
						<button type='button' className='btn mn-btn' id='tono-menos'>
							<span>-</span>
						</button>
						<button type='button' className='btn mn-btn' id='tono-mas'>
							<span>+</span>
						</button>
					</div>
				</div>
			    <div className='row'>
			    	<div className='col'>
			    		<div className='row'>
			    			<div className='col float-left'>
			    				<span>Color de acordes</span>
			    			</div>
			    			<div className='col-4 float-right'>
			    				<button type='button' className='btn mn-btn' id='color-acordes'>&gt;</button>
			    			</div>
			    		</div>
			    		<div className="row align-items-center">
					    	<div className='col float-left'>
					    		<p>Tamaño de fuente</p>
					    	</div>
					    	<div className='col btn-group float-right'>
								<button type='button' className='btn mn-btn' id='fuente-menos'>
									<span>-</span>
								</button>
								<button type='button' className='btn mn-btn' id='fuente-mas'>
									<span>+</span>
								</button>
							</div>
						</div>
			    		<div className='row'>
			    			<div className='col float-left'>
			    				<span>Tipografía</span>
			    			</div>
			    			<div className='col-4 float-right'>
			    				<button type='button' className='btn mn-btn' id='tipografia'>&gt;</button>
			    			</div>
			    		</div>
			    		<div className='row'>
			    			<div className='col float-left'>
			    				<span>Color de fuente</span>
			    			</div>
			    			<div className='col-4 float-right'>
			    				<button type='button' className='btn mn-btn' id='color-fuente'>&gt;</button>
			    			</div>
			    		</div>
			    	</div>
			    </div>
			    <button className='btn mt-2' id='Restablecer'>
			    	RESTABLECER AJUSTES
			    </button>
		    </div>
	    </div>
    </div>
  );
}

export default MusicNav;
