import { ChangeEvent, KeyboardEvent, useState, useEffect } from 'react'
import { v4 } from 'uuid'
import io from 'socket.io-client'

import Screen from 'components/Screen'
import Button from 'components/Button'
import Input from 'components/Input'
import { PaperPlane as PlaneIcon } from '@styled-icons/boxicons-solid/PaperPlane'

import * as S from './styles'

const _host = 'http://35.157.80.184/'
const socket = io(_host)
const userId = v4()

socket.on('connect', () =>
  console.log('[IO] Connect => A new connection has been established')
)

export type MessageProps = {
  message: string
  user: string
}

const HomeTemplate = () => {
  const [nickname, setNickname] = useState('Guest')
  const [messages, setMessages] = useState<MessageProps[]>([])
  const [message, setMessage] = useState('')

  useEffect(() => {
    const handleNewMessage = (newMessage: MessageProps) =>
      setMessages([...messages, newMessage])

    socket.on('message', handleNewMessage)

    return () => socket.off('message', handleNewMessage)
  }, [messages])

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
      socket.emit('message', {
        id,
        message,
        user
      })

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
        <Screen messages={messages} nickname={nickname} />
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
          <Button func={handleSendMessage}>
            <PlaneIcon size="32" />
          </Button>
        </S.ChatFooter>
      </S.ChatWrapper>
    </S.HomeWrapper>
  )
}

export default HomeTemplate
