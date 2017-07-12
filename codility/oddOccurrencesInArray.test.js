const oddOccurrencesInArray = require('./oddOccurrencesInArray')

describe('oddOccurrencesInArray function', () => {
  it('should return the unpaired element in the array', () => {
    expect(oddOccurrencesInArray([1, 2, 2])).toBe(1)
    expect(oddOccurrencesInArray([1, 2, 2, 1, 3])).toBe(3)
    expect(oddOccurrencesInArray([1, 2, 1, 3, 2])).toBe(3)
    expect(oddOccurrencesInArray([1, 2, 1, 3, 2, 1, 2, 2, 1])).toBe(3)
    expect(oddOccurrencesInArray([1, 1, 1, 1, 1, 1, 2])).toBe(2)
  })
})
