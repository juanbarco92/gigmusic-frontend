import React, {useState, useEffect} from 'react'
import '../../Static/CSS/Songs/MusicNav.css'
import Portal from './Portal'
import InstrumentSelector from './InstrumentSelector'

const sizeIncDec=0.1
let sizeAux = 1

const MusicNav = (props) => {
  	
  	// ----- Obtencion de parametros de entrada
	const { QInstrumento, Scrolling, scroll, MostrarAcordes, acordes, VarSize, VarFuente, VarAcordes, VarTipo, personalize, ResetP } = props
	
	// ----- Definicion de estilos de adaptacion
	const styles = {
		maxHeight : window.screen.height
	}

	// ----- Cambios de botones + y -
	const [fuente, setFuente] = useState(1)
	const [tono, setTono] = useState(0)

	// Funcion suma
	const Sumar = (cambio) => {
		if(cambio === 'fuente'){
			if(fuente<=1.3){
				setFuente(fuente+sizeIncDec)
			}
		}else if(cambio === 'tono'){
			setTono(tono+sizeIncDec)
		}
	}
	// Funcion resta
	const Restar = (cambio) => {
		if(cambio === 'fuente'){
			if(fuente>0.7){
				setFuente(fuente-sizeIncDec)
			}
		}else if(cambio === 'tono'){
			setTono(tono-sizeIncDec)
		}
	}
	// ----- Obtencion de tamano de fuente
	useEffect(() => {
		if(fuente !== sizeAux){
			VarSize(fuente)
			sizeAux=fuente
		}
	}, [VarSize, fuente])

	// ----- Restaura personalizacion
	const Restablecer = () => {
		ResetP()
		setFuente(1)
	}

	// ----- Se invoca el portal de color de fuente
	const [font, setFont] = useState(false)

	const ColorFuente = () => {
		setFont(!font)
	}

	// ----- Se invoca el portal de tipografia
	const [tipo, setTipo] = useState(false)

	const Tipografia = () => {
		setTipo(!tipo)
	}

	// ----- Se invoca el portal de color de acorde
	const [chord, setChord] = useState(false)

	const ColorAcordes = () => {
		setChord(!chord)
	}

  return (
  	<div style={styles}>
  		<div className='row' id='MusicNav-Container' >
  			<div className='col px-0'>
	  			<p className='h4 text-center'>ACORDES PARA</p>
	  			<div className="row" >
	  				<div className='col'>
	  					<InstrumentSelector QInstrumento={QInstrumento} />
	  				</div>
	  			</div>
			    <div className="row justify-content-between mt-4" >
			    	<div className='col float-left'>
			    		<span>AutoScroll</span>
			    	</div>
			    	<div className="col-3 custom-control custom-switch float-right">
						<input type="checkbox" className="custom-control-input" id="scroll-btn" checked={scroll} onChange={Scrolling} />
						<label className="custom-control-label" htmlFor="scroll-btn"></label>
					</div>
			    </div>
			    <div className="row justify-content-between">
			    	<div className='col float-left'>
			    		<span>Mostrar acordes</span>
			    	</div>
			    	<div className="col-3 custom-control custom-switch float-right">
						<input type="checkbox" className="custom-control-input" id="acordes-btn" checked={acordes} onChange={MostrarAcordes}/>
						<label className="custom-control-label" htmlFor="acordes-btn"></label>
					</div>
			    </div>
			    <div className="row align-items-center">
			    	<div className='col float-left'>
			    		<span>Tono</span>
			    	</div>
			    	<div className='col btn-group float-right'>
						<button onClick={() => Restar('tono')} type='button' className='btn mn-btn' id='tono-menos'>
							<span>-</span>
						</button>
						<button onClick={() => Sumar('tono')} type='button' className='btn mn-btn' id='tono-mas'>
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
								<button onClick={() => Restar('fuente')} type='button' className='btn mn-btn' id='fuente-menos'>
									<span>-</span>
								</button>
								<button onClick={() => Sumar('fuente')} type='button' className='btn mn-btn' id='fuente-mas'>
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
