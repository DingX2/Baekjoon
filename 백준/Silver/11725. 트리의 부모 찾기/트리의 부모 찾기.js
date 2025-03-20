const fs = require("fs");
//const input = fs.readFileSync("input.txt").toString().trim().split("\n");
//const input = fs.readFileSync("input2.txt").toString().trim().split("\n");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

solution = () => {
  const N = +input[0];
  const graph = Array.from({ length: N + 1 }, () => []);
  const parent = Array(N + 1).fill(0);

  for (let i = 1; i < N; i++) {
    const [u, v] = input[i].split(" ").map(Number);
    graph[u].push(v);
    graph[v].push(u);
  }

  const queue = [1];
  parent[1] = -1;

  while (queue.length > 0) {
    const current = queue.shift();

    for (const neighbor of graph[current]) {
      if (parent[neighbor] === 0) {
        parent[neighbor] = current;
        queue.push(neighbor);
      }
    }
  }

  for (let i = 2; i <= N; i++) {
    console.log(parent[i]);
  }
};

solution();
