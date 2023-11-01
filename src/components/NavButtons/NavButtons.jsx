import * as S from './NavButtons.styled'

export function NavButton(props) {
  return (
    <S.MenuItem className="menu__item">
      <S.MenuLink to={props.Link}>{props.$buttonName}</S.MenuLink>
    </S.MenuItem>
  )
}
