function solution (A) {
  const sortedPositives = A.filter(el => el > 0).sort((a, b) => a - b)

  let leastMissingInteger = 1

  for (let i = 0; i < sortedPositives.length; i++) {
    if (sortedPositives[i] > leastMissingInteger) {
      return leastMissingInteger
    } else if (sortedPositives[i] === leastMissingInteger) {
      leastMissingInteger += 1
    }
  }

  return leastMissingInteger
}

module.exports = solution
