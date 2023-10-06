function Track(props) {
  return (
    <div className="playlist__item">
      <div className="playlist__track track">
        <div className="track__title">
          <div className="track__title-image">
            <svg className="track__title-svg" alt="music">
              <use xlinkHref="img/icon/sprite.svg#icon-note" />
            </svg>
          </div>
          <div
            className={`track__title-text ${
              props.isLoading ? 'skeletons' : ''
            }`}
          >
            <a
              className="track__title-link"
              style={props.isLoading ? { color: 'transparent' } : {}}
              href="http://"
            >
              {props.isLoading ? 'waitingTrack' : props.song}{' '}
              <span className="track__title-span">
                {props.isLoading ? '' : props.moreInfo}
              </span>
            </a>
          </div>
        </div>
        <div className={`track__author ${props.isLoading ? 'skeletons' : ''}`}>
          <a
            className="track__author-link"
            style={props.isLoading ? { color: 'transparent' } : {}}
            href="http://"
          >
            {props.isLoading ? 'waitingAuthor' : props.author}
          </a>
        </div>
        <div className={`track__album ${props.isLoading ? 'skeletons' : ''}`}>
          <a
            className="track__album-link"
            style={props.isLoading ? { color: 'transparent' } : {}}
            href="http://"
          >
            {props.isLoading ? 'waitingAlbum' : props.album}
          </a>
        </div>
        <div className="track__time">
          <svg className="track__time-svg" alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-like" />
          </svg>
          <span className="track__time-text">
            {props.isLoading ? '0:00' : props.time}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Track
