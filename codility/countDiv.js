function solution (A, B, K) {
  return divisibleNumbersBefore(B, K, false) - divisibleNumbersBefore(A, K)
}

function divisibleNumbersBefore (n, factor, includeN = true) {
  const isNDivisible = (n % factor) === 0

  return Math.floor(n / factor) - (includeN && isNDivisible ? 1 : 0)
}

module.exports = solution
