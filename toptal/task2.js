// quantos numeros são "similares" a N? (permutação de digitos, tem que [des]considerar zeros à esquerda)

function solution (N) {
  const digitsCount = characterCount(N)

  return combinations(digitsCount) - combinationsStartingWithZero(digitsCount)
}

function characterCount (N) {
  const nString = N.toString(10)
  const count = { totalLength: nString.length, '0': 0 }

  for (let i = 0; i < nString.length; i++) {
    const currentChar = nString.charAt(i)

    if (count[currentChar]) {
      count[currentChar] += 1
    } else {
      count[currentChar] = 1
    }
  }

  return count
}

function combinations (countObject) {
  let repetitionFactor = 1

  for (let i = 0; i <= 9; i++) {
    const n = countObject[i] || 0

    if (n > 0) {
      repetitionFactor *= factorial(n)
    }
  }

  return factorial(countObject.totalLength) / repetitionFactor
}

function combinationsStartingWithZero(countObject) {
  if (countObject[0] === 0) {
    return 0
  }

  let repetitionFactor = factorial(countObject[0] - 1)

  for (let i = 1; i <= 9; i++) {
    const n = countObject[i] || 0

    if (n > 0) {
      repetitionFactor *= factorial(n)
    }
  }

  return factorial(countObject.totalLength - 1) / repetitionFactor
}

const factorial = (() => {
  const memoizationHelper = {
    '0': 1
  }

  return function innerFactorial (n) {
    if (!memoizationHelper[n]) {
      memoizationHelper[n] = n * innerFactorial(n - 1)
    }

    return memoizationHelper[n]
  }
})()

module.exports = solution
