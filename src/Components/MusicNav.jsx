import React from 'react'
import '../Static/CSS/MusicNav.css'

const MusicNav = (props) => {
  	
	const { Scrolling, scroll, MostrarAcordes } = props

	const styles = {
		maxHeight : window.screen.height
	}

  return (
  	<div style={styles} >
  		<div className='row' id='MusicNav-Container'>
  			<div className='col'>
	  			<p className='h4 text-center'>ACORDES PARA</p>
			    <div className="row justify-content-between" >
			    	<div className='col float-left'>
			    		<p>AutoScroll</p>
			    	</div>
			    	<div className="col custom-control custom-switch float-right">
						<input type="checkbox" className="custom-control-input" id="scroll-btn" checked={scroll}			onChange={Scrolling} />
						<label className="custom-control-label" htmlFor="scroll-btn"></label>
					</div>
			    </div>
			    <div className="row">
			    	<div className='col float-left'>
			    		<p>Mostrar acordes</p>
			    	</div>
			    	<div className="col custom-control custom-switch float-right">
						<input type="checkbox" className="custom-control-input" id="acordes-btn" onChange={MostrarAcordes}/>
						<label className="custom-control-label" htmlFor="acordes-btn"></label>
					</div>
					<div className="row align-items-center">
				    	<div className='col float-left'>
				    		<p>Tono</p>
				    	</div>
				    	<div className='col btn-group float-right'>
							<button type='button' className='btn tono py-0' id='tono-menos'>
								<span>-</span>
							</button>
							<button type='button' className='btn tono py-0' id='tono-mas'>
								<span>+</span>
							</button>
						</div>
					</div>
			    </div>
		    </div>
	    </div>
    </div>
  );
}

export default MusicNav;
