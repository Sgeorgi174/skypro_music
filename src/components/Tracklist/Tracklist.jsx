import * as S from './Tracklist.styled'
import { FilterBar } from '../FilterBar/FillterBar'
import { Playlist } from '../Playlist/Playlist'
import { SearchBar } from '../SearchBar/SearchBar'

export function Tracklist({ isLoading }) {
  return (
    <S.MainCenterblock>
      <SearchBar />
      <S.CenterblockH2>Треки</S.CenterblockH2>
      <FilterBar />
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
        <Playlist isLoading={isLoading} />
      </S.CenterblockContent>
    </S.MainCenterblock>
  )
}
