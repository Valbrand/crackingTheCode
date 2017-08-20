const genomicRangeQuery = require('./genomicRangeQuery')

describe('genomicRangeQuery function', () => {
  it('returns correct results for the problem\'s sample input', () => {
    const S = 'CAGCCTA'
    const P = [2, 5, 0]
    const Q = [4, 5, 6]

    expect(genomicRangeQuery(S, P, Q)).toEqual([2, 4, 1])
  })
})