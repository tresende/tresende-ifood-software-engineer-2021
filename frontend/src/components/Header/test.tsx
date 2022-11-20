import { render } from '@testing-library/react'
import { useIFoodTheme } from 'hooks'

import Header from '.'

jest.mock('../../hooks')

describe('<Header />', () => {
  it('should take snapshot with italian mode', () => {
    ;(useIFoodTheme as jest.Mock).mockReturnValue({ italianMode: true })

    const { container } = render(<Header />)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should take snapshot with default mode', () => {
    ;(useIFoodTheme as jest.Mock).mockReturnValue({ italianMode: false })

    const { container } = render(<Header />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
