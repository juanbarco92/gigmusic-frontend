import React, { useState, useEffect, useRef } from 'react'
import AudioControls from './AudioControls'
import { ReactComponent as VolOn } from '../Static/Icons/Reproductor/volume-on.svg';
import { ReactComponent as VolOff } from '../Static/Icons/Reproductor/volume-off.svg';
import '../Static/CSS/Reproductor.css'

const Reproductor = (props) => {
  	
  	const {songUrl} = props

    const tracks = [
      {
        title: 'La Flaca',
        artist: 'Jarabe de palo',
        audioSrc: 'https://actions.google.com/sounds/v1/science_fiction/robot_code.ogg',
      },
    ]

    const [trackIndex, setTrackIndex] = useState(0)
    const [trackProgress, setTrackProgress] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)
    const [isVolZero, setIsVolZero] = useState(false)

    const { title, artist, audioSrc } = tracks[trackIndex]


    // Refs
    const audioRef = useRef(new Audio(audioSrc))
    const intervalRef = useRef()
    const isReady = useRef(false)

    // Destructure for conciseness
    const { duration } = audioRef.current

    const currentPercentage = duration ? `${(trackProgress / duration) * 100}%` : '0%'
    const trackStyling = `
    -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #f24405), color-stop(${currentPercentage}, #404040))`

    const volumeStyling = `
    -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${audioRef.current.volume}, #f24405), color-stop(${audioRef.current.volume}, #404040))`

  const toPrevTrack = () => {
    if (trackIndex - 1 < 0) {
      setTrackIndex(tracks.length - 1)
    } else {
      setTrackIndex(trackIndex - 1)
    }
  }

  const startTimer = () => {
    // Clear any timers already running
    clearInterval(intervalRef.current)

    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        toNextTrack()
      } else {
        setTrackProgress(audioRef.current.currentTime);
      }
    }, [1000])
  }

const toNextTrack = () => {
  if (trackIndex < tracks.length - 1) {
    setTrackIndex(trackIndex + 1)
  } else {
    setTrackIndex(0)
  }
}

const onScrub = (value) => {
  // Clear any timers already running
  clearInterval(intervalRef.current);
  audioRef.current.currentTime = value;
  setTrackProgress(audioRef.current.currentTime);
}

const onVolume = (value) => {
  audioRef.current.volume = value
  if (value == 0){
    setIsVolZero(true)
  }else{
    setIsVolZero(false)
  }
}

const onScrubEnd = () => {
  // If not already playing, start
  if (!isPlaying) {
    setIsPlaying(true)
  }
  startTimer()
}

useEffect(() => {
  if (isPlaying) {
    audioRef.current.play()
    startTimer()
  } else {
    audioRef.current.pause()
  }
}, [isPlaying])

useEffect(() => {
  // Pause and clean up on unmount
  return () => {
    audioRef.current.pause()
    clearInterval(intervalRef.current)
  }
}, [])
  
  useEffect(() => {
  audioRef.current.pause()

  audioRef.current = new Audio(audioSrc)
  setTrackProgress(audioRef.current.currentTime)

  if (isReady.current) {
    audioRef.current.play()
    setIsPlaying(true)
    startTimer()
  } else {
    // Set the isReady ref as true for the next pass
    isReady.current = true
  }
}, [trackIndex])

  return (
    <div className='Audio-container'>
      <div className="audio-player">
        <div className="track-info">
          <h2 className="title">{title}</h2>
          <h3 className="artist">{artist}</h3>
          <AudioControls
            isPlaying={isPlaying}
            onPrevClick={toPrevTrack}
            onNextClick={toNextTrack}
            onPlayPauseClick={setIsPlaying}
          />
           <input
          type="range"
          value={trackProgress}
          step="1"
          min="0"
          max={duration ? duration : `${duration}`}
          className="progress"
          onChange={(e) => onScrub(e.target.value)}
          onMouseUp={onScrubEnd}
          onKeyUp={onScrubEnd}
          style={{ background: trackStyling }}
        />
          <div className='row'>
            <div className='col-auto'>
            {
              isVolZero ? <VolOff className='vol' /> : <VolOn className='vol' /> 
            }
            </div>
            <div className='col'>
              <input 
              type="range"
              step="0.1"
              min="0"
              max='1'
              className="volume"
              onChange={(e) => onVolume(e.target.value)}
              style={{ background: volumeStyling }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reproductor;