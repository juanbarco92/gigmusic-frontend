import React from 'react'
import { ReactComponent as Play } from '../../Static/Icons/Reproductor/play.svg'
import { ReactComponent as Pause } from '../../Static/Icons/Reproductor/pause.svg'
import { ReactComponent as Next } from '../../Static/Icons/Reproductor/next.svg'
import { ReactComponent as Prev } from '../../Static/Icons/Reproductor/previous.svg'
import '../../Static/CSS/Songs/AudioControls.css'

// ----- Define los controles de audio y asigna las funciones
const AudioControls = ({
  isPlaying,
	onPlayPauseClick,
  onPrevClick,
  onNextClick,
}) => (
	<div className="audio-controls">
    <button
      type="button"
      className="prev rep-btn"
      aria-label="Previous"
      onClick={onPrevClick}
    >
      <Prev />
    </button>
    {isPlaying ? (
      <button
        type="button"
        className="pause rep-btn"
        onClick={() => onPlayPauseClick(false)}
        aria-label="Pause"
      >
        <Pause />
      </button>
    ) : (
      <button
        type="button"
        className="play rep-btn"
        onClick={() => onPlayPauseClick(true)}
        aria-label="Play"
      >
        <Play />
      </button>
    )}
    <button
      type="button"
      className="next rep-btn"
      aria-label="Next"
      onClick={onNextClick}
    >
      <Next />
    </button>
  </div>
);

export default AudioControls;