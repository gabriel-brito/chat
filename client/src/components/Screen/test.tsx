import { render } from '@testing-library/react'

import Screen from '.'

const messages = [
  { message: 'Hello there!', user: 'Gabriel' },
  { message: 'Hello!', user: 'Bot-1567' },
  { message: 'How are you doing today?', user: 'Gabriel' },
  { message: `I'm really good! and what about you?`, user: 'Bot-1567' },
  { message: `I'm great, thanks!`, user: 'Gabriel' },
  {
    message: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`,
    user: 'Bot-1567'
  }
]

describe('<Screen />', () => {
  it('should render the Screen and match Snapshot', () => {
    const { container } = render(<Screen />)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render a list if messages is not null', () => {
    const { getAllByRole } = render(<Screen messages={messages} />)

    const listItems = getAllByRole('listitem')

    expect(listItems).toHaveLength(6)
  })

  it('should render flex-end if the message is from the user', () => {
    const { getAllByRole } = render(
      <Screen nickname={'Gabriel'} messages={messages} />
    )

    const firstMessage = getAllByRole('listitem')[0]

    expect(firstMessage).toHaveStyle({ justifyContent: 'flex-end' })
  })
})
