import styled, { css } from 'styled-components'
import { InputProps } from '.'

const wrapperModifier = {
  nickname: () => css`
    border: none;
    background-color: #283350;
    color: white;
    width: 8em;

    &::placeholder {
      color: white;
      font-weight: 600;
      opacity: 1;
      text-align: center;
    }
  `
}

export const Wrapper = styled.input<Omit<InputProps, 'keyBoardFunc'>>`
  ${({ iSNicknameInput }) => css`
    border-radius: 0.3em;
    outline: none;
    padding: 0.5em;

    ${iSNicknameInput && wrapperModifier['nickname']}
  `}
`
