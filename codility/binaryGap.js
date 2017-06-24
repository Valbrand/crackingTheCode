function binaryGap (n) {
  let bitmask = Math.pow(2, 30)
  let nCopy = n
  let isMeasuringGap = false
  let gapSize = 0
  let greatestGapSize = 0

  while (bitmask > 0) {
    if (isMeasuringGap) {
      if (checkBitmask(bitmask, nCopy)) {
        if (gapSize > greatestGapSize) {
          greatestGapSize = gapSize
        }

        gapSize = 0
      } else {
        gapSize += 1
      }
    } else if (checkBitmask(bitmask, nCopy)) {
      isMeasuringGap = true
    }

    bitmask >>= 1
  }

  return greatestGapSize
}

function checkBitmask (bitmask, n) {
  return (bitmask & n) !== 0
}

module.exports = binaryGap
