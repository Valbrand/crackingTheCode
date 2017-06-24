const binaryGap = require('./binaryGap')

describe('binaryGap function', () => {
  it('returns the correct length of the greatest binary gap for a number', () => {
    expect(binaryGap(parseInt('111', 2))).toBe(0)
    expect(binaryGap(parseInt('1', 2))).toBe(0)
    expect(binaryGap(parseInt('1111111111111111111111111111111', 2))).toBe(0)
    expect(binaryGap(parseInt('10', 2))).toBe(0)
    expect(binaryGap(parseInt('101', 2))).toBe(1)
    expect(binaryGap(parseInt('1010001', 2))).toBe(3)
    expect(binaryGap(parseInt('1010001001', 2))).toBe(3)
    expect(binaryGap(parseInt('10001001', 2))).toBe(3)
  })
})
