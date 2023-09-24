import Track from '../Track/Track'
import getTrackList from '../../modules/getTrackList'

function Playlist() {
  const trackList = getTrackList()
  return (
    <div className="content__playlist playlist">
      {trackList.map((track) => (
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
