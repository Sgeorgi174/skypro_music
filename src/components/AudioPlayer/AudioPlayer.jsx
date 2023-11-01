import { PlayTrackBar } from '../PlayTrackBar/PlayTrackBar'
import { PlayerControls } from '../PlayerControls/PlayerControls'
import { VolumeBar } from '../VolumeBar/VolumeBar'
import * as S from './AudioPlayer.styled'

export function AudioPlayer({ track }) {
  return (
    <S.Bar>
      <S.BarContent>
        <S.BarPlayerProgress />
        <S.BarPlayerBlock>
          <S.BarPlayer>
            <PlayerControls />
            <PlayTrackBar track={track} />
          </S.BarPlayer>
          <VolumeBar />
        </S.BarPlayerBlock>
      </S.BarContent>
    </S.Bar>
  )
}
