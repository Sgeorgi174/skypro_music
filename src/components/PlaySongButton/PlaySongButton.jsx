function PlaySongButton() {
  return (
    <div className="player__btn-play _btn">
      <svg className="player__btn-play-svg" alt="play">
        <use xlinkHref="img/icon/sprite.svg#icon-play" />
      </svg>
    </div>
  )
}

export default PlaySongButton
