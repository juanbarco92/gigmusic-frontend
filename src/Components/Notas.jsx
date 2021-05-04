import React from 'react'
import '../Static/CSS/Notas.css';

const Notas = (props) => {

    // ----- Obtencion y adecuacion de parametros de entrada
    const {notas, espacio, letra, colorAc, sizeAc} = props
    
    const notacion = notas.split(';')
    const espaciado = espacio.split(';').map( item => (' '.repeat(item) ))
    //Factor de conversion de espacios a milimetro aproximado: 1.026
    let spacedNotes = ''
    espaciado.map((item, index) => spacedNotes += (item + notacion[index]) )

  return (
    <div className='row'>
        <div className='col'>
            <div className='row mt-3' id='Acordes'>
                <pre id='Contenedor-Acordes' style={{'color':colorAc, 'fontSize':sizeAc}}>
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
