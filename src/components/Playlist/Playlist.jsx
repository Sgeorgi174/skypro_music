import Track from '../Track/Track'
import getTracksList from '../../modules/getTrackList'

function Playlist() {
  return (
    <div className="content__playlist playlist">
      {getTracksList().map((track) => (
        <Track
          key={track.id}
          song={track.song}
          author={track.author}
          album={track.album}
          moreInfo={track.moreInfo}
          time={track.time}
        />
      ))}
    </div>
  )
}

export default Playlist
