const frogJmp = require('./frogJmp')

describe('frog jump function', () => {
  it('should return the required amount of jumps for the frog', () => {
    expect(frogJmp(10, 10, 5)).toBe(0)
    expect(frogJmp(10, 40, 10)).toBe(3)
    expect(frogJmp(10, 100, 20)).toBe(5)
    expect(frogJmp(10, 40, 50)).toBe(1)
  })
})
