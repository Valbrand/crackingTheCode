function solution (A) {
  let repetitionCounter = {}
  let sum = 0

  for (let i = 0; i < A.length; i++) {
    if (A[i] > A.length) {
      return 0
    }

    if (repetitionCounter[A[i]]) {
      return 0
    } else {
      repetitionCounter[A[i]] = true
    }

    sum += A[i]
  }

  const isPermutation = sum === (A.length * (A.length + 1) * 0.5)

  return isPermutation ? 1 : 0
}

module.exports = solution
