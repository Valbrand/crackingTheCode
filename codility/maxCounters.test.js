const maxCounters = require('./maxCounters')

describe('max counters function', () => {
  it('increments a counter on a counter command', () => {
    expect(maxCounters(2, [1])).toEqual([1, 0])
  })

  it('sets all counters to the maximum value on a maxCounters command', () => {
    expect(maxCounters(2, [1, 1, 3])).toEqual([2, 2])
  })

  it('correctly follows a chain of commands', () => {
    expect(maxCounters(5, [3, 4, 4, 6, 1, 4, 4])).toEqual([3, 2, 2, 4, 2])
    expect(maxCounters(3, [])).toEqual([0, 0, 0])
  })
})
