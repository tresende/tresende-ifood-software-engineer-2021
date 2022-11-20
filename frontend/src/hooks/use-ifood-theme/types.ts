import { ReactNode } from 'react'

export type IFoodTheme = 'italian' | 'default'

export type IFoodThemeContextData = {
  italianMode: boolean
  changeTheme: () => void
}

export type IFoodThemeProviderProps = {
  children: ReactNode
}
