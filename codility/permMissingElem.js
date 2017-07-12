function solution (A) {
  const sum = A.reduce((sum, element) => sum + element, 0)
  const sumPlusMissing = (A.length + 1) * (A.length + 2) * 0.5

  return sumPlusMissing - sum
}

module.exports = solution
