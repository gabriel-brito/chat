import { render, screen } from '@testing-library/react'

import Message from '.'

describe('<Message />', () => {
  it('should render the message by default', () => {
    const { container } = render(<Message fromUser>Hello there!</Message>)

    expect(screen.getByText('Hello there!')).toBeInTheDocument()

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        background-color: #c3e88d;
        border-radius: 3px;
        border: 1px solid #82be27;
        display: inline-block;
        font-size: 1.6em;
        padding: 5px 10px;
      }

      <p
        class="c0"
      >
        Hello there!
      </p>
    `)
  })

  it('should render the message with a blue background when is not from the user and match snapshot', () => {
    render(<Message fromUser={false}>Hello there!</Message>)

    expect(screen.getByText('Hello there!')).toHaveStyle({
      backgroundColor: '#89ddff'
    })

    expect(screen.getByText('Hello there!')).toMatchInlineSnapshot(`
      .c0 {
        background-color: #89ddff;
        border-radius: 3px;
        border: 1px solid #1abeff;
        display: inline-block;
        font-size: 1.6em;
        padding: 5px 10px;
      }

      <p
        class="c0"
      >
        Hello there!
      </p>
    `)
  })
})
