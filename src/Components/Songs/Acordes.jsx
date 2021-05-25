import React from 'react'
import GuitarChord from 'react-guitar-chords'
import {AcordeGuitarraAcustica} from '../../Utils/acorde'
import '../../Static/CSS/Songs/Acordes.css'

const Acordes = (props) => {

    // ----- Obtencion de parametros de entrada
    const {notas, colorAc, cualInstrumento} = props

    const styles = {
        color: colorAc
    }

    // ----- Adecuacion de notas
    let separedNotes = ''
    let acordesUnicos = []
    notas.map(item => separedNotes += item.split(';')+',')
    separedNotes.split(',').forEach( item => {
        if(!acordesUnicos.includes(item)){
            if(item !== '' && !item.startsWith('x')){
                acordesUnicos.push(item)
            }
        }
    })

    // ----- Que version
    const acordeIndex = 0

    console.log(cualInstrumento)

  return (
    <div className='container-fluid' id='Acordes-Container'>
        <div className='row chord'>
            {
                acordesUnicos.map( (item, index) => (
                    <div className='col' style={styles} key={index} >
                        <GuitarChord chordName={item} frets={AcordeGuitarraAcustica(item, acordeIndex)}/>
                    </div>
                ))
            }
        </div>
    </div>

  );
}

export default React.memo(Acordes);
