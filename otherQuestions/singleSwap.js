function singleSwap (array) {
  const [ arrayIsSorted, errors ] = arrayAnalysis(array)

  if (arrayIsSorted) {
    return true
  }

  if (errors.length > 1) return false

  const error = errors[0]

  const isSwappableRangeBeforeArrayBounds = array.length - error.swappableRange[1] > 1

  if (isSwappableRangeBeforeArrayBounds) {
    const elementAfterSwappableRange = array[error.swappableRange[1] + 1]

    if (array[error.swappableRange[0]] === array[error.swappableRange[1]]) {
      return true
    }

    if (elementAfterSwappableRange <= array[error.swappableRange[0]]) {
      return true
    }
  } else {
    if (array[error.swappableRange[0]] === array[error.swappableRange[1]]) {
      return true
    }
  }

  return false
}

function arrayAnalysis (array) {
  let currentError = null
  const errors = []
  let collectingError = false

  for (let i = 0; i < array.length; i++) {
    if (collectingError) {
      if (array[i] > array[currentError.start] || isSmallerThanPrevious(array, i)) {
        currentError.swappableRange.push(i - 1)

        collectingError = false
      } else if (i === array.length - 1) {
        currentError.swappableRange.push(i)
      }
    }

    if (!collectingError && array.length - i > 1 && isGreaterThanNext(array, i)) {
      errors.push(currentError = {
        start: i,
        swappableRange: [i + 1]
      })

      i += 1

      if (i === array.length - 1) currentError.swappableRange.push(i)

      collectingError = true
    }
  }

  const arrayIsSorted = errors.length === 0

  return [arrayIsSorted, errors]
}

function isGreaterThanNext (array, i) {
  return array[i] > array[i + 1]
}

function isSmallerThanPrevious (array, i) {
  return array[i] < array[i - 1]
}

module.exports = singleSwap
