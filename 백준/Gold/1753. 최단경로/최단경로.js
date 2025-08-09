// copilot: disable
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

class MinHeap {
  constructor() {
    this.a = [];
  }
  #val(x) {
    return Array.isArray(x) ? x[0] : x;
  } // ← [cost, node] 지원
  push(v) {
    this.a.push(v);
    let i = this.a.length - 1;
    while (i > 0) {
      let p = (i - 1) >> 1;
      if (this.#val(this.a[p]) <= this.#val(this.a[i])) break;
      [this.a[p], this.a[i]] = [this.a[i], this.a[p]];
      i = p;
    }
  }
  pop() {
    if (!this.a.length) return;
    const top = this.a[0],
      last = this.a.pop();
    if (this.a.length) {
      this.a[0] = last;
      let i = 0;
      while (1) {
        let l = i * 2 + 1,
          r = i * 2 + 2,
          s = i;
        if (l < this.a.length && this.#val(this.a[l]) < this.#val(this.a[s]))
          s = l;
        if (r < this.a.length && this.#val(this.a[r]) < this.#val(this.a[s]))
          s = r;
        if (s === i) break;
        [this.a[i], this.a[s]] = [this.a[s], this.a[i]];
        i = s;
      }
    }
    return top;
  }
  get length() {
    return this.a.length;
  }
}

const solution = () => {
  const [V, E] = input[0].split(" ").map(Number);
  const K = +input[1];
  const edges = input.slice(2).map((line) => line.split(" ").map(Number));

  const graph = Array.from({ length: V + 1 }, () => []);
  for (const [u, v, w] of edges) graph[u].push([v, w]);

  const INF = Infinity;
  const dist = Array(V + 1).fill(INF);
  dist[K] = 0;

  const pq = new MinHeap();
  pq.push([0, K]); // [cost, node]

  while (pq.length) {
    const [cost, u] = pq.pop();
    if (cost !== dist[u]) continue; // outdated skip
    for (const [v, w] of graph[u]) {
      const nc = cost + w;
      if (nc < dist[v]) {
        dist[v] = nc;
        pq.push([nc, v]);
      }
    }
  }

  for (let i = 1; i <= V; i++) {
    console.log(dist[i] === INF ? "INF" : dist[i]);
  }
};
solution();
