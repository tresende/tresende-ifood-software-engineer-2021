import { ReactNode } from 'react'
import { Order, Filter } from '../../types'

export type OrdersContextData = {
  orders: Order[]
  setFilter: (orders: Filter) => void
  search: () => void
}

export type OrdersProviderProps = {
  children: ReactNode
}
