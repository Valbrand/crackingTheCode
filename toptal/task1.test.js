const fn = require('./task1')

function createTreeNode(value) {
  if (value == null) {
    return null
  }

  return {
    x: value,
    l: null,
    r: null
  }
}

function createTree(representation = []) {
  const queue = [ [ null, null, representation ] ]
  let tree = null

  while (queue.length > 0) {
    const nextInQueue = queue.shift()

    const [ parent, direction, [ value, left = null, right = null ] ] = nextInQueue

    const treeNode = createTreeNode(value)

    if (parent == null) {
      tree = treeNode
    } else {
      parent[direction] = treeNode
    }

    if (left) {
      queue.push([ treeNode, 'l', left ])
    }

    if (right) {
      queue.push([ treeNode, 'r', right ])
    }
  }

  return tree
}

function createHugeTree(size) {
  let root = []
  let auxVar = root

  for (let i = 0; i < size; i++) {
    auxVar.push(i, auxVar = [], null)
  }

  return createTree(root)
}

describe('task 1', () => {
  it('returns 0 on an empty tree', () => {
    expect(fn(createTree())).toBe(0)
  })

  it('returns 1 on a tree that has only one element', () => {
    const tree = createTree([ 42, null, null ])

    expect(fn(tree)).toBe(1)
  })

  it('takes into account element repetition', () => {
    const tree = createTree([1, [2, [1, null, null], null ], [3, null, [1, [2, null, null], null]]])

    expect(fn(tree)).toBe(3)
  })

  it('handles huge trees', () => {
    const size = 1000000
    const tree = createHugeTree(size)

    expect(fn(tree)).toBe(size)
  })
})
