import { useContext, useState } from 'react'
import * as S from './NavMenu.styled'
import { NavBurgerButton } from '../NavBurgerButton/NavBurgerButton'
import { NavButton } from '../NavButtons/NavButtons'
import { UserContext } from '../../contexts/useAuthContexts'

export function NavMenu() {
  const [isVilible, setVisibility] = useState(true)
  const user = useContext(UserContext)

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
            <NavButton
              handleClick={() => {
                user.logOut()
                user.setUser(null)
              }}
              $buttonName="Выйти"
              Link="/login"
            />
          </S.MenuList>
        )}
      </S.NavMenu>
    </S.MainNav>
  )
}
