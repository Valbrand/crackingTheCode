function solution (A) {
  let rightSum = A.reduce((sum, element) => sum + element, 0)
  let leftSum = 0
  let partitionDifference
  let smallestDifference = Infinity

  for (let i = 0; i < A.length - 1; i++) {
    leftSum += A[i]
    rightSum -= A[i]
    partitionDifference = Math.abs(rightSum - leftSum)

    if (partitionDifference < smallestDifference) {
      smallestDifference = partitionDifference
    }
  }

  return smallestDifference
}

module.exports = solution
