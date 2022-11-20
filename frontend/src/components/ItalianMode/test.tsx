import { render } from '@testing-library/react'
import { useIFoodTheme } from 'hooks'

import ItalianMode from '.'

jest.mock('../../hooks')

describe('<ItalianMode />', () => {
  it('should take snapshot with italian mode', () => {
    ;(useIFoodTheme as jest.Mock).mockReturnValue({ italianMode: true })

    const { container } = render(<ItalianMode />)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should take snapshot with default mode', () => {
    ;(useIFoodTheme as jest.Mock).mockReturnValue({ italianMode: false })

    const { container } = render(<ItalianMode />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
