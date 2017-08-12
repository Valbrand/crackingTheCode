function solution (A) {
  let carsGoingWest = 0
  let passingCars = 0

  for (let i = A.length - 1; i >= 0; i--) {
    if (A[i] === 1) {
      carsGoingWest += 1
    } else {
      passingCars += carsGoingWest

      if (passingCars > 1000000000) {
        return -1
      }
    }
  }

  return passingCars
}

module.exports = solution