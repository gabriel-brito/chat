import { Story, Meta } from '@storybook/react/types-6-0'
import Screen, { ScreenProps } from '.'
import { v4 } from 'uuid'

export default {
  title: 'Screen',
  component: Screen
} as Meta

const messages = [
  { message: 'Hello there!', user: 'Gabriel' },
  { message: 'Hello!', id: 'id-2', user: 'Bot-1567' },
  { message: 'How are you doing today?', user: 'Gabriel' },
  {
    message: `I'm really good! and what about you?`,
    id: 'id-2',
    user: 'Bot-1567'
  },
  { message: `I'm great, thanks!`, user: 'Gabriel' },
  {
    message: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`,
    id: 'id-2',
    user: 'Bot-1567'
  }
]

export const Default: Story<ScreenProps> = () => (
  <div style={{ maxWidth: '35em', margin: '0 auto', height: '100vh' }}>
    <Screen />
  </div>
)

export const WithMessages: Story<ScreenProps> = () => (
  <div style={{ maxWidth: '35em', margin: '0 auto', height: '100vh' }}>
    <Screen nickname={'Gabriel'} messages={messages} />
  </div>
)
