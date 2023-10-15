import * as S from './NavButtons.styled'

export function NavButton(props) {
  return (
    <S.MenuItem className="menu__item">
      <S.MenuLink href={props.Link}>{props.Name}</S.MenuLink>
    </S.MenuItem>
  )
}
