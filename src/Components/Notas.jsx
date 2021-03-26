import React from 'react'
import '../Static/CSS/Notas.css';

const Notas = (props) => {

    const {notas, espacio, letra} = props
    const notacion = notas.split(';')
    const espaciado = espacio.split(';').map( item => (' '.repeat(item) ))
    //Factor de conversion de espacios a milimetro aproximado: 1.026
    let spacedNotes = ''
    espaciado.map((item, index) => spacedNotes += (item + notacion[index]) )

  return (
    <div className='row'>
        <div className='col'>
            <div className='row'>
                <pre id='Acordes'>
                    {spacedNotes}
                </pre>
            </div>
            <div className='row' id='Letra'>
                {letra}
            </div>
        </div>
    </div>

  );
}

export default Notas;
