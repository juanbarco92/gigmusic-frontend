import React from 'react'
import '../../Static/CSS/Songs/Notas.css'

const Notas = (props) => {

    // ----- Obtencion de parametros de entrada
    const {notas, espacio, letra, colorAc, sizeAc} = props
    
    // ----- Adecuacion de notas
    const notacion = notas.split(';')
    const espaciado = espacio.split(';').map( item => (' '.repeat(item) ))
    // ***** Factor de conversion de espacios a milimetro aproximado: 1.026
    let spacedNotes = ''
    espaciado.map((item, index) => spacedNotes += (item + notacion[index]) )

  return (
    <div className='row'>
        <div className='col'>
            <div className='row mt-3' id='Acordes'>
                <pre id='Contenedor-Acordes'>
                    <span style={{'color':colorAc, 'fontSize':sizeAc}}>
                        {spacedNotes}
                    </span>
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
