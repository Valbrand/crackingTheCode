const passingCars = require('./passingCars')

describe('passingCars function', () => {
  it('returns zero if the array contains only cars going east', () => {
    expect(passingCars([0, 0])).toBe(0)
  })

  it('returns zero if the array contains only cars going west', () => {
    expect(passingCars([1, 1])).toBe(0)
  })

  it('returns -1 if the amount of passing cars exceed 1,000,000,000', () => {
    const zeroes = Array(10001).fill(0)
    const ones = Array(100000).fill(1)
    const input = zeroes.concat(ones)

    expect(passingCars(input)).toBe(-1)
  })

  it('returns the number of passing cars when there are cars going in both directions', () => {
    expect(passingCars([0, 1])).toBe(1)
    expect(passingCars([0, 1, 0, 1, 1])).toBe(5)
    expect(passingCars([1, 0, 0, 1, 0, 1, 1])).toBe(8)
  })
})