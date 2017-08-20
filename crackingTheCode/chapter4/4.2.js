/**
 * Given a directed graph, design an algorithm to find out whether there is a route between two nodes.
 */

function routeExists (nodeA, nodeB) {
  const visitedNodes = new Set()
  const nodesToVisit = [nodeA]
  const currentNode;

  while (currentNode = nodesToVisit.pop()) {
    visitedNodes.add(currentNode)

    for (let i = 0; i < currentNode.edges.length; i++) {
      let adjacentNode = currentNode.edges[i]

      if (adjacentNode === nodeB) {
        return true
      }

      if (!visitedNodes.has(adjacentNode)) {
        nodesToVisit.push(adjacentNode)
      }
    }
  }

  return false
}

/**
 * Para um grafo com V vértices e E arestas
 * 
 * Complexidade de tempo: O(V + E)
 * Considerando que o algoritmo analisa cada aresta de cada vértice que ainda não visitou, no pior caso serão percorridos todos os vértices e todas as arestas até que o algoritmo termine sua execução
 * Complexidade de espaço: O(V)
 * O conjunto visitedNodes possuirá no máximo V elementos. O array nodesToVisit também, já que não se adiciona nós previamente visitados a ele.
 */