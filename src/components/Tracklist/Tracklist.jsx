import * as S from './Tracklist.styled'
import { FilterBar } from '../FilterBar/FillterBar'
import { Playlist } from '../Playlist/Playlist'
import { SearchBar } from '../SearchBar/SearchBar'

export function Tracklist({
  isLoading,
  setLoadingStatus,
  trackList,
  setTrackList,
  setPlay,
  setTrack,
}) {
  return (
    <S.MainCenterblock>
      <SearchBar />
      <S.CenterblockH2>Треки</S.CenterblockH2>
      <FilterBar trackList={trackList} />
      <S.CenterblockContent>
        <S.ContentTitle>
          <S.PlaylistTitleCol Name="col01">Трек</S.PlaylistTitleCol>
          <S.PlaylistTitleCol Name="col02">ИСПОЛНИТЕЛЬ</S.PlaylistTitleCol>
          <S.PlaylistTitleCol Name="col03">АЛЬБОМ</S.PlaylistTitleCol>
          <S.PlaylistTitleCol Name="col04">
            <S.PlaylistTitleSvg alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-watch" />
            </S.PlaylistTitleSvg>
          </S.PlaylistTitleCol>
        </S.ContentTitle>
        <Playlist
          isLoading={isLoading}
          trackList={trackList}
          setTrackList={setTrackList}
          setLoadingStatus={setLoadingStatus}
          setPlay={setPlay}
          setTrack={setTrack}
        />
      </S.CenterblockContent>
    </S.MainCenterblock>
  )
}
