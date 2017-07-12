function solution (A, K) {
  if (A.length <= 1 || K === A.length) {
    return A
  }

  const result = []

  A.forEach((item, index) => {
    result[(index + K) % A.length] = A[index]
  })

  return result
}

module.exports = solution
