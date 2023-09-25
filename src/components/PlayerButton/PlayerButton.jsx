function PlayerButton(props) {
  return (
    <div className={`player__btn-${props.buttonName} _btn`}>
      <svg
        className={`player__btn-${props.buttonName}-svg alt="${props.buttonName}`}
      >
        <use xlinkHref={`img/icon/sprite.svg#icon-${props.buttonName}`} />
      </svg>
    </div>
  )
}

export default PlayerButton
