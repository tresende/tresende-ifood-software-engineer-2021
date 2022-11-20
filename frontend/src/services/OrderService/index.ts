import Axios from 'axios'
import { objectToQuerystring } from '../Util'
import { Filter } from '../../types'

const BASE_API_URL = process.env.REACT_APP_BASE_API_URL as string

const SearchOrders = async (filterParameters: Filter) => {
  const queryString = objectToQuerystring(filterParameters)
  const { data } = await Axios.get(`${BASE_API_URL}/order-service${queryString}`)
  return data
}

export { SearchOrders }
