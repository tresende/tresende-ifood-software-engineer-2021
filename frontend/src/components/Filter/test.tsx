import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Filter from '.'

const mockedSearch = jest.fn()
jest.mock('../../hooks', () => ({
  useOrders: () => ({
    search: mockedSearch
  })
}))

describe('<Editor />', () => {
  it('should call call on search', async () => {
    render(<Filter />)

    userEvent.click(
      screen.getByRole('button', {
        name: /Search/i
      })
    )

    await waitFor(() => expect(mockedSearch).toBeCalledTimes(1))
  })
})
