var fn = require('./task2')

describe('task 2', () => {
  it('returns 1 for a number with a single digit', () => {
    expect(fn(5)).toBe(1)
  })

  it('returns n! for a number with only n distinct digits', () => {
    expect(fn(1234)).toBe(24)
  })

  it('takes into account digit repetition', () => {
    expect(fn(1231)).toBe(12)
  })

  it('ignores permutations with zeroes at the beginning of the number', () => {
    expect(fn(12100)).toBe(18)
  })
})
