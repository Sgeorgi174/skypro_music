import { useContext } from 'react'
import * as S from './SidebarLogOutButton.styled'
import { UserContext } from '../../contexts/useAuthContexts'

export function SidebarLogOutButton() {
  const user = useContext(UserContext)
  return (
    <S.SidebarIcon
      onClick={() => {
        user.logOut()
        user.setUser(null)
      }}
    >
      <S.SidebarSvg alt="logout">
        <use xlinkHref="img/icon/sprite.svg#icon-logout" />
      </S.SidebarSvg>
    </S.SidebarIcon>
  )
}
