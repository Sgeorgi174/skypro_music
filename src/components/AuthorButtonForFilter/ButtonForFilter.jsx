import * as S from './ButtonForFilter.styled'

export function ButtonForFilter({
  buttonName,
  setVisibility,
  isVisible,
  list,
  selected,
  itemId,
}) {
  return (
    <S.FilterBox>
      <S.FilterButton
        onClick={setVisibility}
        role="button"
        className="_btn-text"
        selected={selected}
        itemID={itemId}
      >
        {buttonName}
      </S.FilterButton>
      {isVisible && (
        <S.FilterDropdownToggle>
          {list.map((item) => (
            <li key={item.id}>
              <S.FilterDropdownItem href="/#">{item.info}</S.FilterDropdownItem>
            </li>
          ))}
        </S.FilterDropdownToggle>
      )}
    </S.FilterBox>
  )
}
