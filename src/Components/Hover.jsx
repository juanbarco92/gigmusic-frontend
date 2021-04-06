import React from 'react'
import GuitarChord from 'react-guitar-chords'
import '../Static/CSS/Hover.css';

const Hover = (props) => {

    const nota = props.nota

  return (
      <div className='container' id='Hover-container'>
          <GuitarChord chordName={nota} frets={['x', 3, 2, 0, 1, 0]}/>
      </div>
  );
}

export default Hover;
