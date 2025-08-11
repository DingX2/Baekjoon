// copilot: disable
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const solution = () => {
  const [N, M] = input[0].split(" ").map(Number);
  const dist = new Map();

  for (let i = 1; i < N + 1; i++) {
    const item = input[i];
    if (item.length < M) continue;
    dist.set(item, (dist.get(item) ?? 0) + 1);
  }

  const sortedDist = [...dist].sort(([A, countA], [B, countB]) => {
    if (countA !== countB) return countB - countA;
    else if (A.length !== B.length) return B.length - A.length;
    else return A < B ? -1 : A > B ? 1 : 0;
  });

  const output = new Array(sortedDist.length);
  for (let i = 0; i < sortedDist.length; i++) output[i] = sortedDist[i][0];
  console.log(output.join("\n"));
};
solution();
