import { useState } from 'react'
import { ButtonForFilter } from '../AuthorButtonForFilter/ButtonForFilter'
import * as S from './FilterBar.styled'

export function FilterBar({ trackList }) {
  const authorList = trackList.map((track) => ({
    info: track.author,
    id: track.id,
  }))

  const yearsList = trackList.map((track) => ({
    info: track.release_date,
    id: track.id,
  }))

  const genresList = trackList.map((track) => ({
    info: track.genre,
    id: track.id,
  }))

  const [isVisibleFirst, setVisibilityFirst] = useState(false)
  const [isVisibleSecond, setVisibilitySecond] = useState(false)
  const [isVisibleThird, setVisibilityThird] = useState(false)
  const [selected, setSelected] = useState(0)

  return (
    <S.CenterblockFilter>
      <S.FilterWrapper>
        <S.FilterTitle>Искать по:</S.FilterTitle>
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
      </S.FilterWrapper>
    </S.CenterblockFilter>
  )
}
