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
  			<span className='text-center'>ACORDES PARA</span>
		    <div className="row" >
		    	<span className='col'>AutoScroll</span>
		    	<div className="col custom-control custom-switch">
					<input type="checkbox" className="custom-control-input" id="scroll-btn" checked={scroll}			onChange={Scrolling} />
					<label className="custom-control-label" htmlFor="scroll-btn"></label>
				</div>
		    </div>
		    <div className="row">
		    	<span className='col'>Mostrar acordes</span>
		    	<div className="col custom-control custom-switch">
					<input type="checkbox" className="custom-control-input" id="acordes-btn" onChange={MostrarAcordes}/>
					<label className="custom-control-label" htmlFor="acordes-btn"></label>
				</div>
		    </div>
	    </div>
    </div>
  );
}

export default MusicNav;
