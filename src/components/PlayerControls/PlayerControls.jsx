import { PlayerButton } from '../PlayerButton/PlayerButton'
import * as S from './PlayerControls.styles'

export function PlayerControls() {
  return (
    <S.PlayerControls>
      <PlayerButton buttonName="prev" />
      <PlayerButton buttonName="play" />
      <PlayerButton buttonName="next" />
      <PlayerButton buttonName="repeat" />
      <PlayerButton buttonName="shuffle" />
    </S.PlayerControls>
  )
}
