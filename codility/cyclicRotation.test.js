const cyclicRotation = require('./cyclicRotation')

describe('cyclic rotation function', () => {
  it('should rotate arrays appropriately', () => {
    expect(cyclicRotation([], 10)).toEqual([])
    expect(cyclicRotation([1], 3)).toEqual([1])
    expect(cyclicRotation([1, 2, 3], 1)).toEqual([3, 1, 2])
    expect(cyclicRotation([1, 2, 3], 3)).toEqual([1, 2, 3])
    expect(cyclicRotation([1, 4, 5, 3], 2)).toEqual([5, 3, 1, 4])
  })
})
