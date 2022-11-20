import { renderHook } from '@testing-library/react-hooks'
import { ReactNode } from 'react'
import { act } from 'react-dom/test-utils'
import { useOrders, OrdersProvider } from '.'

const fakeData = {
  id: 1
}
jest.mock('../../services/OrderService', () => ({
  SearchOrders: () => [fakeData]
}))

describe('useOrders', () => {
  it('should loader all orders', async () => {
    const wrapper = ({ children }: { children: ReactNode }) => <OrdersProvider>{children}</OrdersProvider>

    const { result, waitForNextUpdate } = renderHook(() => useOrders(), {
      wrapper
    })

    expect(result.current.orders).toStrictEqual([])

    act(() => result.current.search())
    await waitForNextUpdate()

    expect(result.current.orders).toStrictEqual([fakeData])
  })
})
