const tapeEquilibrium = require('./tapeEquilibrium')

describe('tape equilibrium function', () => {
  it('should return the minimum value of the partition differences', () => {
    expect(tapeEquilibrium([1, 2])).toBe(1)
    expect(tapeEquilibrium([1, 1, 1, 1])).toBe(0)
    expect(tapeEquilibrium([1, 1, -1, -1])).toBe(2)
    expect(tapeEquilibrium([3, 1, 2, 4, 3])).toBe(1)
  })
})
