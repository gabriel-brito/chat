import * as S from './styles'
import { ChangeEventHandler, KeyboardEventHandler } from 'react'

export type InputProps = {
  iSNicknameInput?: boolean
  placeholder?: string
  keyBoardFunc?: KeyboardEventHandler<HTMLInputElement>
  changeValueFunc?: ChangeEventHandler<HTMLInputElement>
  value?: string
}

const Input = ({
  changeValueFunc,
  iSNicknameInput = false,
  keyBoardFunc,
  placeholder = 'Type here to chat',
  value
}: InputProps) => (
  <S.Wrapper
    aria-label="Input"
    value={value}
    autoFocus={!iSNicknameInput}
    iSNicknameInput={iSNicknameInput}
    onKeyPress={keyBoardFunc}
    onChange={changeValueFunc}
    placeholder={placeholder}
  />
)

export default Input
