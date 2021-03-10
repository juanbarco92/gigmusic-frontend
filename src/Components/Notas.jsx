import React from 'react'
import './CSS/Notas.css';

const Notas = (props) => {

    const {notas, espacio} = props
    const notacion = notas.split(';')
    const espaciado = espacio.split(';').map( item => (' '.repeat(item) ))
    let spacedNotes = ''
    console.log(espaciado.map((item, index) => spacedNotes += (item+notacion[index])))

  return (
    <div className="container">
        <pre id='Acordes'>{spacedNotes}</pre>
    </div>
  );
}

export default Notas;
