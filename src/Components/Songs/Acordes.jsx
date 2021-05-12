import React from 'react'
import GuitarChord from 'react-guitar-chords'
import '../../Static/CSS/Songs/Acordes.css'

const Acordes = (props) => {

    // ----- Obtencion de parametros de entrada
    const {notas, colorAc} = props

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

  return (
    <div className='container-fluid' id='Acordes-Container'>
        <div className='row chord'>
        {
            acordesUnicos.map( (item, index) => (
                <div className='col col-lg-6' style={styles} key={index} >
                    <GuitarChord chordName={item} frets={['x', 3, 0, 0, 1, 1]}/>
                </div>
            ))
        }
        </div>
    </div>

  );
}

export default Acordes;
