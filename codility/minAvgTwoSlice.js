function solution (A) {
  let minimalAverageTuple = [(A[A.length - 2] + A[A.length - 1]) / 2, 2]
  let minimalAverageTupleStartingIndex = A.length - 2
  let currentIndexMinimalAverage = minimalAverageTuple

  for (let i = A.length - 3; i >= 0; i--) {
    const twoElementsSliceAverage = (A[i] + A[i + 1]) / 2
    const averageWithNextIndexMinimal = (A[i] + (currentIndexMinimalAverage[0] * currentIndexMinimalAverage[1])) / (currentIndexMinimalAverage[1] + 1)

    // if (averageWithNextIndexMinimal === twoElementsSliceAverage) {

    // } else if (averageWithNextIndexMinimal < twoElementsSliceAverage) {
    //   currentIndexMinimalAverage = [averageWithNextIndexMinimal, currentIndexMinimalAverage[1] + 1]
    // } else {
    //   currentIndexMinimalAverage = [twoElementsSliceAverage, 2]
    // }
    
    if (minimalAverageTupleStartingIndex === i + 1) {
      const averageWithCurrentMinimal = (A[i] + (minimalAverageTuple[0] * minimalAverageTuple[1])) / (minimalAverageTuple[1] + 1) 

      if (averageWithCurrentMinimal < twoElementsSliceAverage) {
        currentIndexMinimalAverage = [averageWithCurrentMinimal, minimalAverageTuple[1] + 1]
      } else {
        currentIndexMinimalAverage = [twoElementsSliceAverage, 2]
      }
    } else {
      currentIndexMinimalAverage = [twoElementsSliceAverage, 2]
    }

    if (currentIndexMinimalAverage[0] <= minimalAverageTuple[0]) {
      minimalAverageTuple = currentIndexMinimalAverage
      minimalAverageTupleStartingIndex = i
    }
  }

  return minimalAverageTupleStartingIndex
}

module.exports = solution
