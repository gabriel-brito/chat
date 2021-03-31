import Message from 'components/Message'
import * as S from './styles'

type mockMessageProps = {
  message: string
  user: string
  id: string
}

export type ScreenProps = {
  messages?: mockMessageProps[]
  userId?: string
}

const Screen = ({ messages, userId }: ScreenProps) => (
  <S.Wrapper>
    {messages?.map(({ message, id, user }, index) => {
      const isFromUser = id === userId

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
