import * as S from './Track.styled'

export function Track(props) {
  return (
    <S.PlaylistItem>
      <S.PlaylistTrack>
        <S.TrackTitle>
          <S.TrackTitleImage>
            <S.TrackTitleSvg alt="music">
              <use xlinkHref="img/icon/sprite.svg#icon-note" />
            </S.TrackTitleSvg>
          </S.TrackTitleImage>
          <S.TrackTitleText isLoading={props.isLoading}>
            <S.TrackTitleLink
              onClick={() => {
                props.setPlay(true)
                props.setTrack({ name: props.song, author: props.author })
              }}
              isLoading={props.isLoading}
            >
              {props.isLoading ? 'waitingTrack' : props.song}{' '}
              <S.TrackTitleSpan />
            </S.TrackTitleLink>
          </S.TrackTitleText>
        </S.TrackTitle>
        <S.TrackAuthor isLoading={props.isLoading}>
          <S.TrackAuthorLink isLoading={props.isLoading} href="http://">
            {props.isLoading ? 'waitingAuthor' : props.author}
          </S.TrackAuthorLink>
        </S.TrackAuthor>
        <S.TrackAlbum isLoading={props.isLoading}>
          <S.TrackAlbumLink isLoading={props.isLoading} href="http://">
            {props.isLoading ? 'waitingAlbum' : props.album}
          </S.TrackAlbumLink>
        </S.TrackAlbum>
        <S.TrackTime>
          <S.TrackTimeSvg alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-like" />
          </S.TrackTimeSvg>
          <S.TrackTimeText className="track__time-text">
            {props.isLoading ? '0:00' : props.time}
          </S.TrackTimeText>
        </S.TrackTime>
      </S.PlaylistTrack>
    </S.PlaylistItem>
  )
}
