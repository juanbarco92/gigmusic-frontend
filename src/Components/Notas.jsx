import React, {useState} from 'react'
import '../Static/CSS/Notas.css';
import Hover from './Hover'

const Notas = (props) => {

    const [isShown, setIsShown] = useState(false)
    const [whatNote, setWhatNote] = useState('')
    const {notas, espacio, letra} = props
    const notacion = notas.split(';')
    const espaciado = espacio.split(';').map( item => ( (parseInt(item)*1.026).toString()))
    //' '.repeat(item)
    //Factor de conversion de espacios a milimetro aproximado: 1.026

    const hoverDymanic = (estado, notaIn) => {
        if (notaIn !== 'x2' && notaIn !== 'X2' && notaIn !== 'X3' && notaIn !== 'x3' && notaIn !== 'X4' && notaIn !== 'x4'){
            setIsShown(estado)
            setWhatNote(notaIn)
        }
    }

  return (
    <div className="container">
        <div className='row'>
            <div className='col-sm-6'>
                <div className='row' id='Acordes'>
                    {
                        espaciado.map((item, index) => (
                            <pre key={index} className='btn-group'>
                                <button id='AcordeBt'
                                    style={{margin : '0mm 0mm 0mm '+item+'mm'}}
                                    onMouseEnter={() => hoverDymanic(true,notacion[index])}
                                    onMouseLeave={() => hoverDymanic(false, '')}
                                    onClick={() => hoverDymanic(null, '')}>
                                    {notacion[index]}
                                </button>
                            </pre>
                        ))
                    }
                </div>
                <div className='row' id='Letra'>
                    {letra}
                </div>
            </div>
            <div className='col-sm-auto'>
                {
                    isShown &&
                    (
                        <div>
                            <Hover nota={whatNote}/>
                        </div>
                    )
                }
            </div>
            <div className='col'></div>
        </div>
    </div>
  );
}

export default Notas;
