const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const computerCount = +input[0];
const connectedComputer = +input[1];
let computers = [];
for (let i = 0; i < connectedComputer; i++) {
  computers.push(input[2 + i].split(" ").map(Number));
}

let graph = Array.from({ length: computerCount + 1 }, () => []);
let visited = Array.from({ length: computerCount + 1 }, () => false);

for (const [computer1, computer2] of computers) {
  graph[computer1].push(computer2);
  graph[computer2].push(computer1);
}

const dfs = (v) => {
  let count = 1;
  visited[v] = true;

  for (let routes of graph[v]) {
    if (!visited[routes]) {
      count += dfs(routes);
    }
  }
  return count;
};

const infectedCount = dfs(1);
console.log(infectedCount - 1);
