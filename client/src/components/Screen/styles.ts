import { MessageProps } from 'components/Message'
import styled, { css } from 'styled-components'

export const Wrapper = styled.ul`
  background-image: url('/img/chat-wallpaper.png');
  background-size: cover;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: auto;
  padding: 1em;
  width: 100%;
`

export const MessageWrapper = styled.li<Pick<MessageProps, 'fromUser'>>`
  ${({ fromUser }) => css`
    display: flex;
    justify-content: ${fromUser ? 'flex-end' : 'flex-start'};
    list-style: none;
    margin-bottom: 1em;
    width: 100%;
  `}
`
