import Screen from 'components/Screen'
import Button from 'components/Button'
import Input from 'components/Input'

import * as S from './styles'

const HomeTemplate = () => {
  return (
    <S.HomeWrapper>
      <S.ChatWrapper>
        <Screen />
        <S.ChatFooter>
          <S.InputsWrapper>
            <Input iSNicknameInput placeholder="Guest" />
            <Input />
          </S.InputsWrapper>
          <Button>Send</Button>
        </S.ChatFooter>
      </S.ChatWrapper>
    </S.HomeWrapper>
  )
}

export default HomeTemplate
