// copilot: disable
const fs = require("fs");
//const input = fs.readFileSync("input.txt").toString().trim().split("\n");
// const input2 = fs.readFileSync("input2.txt").toString().trim().split("\n");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// MIN HEAP N(1 ≤ N ≤ 100,000)
// 0 이면 pop / 이외는 push
// 배열 : 완전 이진 트리 이므로, 빈 칸이 없는 규칙이라. 인덱스 규칙만 있으면 표현 가능
// 접근 O(1)
// push (삽입) → O(log N)
// pop (최대값 삭제) → O(log N)

const Solution = () => {
  const N = +input[0];
  const maxHeapArray = input.slice(1).map(Number);

  class MaxHeap {
    constructor() {
      this.heap = [Number.MIN_SAFE_INTEGER]; // null as any 도 좋지만, MIN_SAGE_INTEGER 사용 권장
    }

    size = () => {
      return this.heap.length - 1;
    };

    push = (value) => {
      this.heap.push(value);
      this.upHeap();
    };

    upHeap() {
      let idx = this.size();
      let parentIdx = Math.floor(idx / 2);

      while (parentIdx !== 0 && this.heap[idx] < this.heap[parentIdx]) {
        [this.heap[idx], this.heap[parentIdx]] = [
          this.heap[parentIdx],
          this.heap[idx],
        ];
        idx = parentIdx;
        parentIdx = Math.floor(idx / 2);
      }
    }

    pop() {
      if (this.size() === 0) return 0;
      const root = this.heap[1];

      if (this.size() === 1) {
        this.heap.pop();
        return root;
      }

      this.heap[1] = this.heap.pop();
      this.downHeap();

      return root;
    }

    swap(i, j) {
      [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    downHeap() {
      let idx = 1;

      while (true) {
        let [leftIdx, rightIdx] = [idx * 2, idx * 2 + 1];
        let largest = idx;

        if (leftIdx <= this.size() && this.heap[largest] > this.heap[leftIdx]) {
          largest = leftIdx;
        }

        if (
          rightIdx <= this.size() &&
          this.heap[largest] > this.heap[rightIdx]
        ) {
          largest = rightIdx;
        }

        if (largest !== idx) {
          this.swap(idx, largest);
          idx = largest;
        } else {
          break;
        }
      }
    }

    print() {
      return this.heap;
    }
  }

  const heap1 = new MaxHeap();
  const output = [];

  for (let number of maxHeapArray) {
    if (number === 0) {
      output.push(heap1.pop());
    } else heap1.push(number);
  }

  console.log(output.join("\n"));
};

Solution();
