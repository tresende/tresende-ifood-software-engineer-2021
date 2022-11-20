/* eslint-disable @typescript-eslint/no-empty-function */
import { useContext, createContext, useState } from 'react'
import { OrdersContextData, OrdersProviderProps } from './types'
import { Filter, Order } from '../../types'
import { SearchOrders } from '../../services/OrderService'

const OrdersContextDefaultValues: OrdersContextData = {
  setFilter: () => {},
  search: () => {},
  orders: []
}

export const OrdersContext = createContext<OrdersContextData>(OrdersContextDefaultValues)

const OrdersProvider = ({ children }: OrdersProviderProps) => {
  const [orders, setOrders] = useState<Order[]>([])
  const [filter, setFilter] = useState<Filter>({})

  const search = async () => {
    try {
      const data = await SearchOrders(filter)
      setOrders(data)
    } catch {
      setOrders([])
    }
  }

  return (
    <OrdersContext.Provider
      value={{
        orders,
        setFilter,
        search
      }}
    >
      {children}
    </OrdersContext.Provider>
  )
}

const useOrders = () => useContext(OrdersContext)

export { OrdersProvider, useOrders }
