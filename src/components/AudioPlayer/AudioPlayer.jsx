import './AudioPlayer.css'
import { PlayTrackBar } from '../PlayTrackBar/PlayTrackBar'
import { PlayerControls } from '../PlayerControls/PlayerControls'
import { VolumeBar } from '../VolumeBar/VolumeBar'

function AudioPlayer() {
  return (
    <div className="bar">
      <div className="bar__content">
        <div className="bar__player-progress" />
        <div className="bar__player-block">
          <div className="bar__player player">
            <PlayerControls />
            <PlayTrackBar />
          </div>
          <VolumeBar />
        </div>
      </div>
    </div>
  )
}

export default AudioPlayer
