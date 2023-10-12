import styled from 'styled-components'

export const FilterBox = styled.div`
  position: relative;
`

export const FilterButton = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid #ffffff;
  border-radius: 60px;
  padding: 6px 20px;
  ${(props) =>
    props.selected === props.itemID
      ? `  border-color: #ad61ff; color: #ad61ff;`
      : ''}
`

export const FilterDropdownToggle = styled.ul`
  position: absolute;
  margin-top: 10px;
  left: 0;
  top: 35px;
  padding: 1em 1em;
  background: #0e0e0e;
  border-radius: 7px;
  width: 300px;
  height: 350px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 25px;
  border: #a8a8a8 1px solid;
  z-index: 100;
  &::-webkit-scrollbar {
    width: 5px; /* ширина для вертикального скролла */
    border-radius: 25px;
    background-color: #838383;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ad61ff;
    border-radius: 20px;
  }
  &
`

export const FilterDropdownItem = styled.a`
  color: #ffffff;
  font-size: 18px;
  &:hover {
    color: #ad61ff;
    text-decoration: underline;
  }
`
