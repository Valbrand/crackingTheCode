// maior numero de valores distintos que se pode encontrar numa árvore binária

function solution (T) {
  return distinctValuesInTreePath(T)
}

function distinctValuesInTreePath (tree) {
  const integerCounter = {}
  const dfsStack = [ { node: tree, distinctsInPath: 0 } ]
  let largestDistinctCount = 0

  while (dfsStack.length > 0) {
    const { decrement, node , distinctsInPath: distinctsSoFar } = dfsStack.pop()

    if (decrement != null) {
      integerCounter[decrement] -= 1
    } else if (node == null) {
      if (distinctsSoFar > largestDistinctCount) {
        largestDistinctCount = distinctsSoFar
      }
    } else {
      const { x, l, r } = node

      dfsStack.push({ decrement: x })

      integerCounter[x] = (integerCounter[x] || 0) + 1
      const distinctsInPath = distinctsSoFar + (integerCounter[x] === 1 ? 1 : 0)

      dfsStack.push({ node: l, distinctsInPath })
      dfsStack.push({ node: r, distinctsInPath })
    }
  }

  return largestDistinctCount
}

module.exports = solution
