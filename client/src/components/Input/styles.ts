import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { InputProps } from '.'

const wrapperModifier = {
  nickname: () => css`
    border-radius: 0.3em 0 0 0.3em;
    border-right: none;
    border-left: 0.1em solid black;
    color: white;
    cursor: pointer;
    margin-right: -0.1em;
    width: 6em;

    ${media.greaterThan('medium')`
      width: 6em;
    `}

    &::placeholder {
      color: black;
      font-weight: 600;
      opacity: 1;
      text-align: center;
    }
  `
}

export const Wrapper = styled.input<Omit<InputProps, 'keyBoardFunc'>>`
  ${({ iSNicknameInput }) => css`
    border-radius: 0 0.3em 0.3em 0;
    border: 0.1em solid black;
    border-left: none;
    outline: none;
    padding: 0.5em;

    ${media.greaterThan('medium')`
      width: 85%;
    `}

    ${iSNicknameInput && wrapperModifier['nickname']}
  `}
`
