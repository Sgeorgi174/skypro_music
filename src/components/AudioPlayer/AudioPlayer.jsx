import { useEffect, useRef, useState } from 'react'
import { PlayTrackBar } from '../PlayTrackBar/PlayTrackBar'
import { PlayerControls } from '../PlayerControls/PlayerControls'
import { VolumeBar } from '../VolumeBar/VolumeBar'
import * as S from './AudioPlayer.styled'
import { ProgressInput } from '../ProgressBar/ProgressBar'
import { correctTimeForPlayer } from '../../modules/correctTime'

export function AudioPlayer({ track }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLooping, setIsLooping] = useState(false)
  const [currTrack, setCurrTrack] = useState(track)

  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)

  const [volumeLevel, setVolumeLevel] = useState(30)

  const audioRef = useRef(null)

  useEffect(() => {
    if (isLooping) {
      audioRef.current.loop = true
    } else {
      audioRef.current.loop = false
    }

    if (track !== currTrack) {
      setIsPlaying(false)
      setCurrTrack(track)
      audioRef.current.load()
    }
  }, [track, currTrack, isLooping])

  useEffect(() => {
    setDuration(audioRef.current.duration)
  }, [progress, duration])

  const handleStart = () => {
    audioRef.current.play()
    setIsPlaying(true)
  }

  const handleStop = () => {
    audioRef.current.pause()
    setIsPlaying(false)
  }

  const togglePlay = isPlaying ? handleStop : handleStart
  const toggleLoop = () => {
    setIsLooping(!isLooping)
  }

  return (
    <S.Bar>
      <S.BarContent>
        <S.BarTimer>
          <div>{correctTimeForPlayer(progress)}</div>
          <div>
            {duration
              ? correctTimeForPlayer(duration)
              : correctTimeForPlayer(track.duration)}
          </div>
        </S.BarTimer>
        <ProgressInput
          duration={duration}
          progress={progress}
          onChange={(event) => {
            audioRef.current.currentTime = event.target.value
          }}
        />

        <S.BarPlayerBlock>
          <S.BarPlayer>
            <S.Audio
              ref={audioRef}
              onTimeUpdate={() => {
                setProgress(audioRef.current.currentTime)
              }}
            >
              <source src={currTrack.trackFile} type="audio/mp3" />
              <track src="" kind="captions" label="english_captions" />
            </S.Audio>
            <PlayerControls
              togglePlay={togglePlay}
              toggleLoop={toggleLoop}
              isPlaying={isPlaying}
              $isLooping={isLooping}
            />
            <PlayTrackBar track={track} />
          </S.BarPlayer>
          <VolumeBar
            volumeLevel={volumeLevel}
            onChange={(event) => {
              setVolumeLevel(event.target.value)
              audioRef.current.volume = volumeLevel / 100
            }}
          />
        </S.BarPlayerBlock>
      </S.BarContent>
    </S.Bar>
  )
}
