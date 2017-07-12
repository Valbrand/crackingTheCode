const permCheck = require('./permCheck')

describe('permutation check function', () => {
  it('should return true if array is a permutation', () => {
    expect(permCheck([1, 2, 3])).toBe(1)
    expect(permCheck([1])).toBe(1)
    expect(permCheck([4, 2, 1, 3])).toBe(1)
  })

  it('should return false if array is not a permutation', () => {
    expect(permCheck([2])).toBe(0)
    expect(permCheck([1, 2, 4])).toBe(0)
    expect(permCheck([1, 4, 1])).toBe(0)
    expect(permCheck([2, 2, 2])).toBe(0)
  })
})
