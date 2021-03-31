import styled, { css } from 'styled-components'
import { MessageProps } from '.'

export const Wrapper = styled.p<MessageProps>`
  ${({ fromUser }) => css`
    background-color: ${fromUser ? '#c3e88d' : '#89ddff'};
    border-radius: 3px;
    border: ${fromUser ? '1px solid #82be27' : '1px solid #1abeff'};
    display: inline-block;
    font-size: 1.6em;
    padding: 5px 10px;
  `}
`
