import * as S from './NavButtons.styled'

export function NavButton(props) {
  return (
    <S.MenuItem onClick={props.handleClick} className="menu__item">
      <S.MenuLink to={props.Link}>{props.$buttonName}</S.MenuLink>
    </S.MenuItem>
  )
}
