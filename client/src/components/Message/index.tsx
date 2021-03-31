import { ReactNode } from 'react'
import * as S from './styles'

export type MessageProps = {
  children: ReactNode
  fromUser: boolean
}

const Message = ({ children, fromUser }: MessageProps) => (
  <S.Wrapper fromUser={fromUser}>{children}</S.Wrapper>
)

export default Message
