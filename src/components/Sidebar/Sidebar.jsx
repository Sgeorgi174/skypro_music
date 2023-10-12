import { MyProfile } from '../MyProfile/MyProfile'
import * as S from './SideBar.styled'

export function Sidebar({ isLoading }) {
  return (
    <S.MainSidebar>
      <MyProfile />
      <S.SideBarBlock>
        <S.SideBarList>
          <S.SideBarItem>
            {isLoading ? (
              <S.Skeletons />
            ) : (
              <S.SideBarLink href="/#">
                <S.SideBarImg src="img/playlist01.png" alt="day's playlist" />
              </S.SideBarLink>
            )}
          </S.SideBarItem>
          <S.SideBarItem>
            {isLoading ? (
              <S.Skeletons />
            ) : (
              <S.SideBarLink href="/#">
                <S.SideBarImg src="img/playlist02.png" alt="day's playlist" />
              </S.SideBarLink>
            )}
          </S.SideBarItem>
          <S.SideBarItem>
            {isLoading ? (
              <S.Skeletons />
            ) : (
              <S.SideBarLink href="/#">
                <S.SideBarImg src="img/playlist03.png" alt="day's playlist" />
              </S.SideBarLink>
            )}
          </S.SideBarItem>
        </S.SideBarList>
      </S.SideBarBlock>
    </S.MainSidebar>
  )
}
