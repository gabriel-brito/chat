import { MouseEventHandler, ReactNode } from 'react'
import * as S from './styles'

export type ButtonProps = {
  children: ReactNode
  func: MouseEventHandler<HTMLButtonElement>
}

const Button = ({ children, func }: ButtonProps) => (
  <S.Wrapper onClick={func}>{children}</S.Wrapper>
)

export default Button
