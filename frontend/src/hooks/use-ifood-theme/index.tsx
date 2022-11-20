/* eslint-disable @typescript-eslint/no-empty-function */
import { useContext, createContext, useState } from 'react'
import { IFoodTheme, IFoodThemeContextData, IFoodThemeProviderProps } from './types'

const defaultValues: IFoodThemeContextData = {
  changeTheme: () => {},
  italianMode: false
}

export const IFoodThemeContext = createContext<IFoodThemeContextData>(defaultValues)

const IFoodThemeProvider = ({ children }: IFoodThemeProviderProps) => {
  const [theme, setTheme] = useState<IFoodTheme>('default')
  const changeTheme = () => setTheme(theme === 'default' ? 'italian' : 'default')

  const italianMode = theme === 'italian'
  return (
    <IFoodThemeContext.Provider
      value={{
        changeTheme,
        italianMode
      }}
    >
      {children}
    </IFoodThemeContext.Provider>
  )
}

const useIFoodTheme = () => useContext(IFoodThemeContext)

export { IFoodThemeProvider, useIFoodTheme }
