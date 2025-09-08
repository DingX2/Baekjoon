const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class MinHeap {
  constructor() {
    this.heap = [null]; //0번은 비워두기
  }
  get size() {
    return this.heap.length - 1;
  }
  peek() {
    return this.heap[1];
  }
  add(num) {
    this.heap.push(num);
    let i = this.heap.length - 1;

    while (i > 1) {
      let parent = Math.floor(i / 2);
      if (this.heap[parent] <= this.heap[i]) break;
      [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
      i = parent;
    }
  }
  pop() {
    if (this.size === 0) return null;
    if (this.size === 1) return this.heap.pop();

    const min = this.heap[1];
    this.heap[1] = this.heap.pop();
    let i = 1;
    while (true) {
      let left = 2 * i;
      let right = 2 * i + 1;
      let smallest = i;
      if (left <= this.size && this.heap[left] < this.heap[smallest])
        smallest = left;
      if (right <= this.size && this.heap[right] < this.heap[smallest])
        smallest = right;
      if (smallest === i) break;
      [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
      i = smallest;
    }
    return min;
  }
}

const heap = new MinHeap();
let N = -1;

rl.on("line", function (line) {
  if (N === -1) {
    N = +line;
    return;
  }

  line.split(" ").forEach((el) => {
    heap.add(+el);
    if (heap.size > N) heap.pop();
  });
  N -= 1;

  if (N === 0) rl.close();
}).on("close", function () {
  console.log(heap.peek());
  process.exit();
});
