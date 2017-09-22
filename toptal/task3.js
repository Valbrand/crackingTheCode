// maior prefixo de uma string que também é um sufixo dessa string

function solution (S) {
  const candidates = initialCharMatches(S)
  let latestMatchFound = S.length
  let largestPreffixSuffix = 0

  for (let i = 1; i < S.length; i++) {
    const currentChar = S.charAt(i)

    for (let j = candidates.length - 1; j >= 0; j--) {
      const currentCandidate = candidates[j]
      const indexToCompare = currentCandidate[0] + i

      if (indexToCompare === latestMatchFound) {
        largestPreffixSuffix += currentCandidate[1]
        latestMatchFound = currentCandidate[0]
        candidates.splice(j, 1)
      } else if (currentChar !== S.charAt(indexToCompare)) {
        candidates.splice(j, 1)
      } else {
        currentCandidate[1] += 1
      }
    }
  }

  return largestPreffixSuffix
}

function initialCharMatches (S) {
  const result = []
  const initialChar = S.charAt(0)

  for (let i = 1; i < S.length; i++) {
    if (S.charAt(i) === initialChar) {
      result.push([i, 1])
    }
  }

  return result
}
