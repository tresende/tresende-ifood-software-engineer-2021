import Axios from 'axios'
import { SearchOrders } from '.'

jest.mock('axios')

describe('OrderService', () => {
  const mockedGet = (Axios.get as jest.Mock).mockResolvedValue({
    data: {}
  })

  it('should call the get api without parameters', async () => {
    await SearchOrders({})

    expect(mockedGet).toBeCalledWith('http://localhost:5555/order-service')
  })

  it('should call the get api with parameters', async () => {
    await SearchOrders({ mail: 'jdoe@gmail.com' })

    expect(mockedGet).toBeCalledWith('http://localhost:5555/order-service?mail=jdoe%40gmail.com')
  })
})
