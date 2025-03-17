const fs = require("fs");
//const input = fs.readFileSync("input.txt").toString().trim().split("\n");
//const input = fs.readFileSync("input2.txt").toString().trim().split("\n");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// 방향성, 가중치가 있는 최단거리, 다익스트라 알고리즘
solution = () => {
  const [V, E] = input[0].split(" ").map(Number);
  const K = +input[1];
  let graph = Array(V + 1)
    .fill(null)
    .map(() => []);
  for (let i = 0; i < E; i++) {
    const [u, v, w] = input[2 + i].split(" ").map(Number);
    graph[u].push([v, w]);
  }

  return Dikjstra(graph, K)
    .slice(1)
    .forEach((v) => console.log(v === Infinity ? "INF" : v));
};

const Dikjstra = (graph, start) => {
  const dist = Array(graph.length).fill(Infinity);
  dist[start] = 0;
  let pq = new minHeap();
  pq.push([0, start]);

  while (!pq.isEmpty()) {
    const [currentDist, currentNode] = pq.pop();
    if (currentDist > dist[currentNode]) continue;

    for (const [nextNode, weight] of graph[currentNode]) {
      const newDist = currentDist + weight;
      if (newDist < dist[nextNode]) {
        dist[nextNode] = newDist;
        pq.push([newDist, nextNode]);
      }
    }
  }
  return dist;
};

// sort를 사용하면, 매번 정렬하므로 메모리 소모 및 성능이슈 발생
// class MinHeap {
//   constructor() {
//     this.heap = [];
//   }

//   push(node) {
//     this.heap.push(node);
//     this.heap.sort((a, b) => a[0] - b[0]);
//   }

//   pop() {
//     return this.heap.shift();
//   }

//   isEmpty() {
//     return this.heap.length === 0;
//   }
// }

let minHeap = class {
  constructor() {
    this.heap = [];
  }

  top = () => {
    return this.length === 0 ? null : this.heap[0];
  };

  length = () => {
    return this.heap.length;
  };

  headIndex = (index) => {
    return Math.floor((index - 1) / 2);
  };

  leftIndex = (index) => {
    return index * 2 + 1;
  };

  rightIndex = (index) => {
    return index * 2 + 2;
  };

  swap = (a, b) => {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  };

  heapifyUp = () => {
    let index = this.length() - 1;
    while (0 < index) {
      //maxHeap > MinHeap
      let headIndex = this.headIndex(index);
      if (this.heap[headIndex] <= this.heap[index]) break;
      this.swap(headIndex, index);
      index = headIndex;
    }
  };

  push = ([dist, node]) => {
    this.heap.push([dist, node]);
    this.heapifyUp();
  };

  heapifyDown = () => {
    let index = 0;
    const length = this.heap.length;
    const element = this.heap[0];

    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      // 왼쪽 자식 비교
      if (leftChildIndex < length) {
        leftChild = this.heap[leftChildIndex];
        if (leftChild[0] < element[0]) swap = leftChildIndex;
      }

      // 오른쪽 자식 비교
      if (rightChildIndex < length) {
        rightChild = this.heap[rightChildIndex];
        if (
          (swap === null && rightChild[0] < element[0]) ||
          (swap !== null && rightChild[0] < leftChild[0])
        ) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) break;

      this.heap[index] = this.heap[swap];
      this.heap[swap] = element;
      index = swap;
    }
  };

  pop = () => {
    if (this.heap.length === 0) return null;

    const min = this.heap[0];
    const last = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = last;
      this.heapifyDown();
    }
    return min;
  };

  showHeap = () => {
    return [...this.heap];
  };

  isEmpty = () => {
    return this.heap.length === 0;
  };
};

solution();
