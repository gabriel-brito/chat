import { Story, Meta } from '@storybook/react/types-6-0'
import Button, { ButtonProps } from '.'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'Send',
    func: action('Clicked')
  }
} as Meta

export const Default: Story<ButtonProps> = (args) => <Button {...args} />
