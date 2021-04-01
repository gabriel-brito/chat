import { Story, Meta } from '@storybook/react/types-6-0'
import Message, { MessageProps } from '.'

export default {
  title: 'Message',
  component: Message,
  args: {
    children: 'Hello there!',
    fromUser: true
  }
} as Meta

export const Default: Story<MessageProps> = (args) => <Message {...args} />

export const FromOther: Story<MessageProps> = ({ children }) => (
  <Message fromUser={false}>{children}</Message>
)
