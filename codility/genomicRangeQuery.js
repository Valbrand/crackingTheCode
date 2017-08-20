function solution (S, P, Q) {
  const nucleotidesCountControl = createNucleotidesCountControl(S)
  
  const result = []

  for (let i = 0; i < P.length; i++) {
    const countDifference = nucleotidesCountDifference(nucleotidesCountControl, P[i], Q[i])
    const minimalImpactFactor = firstNonZeroElementIndex(countDifference) + 1

    result.push(minimalImpactFactor)
  }

  return result
}

function createNucleotidesCountControl (S) {
  const impactFactorMap = {
    A: 1,
    C: 2,
    G: 3,
    T: 4
  }
  let lastNucleotideCount = [0, 0, 0, 0]
  const nucleotidesCountControl = [lastNucleotideCount]

  for (let i = 0; i < S.length; i++) {
    const currentNucleotideImpactFactor = impactFactorMap[S.charAt(i)]

    lastNucleotideCount = lastNucleotideCount.map((value, index) => {
      if (index === currentNucleotideImpactFactor - 1) {
        return value + 1
      }

      return value
    })

    nucleotidesCountControl.push(lastNucleotideCount)
  }

  return nucleotidesCountControl
}

function nucleotidesCountDifference (countControl, i, j) {
  const countControlAtStart = countControl[i]
  const countControlAtEnd = countControl[j + 1]

  return [
    countControlAtEnd[0] - countControlAtStart[0],
    countControlAtEnd[1] - countControlAtStart[1],
    countControlAtEnd[2] - countControlAtStart[2],
    countControlAtEnd[3] - countControlAtStart[3],
  ]
}

function firstNonZeroElementIndex (array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== 0) {
      return i
    }
  }
}

module.exports = solution
