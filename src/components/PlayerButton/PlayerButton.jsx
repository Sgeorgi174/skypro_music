import * as S from './PlayerButton.styles'

export function PlayerButton(props) {
  return (
    <S.PlayerBtn buttonName={props.buttonName}>
      <S.PlayerBtnSvg buttonName={props.buttonName}>
        <use xlinkHref={`img/icon/sprite.svg#icon-${props.buttonName}`} />
      </S.PlayerBtnSvg>
    </S.PlayerBtn>
  )
}
