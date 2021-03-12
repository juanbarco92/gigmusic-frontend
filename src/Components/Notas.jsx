import React, {useState} from 'react'
import './CSS/Notas.css';
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
        setIsShown(estado)
        setWhatNote(notaIn)
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
                                    onMouseLeave={() => hoverDymanic(false, '')}>
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
            <div className='col-sm-2'>
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
