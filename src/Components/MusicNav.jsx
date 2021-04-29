import React, {useState} from 'react'
import '../Static/CSS/MusicNav.css'
import Portal from './Portal'

const MusicNav = (props) => {
  	
  	// ----- Obtencion de variables y funciones de entrada
	const { Scrolling, scroll, MostrarAcordes, VarFuente, VarAcordes, VarTipo, personalize } = props
	const [font, setFont] = useState(false)
	const [tipo, setTipo] = useState(false)
	const [chord, setChord] = useState(false)

	// ----- Restaura personalizacion
	const Restablecer = () => {
		VarAcordes('inherit')
		VarFuente('inherit')
		VarTipo('inherit')
	}

	const styles = {
		maxHeight : window.screen.height
	}

	// ----- Se invoca el portal
	const ColorFuente = () => {
		setFont(!font)
	}

	const Tipografia = () => {
		setTipo(!tipo)
	}

	const ColorAcordes = () => {
		setChord(!chord)
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
			    	<div className="col-3 custom-control custom-switch float-right">
						<input type="checkbox" className="custom-control-input" id="scroll-btn" checked={scroll}			onChange={Scrolling} />
						<label className="custom-control-label" htmlFor="scroll-btn"></label>
					</div>
			    </div>
			    <div className="row">
			    	<div className='col float-left'>
			    		<span>Mostrar acordes</span>
			    	</div>
			    	<div className="col-3 custom-control custom-switch float-right">
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
			    			<div className='col w-75 float-left'>
			    				<span>Color de acordes</span>
			    			</div>
			    			<div className='col-4 w-25 float-right'>
			    				<button type='button' className='btn mn-btn' onClick={ColorAcordes} id='color-acordes'>&gt;</button>
			    			</div>
			    			{
		    					chord &&
		    					(<Portal tipo='ColAc' selection={personalize.color} method={ColorAcordes} varExt={VarAcordes} />)
		    				}
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
			    			<div className='col w-75 float-left'>
			    				<span>Tipografía</span>
			    			</div>
			    			<div className='col-4 w-25 float-right'>
			    				<button type='button' onClick={Tipografia} className='btn mn-btn' id='tipografia'>&gt;</button>
			    			</div>
			    			{
		    					tipo &&
		    					(<Portal tipo='SelTi' selection={personalize.fontFamily} method={Tipografia} varExt={VarTipo} />)
		    				}
			    		</div>
			    		<div className='row'>
			    			<div className='col w-75 float-left'>
			    				<span>Color de fuente</span>
			    			</div>
			    			<div className='col-4 w-25 float-right'>
			    				<button type='button' className='btn mn-btn' onClick={ColorFuente} id='color-fuente'>&gt;</button>
			    			</div>
			    			{
		    					font &&
		    					(<Portal tipo='ColFu' selection={personalize.font} method={ColorFuente} varExt={VarFuente} />)
			    			}
			    		</div>
			    	</div>
			    </div>
			    <button onClick={Restablecer} className='btn mt-2' id='Restablecer' type = "reset">
			    	RESTABLECER AJUSTES
			    </button>
		    </div>
	    </div>
    </div>
  );
}

export default MusicNav;
