// maior numero de valores distintos que se pode encontrar numa árvore binária

function solution (T) {
  return distinctValuesInTreePath(T)
}

function distinctValuesInTreePath (tree, count = { count: 0 }) {
  if (tree === null) {
    return count.count
  }

  if (count[tree.x] == null) {
    count.count += 1
    count[tree.x] = true
  }

  const leftCount = distinctValuesInTreePath(tree.l, copy(count))
  const rightCount = distinctValuesInTreePath(tree.r, copy(count))

  return Math.max(leftCount, rightCount)
}

function copy(obj) {
  return Object.assign({}, obj)
}
