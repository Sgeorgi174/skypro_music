import { useEffect, useState } from 'react'
import './App.css'
import AudioPlayer from './components/AudioPlayer/AudioPlayer'
import NavMenu from './components/NavMenu/NavMenu'
import Sidebar from './components/Sidebar/Sidebar'
import Tracklist from './components/Tracklist/Tracklist'
import delay from './modules/delay'

function App() {
  const [isLoading, setLoadingStatus] = useState(true)

  useEffect(() => {
    delay(5000).then(() => {
      setLoadingStatus(!isLoading)
    })
  }, [false])

  return (
    <div className="app">
      <div className="wrapper">
        <div className="container">
          <main className="main">
            <NavMenu />
            <Tracklist isLoading={isLoading} />
            <Sidebar isLoading={isLoading} />
          </main>
          <AudioPlayer />
          <footer className="footer" />
        </div>
      </div>
    </div>
  )
}

export default App
