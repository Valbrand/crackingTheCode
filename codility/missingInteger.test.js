const missingInteger = require('./missingInteger')

describe('missing integer function', () => {
  it('returns the least positive integer missing from the array', () => {
    expect(missingInteger([0])).toBe(1)
    expect(missingInteger([1, 2, 4])).toBe(3)
    expect(missingInteger([-10, 20000123])).toBe(1)
    expect(missingInteger([1, 2147483647])).toBe(2)
    expect(missingInteger([1, 3, 6, 4, 1, 2])).toBe(5)
  })
})
