// quantos numeros são "similares" a N? (permutação de digitos, tem que [des]considerar zeros à esquerda)

function solution (N) {
  const digitsCount = characterCount(N)

  return combinations(digitsCount)
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

  for (let i = 1; i <= 9; i++) {
    const n = countObject[i] || 0

    if (n > 0) {
      repetitionFactor *= factorial(n)
    }
  }

  factorial(countObject.totalLength - countObject[0]) / repetitionFactor
}

function factorial (N) {
  let result = 1

  while (N > 0) {
    result *= N
    N -= 1
  }

  return result
}
