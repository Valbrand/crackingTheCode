const singleSwap = require('./singleSwap')

describe('single swap function', () => {
  it('should return true for ordered arrays', () => {
    expect(singleSwap([1, 2, 3])).toBe(true)
    expect(singleSwap([1])).toBe(true)
    expect(singleSwap([])).toBe(true)
  })

  it('should return false for arrays that require more than one swap to be sorted', () => {
    expect(singleSwap([2, 1, 3, 4, 6, 5])).toBe(false)
    expect(singleSwap([1, 3, 2, 5, 4])).toBe(false)
  })

  it('should return true for arrays that require exactly one swap to be sorted', () => {
    expect(singleSwap([1, 3, 2, 4])).toBe(true)
    expect(singleSwap([1, 3, 2])).toBe(true)
    expect(singleSwap([1, 3, 2, 2, 2, 4])).toBe(true)
    expect(singleSwap([1, 4, 2, 3, 1, 5])).toBe(true)
    expect(singleSwap([2, 1, 3, 4])).toBe(true)
    expect(singleSwap([2, 1])).toBe(true)
  })
})
