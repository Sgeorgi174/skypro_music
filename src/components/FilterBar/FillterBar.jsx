import { useState } from 'react'
import ButtonForFilter from '../AuthorButtonForFilter/ButtonForFilter'
import getTracksList from '../../modules/getTrackList'

function FilterBar() {
  const authorList = getTracksList().map((track) => ({
    info: track.author,
    id: track.id,
  }))

  const yearsList = [
    { id: '0', info: '2001' },
    { id: '1', info: '2005' },
    { id: '2', info: '1987' },
    { id: '3', info: '1994' },
  ]

  const genresList = [
    { id: '0', info: 'хип-хоп' },
    { id: '1', info: 'классика' },
    { id: '2', info: 'рок' },
    { id: '3', info: 'танцевальная' },
  ]

  const [isVisibleFirst, setVisibilityFirst] = useState(false)
  const [isVisibleSecond, setVisibilitySecond] = useState(false)
  const [isVisibleThird, setVisibilityThird] = useState(false)

  return (
    <div className="centerblock__filter filter">
      <div className="filter__wrapper">
        <div className="filter__title">Искать по:</div>

        <ButtonForFilter
          setVisibility={() => {
            setVisibilityFirst(true)
            setVisibilitySecond(false)
            setVisibilityThird(false)
          }}
          isVisible={isVisibleFirst}
          buttonName="исполнителю"
          list={authorList}
        />

        <ButtonForFilter
          setVisibility={() => {
            setVisibilityFirst(false)
            setVisibilitySecond(true)
            setVisibilityThird(false)
          }}
          isVisible={isVisibleSecond}
          buttonName="году выпуска"
          list={yearsList}
        />

        <ButtonForFilter
          setVisibility={() => {
            setVisibilityFirst(false)
            setVisibilitySecond(false)
            setVisibilityThird(true)
          }}
          isVisible={isVisibleThird}
          buttonName="жанру"
          list={genresList}
        />
      </div>
    </div>
  )
}

export default FilterBar
