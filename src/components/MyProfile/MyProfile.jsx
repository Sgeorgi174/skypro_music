import { SidebarLogOutButton } from '../SidebarLogOutButton/SidebarLogOutButton'
import * as S from './MyProfile.styled'

export function MyProfile() {
  return (
    <S.SideBarPersonal>
      <S.SidebarPersonalName>Sergey.Ivanov</S.SidebarPersonalName>
      <SidebarLogOutButton />
    </S.SideBarPersonal>
  )
}
