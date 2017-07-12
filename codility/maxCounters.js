function solution (N, A) {
  const counters = initializeCounters(N)
  let greatestCounter = 0
  let lastMaxCountersCommand = 0

  A.forEach((command, index) => {
    if (command <= N) {
      const currentCounter = Math.max(counters[command - 1], lastMaxCountersCommand) + 1
      greatestCounter = Math.max(greatestCounter, currentCounter)

      counters[command - 1] = currentCounter
    } else {
      lastMaxCountersCommand = greatestCounter
    }
  })

  return counters.map(el => Math.max(el, lastMaxCountersCommand))
}

function initializeCounters (N) {
  const counters = []

  for (let i = 0; i < N; i++) {
    counters.push(0)
  }

  return counters
}

module.exports = solution
