import { formatDate, formatCurrency, objectToQuerystring } from '.'

describe('formatDate', () => {
  it('should format date formatDate', () => {
    const formmatedDate = formatDate('2021-10-10')

    expect(formmatedDate).toBe('10/9/2021')
  })
})

describe('formatCurrency', () => {
  it('should format currency string', () => {
    const formmatedcurrency = formatCurrency(100.99)

    expect(formmatedcurrency).toBe('$100.99')
  })
})

describe('objectToQuerystring', () => {
  it('should convert object into queryString', () => {
    const formmatedQuerystring = objectToQuerystring({
      a: 1,
      b: '2'
    })

    expect(formmatedQuerystring).toBe('?a=1&b=2')
  })
})
