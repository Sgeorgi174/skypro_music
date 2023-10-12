import * as S from './NavBurgerButton.styled'

export function NavBurgerButton({ handleClick }) {
  return (
    <S.NavBurger onClick={handleClick} role="button">
      <S.BurgerLine />
      <S.BurgerLine />
      <S.BurgerLine />
    </S.NavBurger>
  )
}
