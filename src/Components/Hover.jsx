import React from 'react'
import './CSS/Hover.css';

const Hover = (props) => {

    const nota = props.nota

  return (
      <div className='container' id='Hover-container'>
          <h4>{nota}</h4>
      </div>
  );
}

export default Hover;