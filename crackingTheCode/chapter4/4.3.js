/**
 * Given a sorted (increasingorder) array with unique integer elements, write an algorithm to createa binary search tree with minimal height.
 */

function BSTfromOrderedArray (array) {
  return createTreeNodeFromArray(array, 0, array.length - 1)
}

function createTreeNodeFromArray (array, startIndex, endIndex) {
  if (endIndex < startIndex) {
    return null
  }

  const midIndex = startIndex + Math.floor((endIndex - startIndex) / 2)

  return {
    value: array[midIndex],
    left: createTreeNodeFromArray(array, startIndex, midIndex - 1),
    right: createTreeNodeFromArray(array, midIndex + 1, endIndex)
  }
}

/**
 * Para um array com N elementos
 * 
 * Complexidade de tempo: O(N)
 * Todos os elementos do array são visitados uma vez pelo algoritmo
 * 
 * Complexidade de espaço: O(N)
 * Uma quantidade de espaço linear é usada pela pilha de recursão, e outra pela própria árvore construída
 */