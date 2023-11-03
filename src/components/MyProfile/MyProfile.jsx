import { useContext } from 'react'
import { UserContext } from '../../contexts/useAuthContexts'
import { SidebarLogOutButton } from '../SidebarLogOutButton/SidebarLogOutButton'
import * as S from './MyProfile.styled'

export function MyProfile() {
  const user = useContext(UserContext)

  return (
    <S.SideBarPersonal>
      <S.SidebarPersonalName>{user.user.userName}</S.SidebarPersonalName>
      <SidebarLogOutButton />
    </S.SideBarPersonal>
  )
}
