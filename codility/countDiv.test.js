const countDiv = require('./countDiv')

describe('countDiv function', () => {
  describe('returns the numbers divisible by K in the range', () => {
    test(`when the range's first element is divisible by K`, () => {
      expect(countDiv(6, 11, 2)).toBe(3)
      expect(countDiv(7, 11, 2)).toBe(2)
    })

    test(`when the range's last element is divisible by K`, () => {
      expect(countDiv(6, 12, 2)).toBe(4)
      expect(countDiv(7, 12, 2)).toBe(3)
    })

    test(`when neither of the range bounds are divisible by K`, () => {
      expect(countDiv(7, 11, 2)).toBe(2)
      expect(countDiv(11, 345, 17)).toBe(20)
    })
  })
})
