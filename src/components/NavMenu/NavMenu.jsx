import { useState } from 'react'
import * as S from './NavMenu.styled'
import { NavBurgerButton } from '../NavBurgerButton/NavBurgerButton'
import { NavButton } from '../NavButtons/NavButtons'

export function NavMenu() {
  const [isVilible, setVisibility] = useState(true)

  return (
    <S.MainNav>
      <S.NavLogo>
        <S.LogoImg src="img/logo.png" alt="logo" />
      </S.NavLogo>
      <NavBurgerButton
        handleClick={() => {
          setVisibility(!isVilible)
        }}
      />
      <S.NavMenu>
        {isVilible && (
          <S.MenuList>
            <NavButton $buttonName="Главное" Link="/" />
            <NavButton $buttonName="Мой плейлист" Link="/playlist" />
            <NavButton $buttonName="Войти" Link="/login" />
          </S.MenuList>
        )}
      </S.NavMenu>
    </S.MainNav>
  )
}
