import { useEffect, useState } from 'react'
import * as S from './index.styled'
import { AudioPlayer } from '../../components/AudioPlayer/AudioPlayer'
import { NavMenu } from '../../components/NavMenu/NavMenu'
import { Sidebar } from '../../components/Sidebar/Sidebar'
import { Tracklist } from '../../components/Tracklist/Tracklist'
import { getTrackList } from '../../modules/api'
import { trackListForSkeleton } from '../../modules/consts'

export function MainPage() {
  const [trackList, setTrackList] = useState(trackListForSkeleton)
  const [isLoading, setLoadingStatus] = useState(true)
  const [isPlayed, setPlay] = useState(false)
  const [track, setTrack] = useState(null)
  const [isError, setError] = useState(false)

  useEffect(() => {
    setLoadingStatus(true)

    getTrackList()
      .then((tracks) => {
        setTrackList(tracks)
        setLoadingStatus(false)
      })
      .catch(() => {
        setLoadingStatus(false)
        setError(true)
      })
  }, [])

  return (
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <NavMenu />
          <Tracklist
            isError={isError}
            trackList={trackList}
            setTrackList={setTrackList}
            $isLoading={isLoading}
            setLoadingStatus={setLoadingStatus}
            setPlay={setPlay}
            setTrack={setTrack}
          />
          <Sidebar $isLoading={isLoading} />
        </S.Main>
        {isPlayed && <AudioPlayer track={track} />}
        <footer />
      </S.Container>
    </S.Wrapper>
  )
}
