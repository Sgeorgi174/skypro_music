import FilterBar from '../FilterBar/FillterBar'
import Playlist from '../Playlist/Playlist'
import SearchBar from '../SearchBar/SearchBar'

function Tracklist() {
  return (
    <div className="main__centerblock centerblock">
      <SearchBar />
      <h2 className="centerblock__h2">Треки</h2>
      <FilterBar />
      <div className="centerblock__content">
        <div className="content__title playlist-title">
          <div className="playlist-title__col col01">Трек</div>
          <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
          <div className="playlist-title__col col03">АЛЬБОМ</div>
          <div className="playlist-title__col col04">
            <svg className="playlist-title__svg" alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-watch" />
            </svg>
          </div>
        </div>
        <Playlist />
      </div>
    </div>
  )
}

export default Tracklist
