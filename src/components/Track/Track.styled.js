import styled from 'styled-components'

export const PlaylistItem = styled.div`
  width: 100%;
  display: block;
  margin-bottom: 12px;
`

export const PlaylistTrack = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`

export const TrackTitle = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 447px;
`

export const TrackTitleImage = styled.div`
  width: 51px;
  height: 51px;
  padding: 16px;
  background: #313131;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-right: 17px;
`

export const TrackTitleSvg = styled.svg`
  width: 18px;
  height: 17px;
  fill: transparent;
  stroke: #4e4e4e;
`

export const TrackTitleText = styled.div`
  ${(props) =>
    props.$isLoading
      ? '  width: 100%; height: 100%; background: linear-gradient(90deg, rgb(0, 0, 0),rgb(77, 77, 77), rgb(139, 139, 139));background-size: 400% 400%;animation: gradient 5s ease infinite;transform: translate3d(0, 0, 0);'
      : ''}
`

export const TrackTitleLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => (props.$isLoading ? 'transparent' : '#ffffff')};
`

export const TrackTitleSpan = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #4e4e4e;
`
export const TrackAuthor = styled.div`
  ${(props) =>
    props.$isLoading
      ? 'width: 321px;height: 100%;background: linear-gradient(90deg,  rgb(0, 0, 0),  rgb(77, 77, 77),  rgb(139, 139, 139));background-size: 400% 400%;animation: gradient 5s ease infinite;transform: translate3d(0, 0, 0);'
      : 'width: 321px;display: -webkit-box;display: -ms-flexbox;display: flex;-webkit-box-pack: start;-ms-flex-pack: start;justify-content: flex-start;'}
`

export const TrackAuthorLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: left;
  color: ${(props) => (props.$isLoading ? 'transparent' : '#ffffff')};
`

export const TrackAlbum = styled.div`
  ${(props) =>
    props.$isLoading
      ? 'width: 245px;;height: 100%;background: linear-gradient( 90deg,  rgb(0, 0, 0),  rgb(77, 77, 77),  rgb(139, 139, 139));background-size: 400% 400%;animation: gradient 5s ease infinite;transform: translate3d(0, 0, 0);'
      : 'width: 245px;'}
`

export const TrackAlbumLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => (props.$isLoading ? 'transparent' : '#696969')};
`

export const TrackTime = styled.div``

export const TrackTimeSvg = styled.svg`
  width: 14px;
  height: 12px;
  margin-right: 17px;
  fill: transparent;
  stroke: #696969;
`

export const TrackTimeText = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: right;
  color: #696969;
`
