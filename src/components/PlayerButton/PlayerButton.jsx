import * as S from './PlayerButton.styles'

export function PlayerButton(props) {
  return (
    <S.PlayerBtn onClick={props.handleClick} $buttonName={props.$buttonName}>
      <S.PlayerBtnSvg
        $isLooping={props.$isLooping}
        $buttonName={props.$buttonName}
      >
        <use href={`img/icon/sprite.svg#icon-${props.$buttonName}`} />
      </S.PlayerBtnSvg>
    </S.PlayerBtn>
  )
}
