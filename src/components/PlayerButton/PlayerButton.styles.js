import styled from 'styled-components'

export const PlayerBtn = styled.div`
  padding: 5px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  cursor: pointer;
  ${(props) =>
    props.$buttonName === 'prev' ||
    props.$buttonName === 'play' ||
    props.$buttonName === 'pause'
      ? 'margin-right: 23px;'
      : ''}
  ${(props) =>
    props.$buttonName === 'next' && 'margin-right: 28px; fill: #a53939;'}
  ${(props) => props.$buttonName === 'repeat' && 'margin-right: 24px;'}
  ${(props) =>
    props.$buttonName === 'shuffle' &&
    'display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-align: center; -ms-flex-align: center; align-items: center;'}
`

export const PlayerBtnSvg = styled.svg`
  ${(props) =>
    props.$buttonName === 'prev' ? 'width: 15px; height: 14px;' : ''}
  ${(props) =>
    props.$buttonName === 'play' || props.$buttonName === 'pause'
      ? 'width: 22px; height: 20px; fill: #d9d9d9;'
      : ''}
${(props) =>
    props.$buttonName === 'next'
      ? 'width: 15px; height: 14px; fill: inherit; stroke: #d9d9d9;'
      : ''}
${(props) =>
    props.$buttonName === 'repeat'
      ? 'width: 18px; height: 12px; fill: transparent; stroke: #696969;'
      : ''}
${(props) =>
    props.$buttonName === 'repeat' && props.$isLooping
      ? 'width: 18px; height: 12px; fill: transparent; stroke: #b672ff;'
      : ''}
${(props) =>
    props.$buttonName === 'shuffle'
      ? 'width: 19px; height: 12px; fill: transparent; stroke: #696969;'
      : ''}
`
