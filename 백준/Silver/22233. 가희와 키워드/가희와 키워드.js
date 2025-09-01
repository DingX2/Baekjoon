const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const solution = () => {
  const [N, M] = input[0].split(" ").map(Number);
  const keyMap = new Set();

  for (let i = 0; i < N; i++) {
    const word = input[1 + i];
    keyMap.add(word);
  }

  const out = [];

  let remain = N;
  for (let i = 0; i < M; i++) {
    const words = input[1 + N + i].split(",");
    for (const item of words) {
      if (keyMap.has(item)) {
        remain--;
        keyMap.delete(item);
      }
    }
    out.push(String(remain));
  }

  console.log(out.join("\n"));
};

solution();
