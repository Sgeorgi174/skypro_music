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
  const [selected, setSelected] = useState(0)

  return (
    <div className="centerblock__filter filter">
      <div className="filter__wrapper">
        <div className="filter__title">Искать по:</div>
        <ButtonForFilter
          setVisibility={() => {
            setVisibilityFirst(!isVisibleFirst)
            setVisibilitySecond(false)
            setVisibilityThird(false)
            setSelected(1)
            if (selected === 1) {
              setSelected(0)
            }
          }}
          isVisible={isVisibleFirst}
          buttonName="исполнителю"
          list={authorList}
          itemId={1}
          selected={selected}
        />

        <ButtonForFilter
          setVisibility={() => {
            setVisibilityFirst(false)
            setVisibilitySecond(!isVisibleSecond)
            setVisibilityThird(false)
            setSelected(2)
            if (selected === 2) {
              setSelected(0)
            }
          }}
          isVisible={isVisibleSecond}
          buttonName="году выпуска"
          list={yearsList}
          itemId={2}
          selected={selected}
        />

        <ButtonForFilter
          setVisibility={() => {
            setVisibilityFirst(false)
            setVisibilitySecond(false)
            setVisibilityThird(!isVisibleThird)
            setSelected(3)
            if (selected === 3) {
              setSelected(0)
            }
          }}
          isVisible={isVisibleThird}
          buttonName="жанру"
          list={genresList}
          itemId={3}
          selected={selected}
        />
      </div>
    </div>
  )
}

export default FilterBar
