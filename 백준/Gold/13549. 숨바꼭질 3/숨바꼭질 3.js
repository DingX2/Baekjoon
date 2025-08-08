// copilot: disable
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// 0-1 BFS
const solution = () => {
  const [N, K] = input[0].split(" ").map(Number);
  const MAX = 100001;
  const visited = Array(MAX).fill(-1);
  visited[N] = 0;

  const queue = [N];
  while (queue.length) {
    const now = queue.shift();
    if (now === K) {
      console.log(visited[now]);
      return;
    }

    for (const next of [now * 2, now - 1, now + 1]) {
      if (next < 0 || next > MAX) continue;

      if (visited[next] === -1) {
        if (next === now * 2) {
          visited[next] = visited[now];
          queue.unshift(next);
        } else {
          visited[next] = visited[now] + 1;
          queue.push(next);
        }
      }
    }
  }
};
solution();
