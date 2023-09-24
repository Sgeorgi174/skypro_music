import './App.css'
import AudioPlayer from './components/AudioPlayer/AudioPlayer'
import NavMenu from './components/NavMenu/NavMenu'
import Sidebar from './components/Sidebar/Sidebar'
import Tracklist from './components/Tracklist/Tracklist'

function App() {
  return (
    <div className="app">
      <div className="wrapper">
        <div className="container">
          <main className="main">
            <NavMenu />
            <Tracklist />
            <Sidebar />
          </main>
          <AudioPlayer />
          <footer className="footer" />
        </div>
      </div>
    </div>
  )
}

export default App
