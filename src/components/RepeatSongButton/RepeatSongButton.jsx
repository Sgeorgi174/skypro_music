function RepeatSongButton() {
  return (
    <div className="player__btn-repeat _btn-icon">
      <svg className="player__btn-repeat-svg" alt="repeat">
        <use xlinkHref="img/icon/sprite.svg#icon-repeat" />
      </svg>
    </div>
  )
}

export default RepeatSongButton
