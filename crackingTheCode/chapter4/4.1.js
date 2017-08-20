/**
 * Implement a function to check if a binary tree is balanced. For the purposes of this question, a balanced tree is defined to be a tree such that the heights of the two subtrees of any node never differ by more than one.
 */

function isTreeBalanced (tree) {
  return Math.abs(height(tree.left) - height(tree.right)) <= 1
}

function height (tree) {
  if (tree == null) {
    return 0
  }

  let leftChildHeight = height(tree.left)
  let rightChildHeight = height(tree.right)

  return Math.max(leftChildHeight, rightChildHeight) + 1
}

/**
 * Para uma árvore com N nós:
 * Complexidade de espaço: O(N) devido à pilha de recursão
 * Complexidade de tempo: O(N) já que, para calcular a altura de uma subárvore, temos que calcular as alturas de suas duas subárvores filhas
 */