import PlayerButton from '../PlayerButton/PlayerButton'

function PlayerControls() {
  return (
    <div className="player__controls">
      <PlayerButton buttonName="prev" />
      <PlayerButton buttonName="play" />
      <PlayerButton buttonName="next" />
      <PlayerButton buttonName="repeat" />
      <PlayerButton buttonName="shuffle" />
    </div>
  )
}

export default PlayerControls
