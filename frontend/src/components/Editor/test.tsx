import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Editor from '.'

describe('<Editor />', () => {
  it('should call onChange on type', async () => {
    const onChange = jest.fn()
    render(<Editor label="name" onChange={onChange} />)

    userEvent.type(screen.getByRole('textbox'), 'abc')

    await waitFor(() => expect(onChange).toBeCalledWith('abc'))
    expect(screen.getByLabelText('name')).toBeInTheDocument()
  })
})
