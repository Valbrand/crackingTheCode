// maior numero de valores distintos que se pode encontrar numa árvore binária

function solution (T) {
  return distinctValuesInTreePath(T)
}

function distinctValuesInTreePath (tree) {
  const decrementCounter = (n) => () => {
    integerCounter[n] -= 1
  }

  const traverseNode = (node, distinctsSoFar) => () => {
    if (node == null) {
      if (distinctsSoFar > largestDistinctCount) {
        largestDistinctCount = distinctsSoFar
      }
    } else {
      const { x, l, r } = node

      operationStack.push(decrementCounter(x))

      integerCounter[x] = (integerCounter[x] || 0) + 1
      const distinctsInPath = distinctsSoFar + (integerCounter[x] === 1 ? 1 : 0)

      operationStack.push(traverseNode(l, distinctsInPath))
      operationStack.push(traverseNode(r, distinctsInPath))
    }
  }

  const integerCounter = {}
  const operationStack = [ traverseNode(tree, 0) ]
  let largestDistinctCount = 0

  while (operationStack.length > 0) {
    const operation = operationStack.pop()

    operation()
  }

  return largestDistinctCount
}

module.exports = solution
