import { useEffect, useState } from 'react'
import * as S from './App.styled'
import { AudioPlayer } from './components/AudioPlayer/AudioPlayer'
import { NavMenu } from './components/NavMenu/NavMenu'
import { Sidebar } from './components/Sidebar/Sidebar'
import { Tracklist } from './components/Tracklist/Tracklist'
import delay from './modules/delay'

function App() {
  const [isLoading, setLoadingStatus] = useState(true)

  useEffect(() => {
    delay(5000).then(() => {
      setLoadingStatus(!isLoading)
    })
  }, [false])

  return (
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <NavMenu />
          <Tracklist isLoading={isLoading} />
          <Sidebar isLoading={isLoading} />
        </S.Main>
        <AudioPlayer />
        <footer />
      </S.Container>
    </S.Wrapper>
  )
}

export default App
