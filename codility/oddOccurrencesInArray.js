function solution (A) {
  return A.reduce((result, element) => {
    return result ^ element
  }, 0)
}

module.exports = solution
