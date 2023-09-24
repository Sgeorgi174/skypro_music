import NextSongButton from '../NextSongButton/NextSongButton'
import PlaySongButton from '../PlaySongButton/PlaySongButton'
import PrevSongButton from '../PrevSongButton/PrevSongButton'
import RepeatSongButton from '../RepeatSongButton/RepeatSongButton'
import ShuffleSongsButton from '../ShuffleSongsButton/ShuffleSongsButton'

function PlayerControls() {
  return (
    <div className="player__controls">
      <PrevSongButton />
      <PlaySongButton />
      <NextSongButton />
      <RepeatSongButton />
      <ShuffleSongsButton />
    </div>
  )
}

export default PlayerControls
