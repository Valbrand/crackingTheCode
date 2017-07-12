function solution (X, A) {
  let timeTracker = {}
  let filledPositions = 0
  let neededTime = -1

  A.forEach((position, index) => {
    if (timeTracker[position] === undefined) {
      timeTracker[position] = index
      neededTime = index
      filledPositions += 1
    }
  })

  if (filledPositions < X) {
    return -1
  }

  return neededTime
}

module.exports = solution
