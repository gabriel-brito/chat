import { Story, Meta } from '@storybook/react/types-6-0'
import Input, { InputProps } from '.'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Input',
  component: Input
} as Meta

export const Default: Story<InputProps> = (args) => (
  <Input {...args} changeValueFunc={action('type function')} />
)

export const Nickname: Story<InputProps> = () => (
  <Input
    keyBoardFunc={action('change nick name')}
    iSNicknameInput
    placeholder="Guest"
  />
)
