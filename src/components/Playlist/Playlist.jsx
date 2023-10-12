import { Track } from '../Track/Track'
import getTracksList from '../../modules/getTrackList'
import * as S from './Playlist.styled'

export function Playlist({ isLoading }) {
  return (
    <S.ContentPlaylist>
      {getTracksList().map((track) => (
        <Track
          isLoading={isLoading}
          key={track.id}
          song={track.song}
          author={track.author}
          album={track.album}
          moreInfo={track.moreInfo}
          time={track.time}
        />
      ))}
    </S.ContentPlaylist>
  )
}
