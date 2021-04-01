import { ChangeEvent, KeyboardEvent, useState } from 'react'
import { v4 } from 'uuid'

import Screen from 'components/Screen'
import Button from 'components/Button'
import Input from 'components/Input'

export type MessageProps = {
  message: string
  user: string
  id: string
}

import * as S from './styles'

const userId = v4()

const HomeTemplate = () => {
  const [nickname, setNickname] = useState('Guest')
  const [messages, setMessages] = useState<MessageProps[]>([])
  const [message, setMessage] = useState('')

  const handleNickname = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      const nickname = event.currentTarget.value.trim()

      setNickname(nickname)

      event.currentTarget.value = ''
    }
  }

  const createMessageToBeSent = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage(event.currentTarget.value)
  }

  const sendMessage = (message: string, id: string, user: string) => {
    if (message.trim()) {
      setMessages([...messages, { message, id, user }])

      setMessage('')
    }
  }

  const handleSendMessage = () => sendMessage(message, userId, nickname)
  const keyboardSendMessage = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      sendMessage(message, userId, nickname)
    }
  }

  return (
    <S.HomeWrapper>
      <S.ChatWrapper>
        <Screen messages={messages} userId={userId} />
        <S.ChatFooter>
          <S.InputsWrapper>
            <Input
              keyBoardFunc={handleNickname}
              iSNicknameInput
              placeholder={nickname}
            />
            <Input
              keyBoardFunc={keyboardSendMessage}
              changeValueFunc={createMessageToBeSent}
              value={message}
            />
          </S.InputsWrapper>
          <Button func={handleSendMessage}>Send</Button>
        </S.ChatFooter>
      </S.ChatWrapper>
    </S.HomeWrapper>
  )
}

export default HomeTemplate
