const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const solution = () => {
  const [N, D] = input[0].split(" ").map(Number);
  const paths = [];
  for (let i = 0; i < N; i++) {
    const [s, e, w] = input[i + 1].split(" ").map(Number);

    if (e > D) continue;
    paths.push([s, e, w]);
  }

  // 최단 거리 기록 테이블 다익스트라
  const dist = Array(D + 1).fill(Infinity);
  dist[0] = 0;

  const queue = [[0, 0]]; // start, distance

  while (queue.length > 0) {
    const [pos, cost] = queue.shift();

    // 이미 더 짧은 경로로 방문했다면 skip
    if (cost > dist[pos]) continue;

    if (pos + 1 <= D && dist[pos + 1] > cost + 1) {
      dist[pos + 1] = cost + 1;
      queue.push([pos + 1, dist[pos + 1]]);
    }

    // 지름길 탐색
    for (const [s, e, w] of paths) {
      if (s === pos && dist[e] > cost + w) {
        dist[e] = cost + w;
        queue.push([e, dist[e]]);
      }
    }
  }
  return dist[D];
};

console.log(solution());
