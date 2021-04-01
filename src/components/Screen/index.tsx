import Message from 'components/Message'
import { MessageProps } from 'templates/Home'
import * as S from './styles'

export type ScreenProps = {
  messages?: MessageProps[]
  nickname?: string
}

const Screen = ({ messages, nickname }: ScreenProps) => (
  <S.Wrapper>
    {messages?.map(({ message, user }, index) => {
      const isFromUser = nickname === user

      return (
        <S.MessageWrapper fromUser={isFromUser} key={index}>
          <Message fromUser={isFromUser}>
            {!isFromUser && `${user}: `}
            {message}
          </Message>
        </S.MessageWrapper>
      )
    })}
  </S.Wrapper>
)

export default Screen
