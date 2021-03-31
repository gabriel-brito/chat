import styled, { css } from 'styled-components'
import { MessageProps } from '.'

export const Wrapper = styled.p<MessageProps>`
  ${({ fromUser }) => css`
    background-color: ${fromUser ? '#c3e88d' : '#89ddff'};
    border-radius: 0.3em;
    border: ${fromUser ? '0.1em solid #82be27' : '0.1em  solid #1abeff'};
    display: inline-block;
    font-size: 1.6em;
    padding: 0.5em 1em;
    width: 80%;
  `}
`
