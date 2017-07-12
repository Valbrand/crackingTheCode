const permMissingElem = require('./permMissingElem')

describe('permutation missing element function', () => {
  it('should return the missing element from the array permutation', () => {
    expect(permMissingElem([4, 2, 3])).toBe(1)
    expect(permMissingElem([1, 3, 4])).toBe(2)
    expect(permMissingElem([1, 2, 4])).toBe(3)
    expect(permMissingElem([3, 2, 1])).toBe(4)
    expect(permMissingElem([])).toBe(1)
  })
})
