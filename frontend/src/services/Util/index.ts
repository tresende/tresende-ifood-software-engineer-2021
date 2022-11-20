const getCurrentLanguage = () => {
  if (navigator.languages !== undefined) {
    return navigator.languages[0]
  }
  return navigator.language
}

const formatCurrency = (number: number) =>
  number.toLocaleString(getCurrentLanguage(), { style: 'currency', currency: 'USD' })

const formatDate = (value: string) =>
  new Intl.DateTimeFormat(getCurrentLanguage()).format(new Date(value.split('+')[0]))

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const objectToQuerystring = (obj: any) => {
  if (!obj) return ''
  return Object.keys(obj).reduce((str, key, i) => {
    const delimiter = i === 0 ? '?' : '&'
    const newKey = encodeURIComponent(key)
    const val = encodeURIComponent(obj[newKey])
    return [str, delimiter, newKey, '=', val].join('')
  }, '')
}

export { getCurrentLanguage, formatCurrency, formatDate, objectToQuerystring }
