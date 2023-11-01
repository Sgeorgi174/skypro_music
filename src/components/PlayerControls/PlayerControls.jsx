import { PlayerButton } from '../PlayerButton/PlayerButton'
import * as S from './PlayerControls.styles'

export function PlayerControls({
  togglePlay,
  isPlaying,
  toggleLoop,
  $isLooping,
}) {
  return (
    <S.PlayerControls>
      <PlayerButton $buttonName="prev" />
      <PlayerButton
        handleClick={togglePlay}
        $buttonName={`${isPlaying ? 'pause' : 'play'}`}
      />
      <PlayerButton $buttonName="next" />
      <PlayerButton
        $buttonName="repeat"
        handleClick={toggleLoop}
        $isLooping={$isLooping}
      />
      <PlayerButton $buttonName="shuffle" />
    </S.PlayerControls>
  )
}
