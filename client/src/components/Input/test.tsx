import { fireEvent, render, screen } from '@testing-library/react'

import Input from '.'

describe('<Input />', () => {
  const handleFunc = jest.fn()

  it('should render the input by default and match snapshot', () => {
    const { container } = render(<Input />)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should call the function when user types', () => {
    render(<Input changeValueFunc={handleFunc} />)
    const input = screen.getByLabelText('Input')

    fireEvent.change(input, { target: { value: 'Hello there' } })

    expect(handleFunc).toHaveBeenCalledTimes(1)

    fireEvent.change(input, { target: { value: 'How are you going?' } })

    expect(handleFunc).toHaveBeenCalledTimes(2)
  })

  it('should render the nickname input and match snapshot', () => {
    const { container } = render(<Input iSNicknameInput />)

    expect(screen.getByLabelText('Input')).toHaveStyle({
      width: '6em'
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should call the function when user press Enter', () => {
    render(<Input keyBoardFunc={handleFunc} />)
    const input = screen.getByLabelText('Input')

    fireEvent.keyPress(input, { key: 'Enter' })

    expect(handleFunc).toHaveBeenCalled()
  })
})
