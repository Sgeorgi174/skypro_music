import * as S from './SidebarLogOutButton.styled'

export function SidebarLogOutButton() {
  return (
    <S.SidebarIcon>
      <svg alt="logout">
        <use xlinkHref="img/icon/sprite.svg#logout" />
      </svg>
    </S.SidebarIcon>
  )
}
