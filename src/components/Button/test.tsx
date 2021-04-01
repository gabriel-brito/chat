import { fireEvent, render, screen } from '@testing-library/react'

import Button from '.'

describe('<Button />', () => {
  const handleClick = jest.fn()

  it('should match snapshot', () => {
    const { container } = render(<Button func={handleClick}>Send</Button>)

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        background-color: #283350;
        border-radius: 0.3em;
        border: none;
        color: white;
        cursor: pointer;
        font-weight: bold;
        padding: 0.5em 1.5em;
      }

      @media (min-width:768px) {
        .c0 {
          width: 13em;
        }
      }

      <button
        class="c0"
      >
        Send
      </button>
    `)
  })

  it('should call action when clicked', () => {
    render(<Button func={handleClick}>Send</Button>)

    fireEvent.click(screen.getByRole('button', { name: /Send/i }))

    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
