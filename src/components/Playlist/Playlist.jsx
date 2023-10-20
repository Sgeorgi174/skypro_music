import { Track } from '../Track/Track'
import * as S from './Playlist.styled'
import { correctTime } from '../../modules/correctTime'

export function Playlist({ isLoading, trackList, setPlay, setTrack }) {
  return (
    <S.ContentPlaylist>
      {trackList.map((track) => (
        <Track
          setTrack={setTrack}
          isLoading={isLoading}
          key={track.id}
          song={track.name}
          author={track.author}
          album={track.album}
          time={correctTime(track.duration_in_seconds)}
          setPlay={setPlay}
        />
      ))}
    </S.ContentPlaylist>
  )
}
