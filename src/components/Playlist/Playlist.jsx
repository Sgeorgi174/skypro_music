import Track from '../Track/Track'
import getTracksList from '../../modules/getTrackList'

function Playlist({ isLoading }) {
  return (
    <div className="content__playlist playlist">
      {getTracksList().map((track) => (
        <Track
          isLoading={isLoading}
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
