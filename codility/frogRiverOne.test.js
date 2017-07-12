const frogRiverOne = require('./frogRiverOne')

describe('frogRiverOne function', () => {
  it('should return the minimum time when the frog is going to cross the river', () => {
    expect(frogRiverOne(5, [1, 3, 1, 4, 2, 3, 5, 4])).toBe(6)
    expect(frogRiverOne(5, [1, 2, 3, 4, 5, 1, 2, 3])).toBe(4)
    expect(frogRiverOne(3, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 3])).toBe(16)
    expect(frogRiverOne(3, [1, 2, 3])).toBe(2)
  })

  it ('should return -1 if it is not possible for the frog to cross the river', () => {
    expect(frogRiverOne(3, [1, 1, 1])).toBe(-1)
    expect(frogRiverOne(3, [])).toBe(-1)
    expect(frogRiverOne(3, [1, 3])).toBe(-1)
  })
})
