import * as S from './ProgressBar.styled'

export function ProgressInput({ duration, progress, onChange }) {
  return (
    <S.ProgressInput
      type="range"
      min={0}
      max={duration || 0}
      value={progress}
      step={0.01}
      onChange={onChange}
      $color="#b672ff"
    />
  )
}
