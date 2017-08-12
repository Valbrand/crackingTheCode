const minAvgTwoSlice = require('./minAvgTwoSlice')

describe('minAvgTwoSlice function', () => {
  it('returns the smallest starting index of the slice with minimal average value', () => {
    expect(minAvgTwoSlice([4, 2, 2, 5, 1, 5, 8])).toBe(1)
    expect(minAvgTwoSlice([10000, -10000])).toBe(0)
    expect(minAvgTwoSlice([-3, -5, -8, -4, -10])).toBe(2)
  })

  it('returns the smallest index when there\'s a tie', () => {
    expect(minAvgTwoSlice([0, 0, 1, 0, 0])).toBe(0)
  })
})