import { renderHook } from '@testing-library/react-hooks'
import { ReactNode } from 'react'
import { act } from 'react-dom/test-utils'

import { useIFoodTheme, IFoodThemeProvider } from '.'

describe('useIFoodTheme', () => {
  it('should change theme', () => {
    const wrapper = ({ children }: { children: ReactNode }) => <IFoodThemeProvider>{children}</IFoodThemeProvider>

    const { result } = renderHook(() => useIFoodTheme(), {
      wrapper
    })

    expect(result.current.italianMode).toBe(false)

    act(() => {
      result.current.changeTheme()
    })

    expect(result.current.italianMode).toBe(true)
  })
})
