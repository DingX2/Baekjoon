const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const solution = () => {
  const T = input[0];
  const out = [];
  for (let i = 0; i < T; i++) {
    const N = +input[1 + i * 2];
    const days = input[1 + i * 2 + 1].split(" ").map(Number);

    let answer = 0;
    let maxSoFar = 0;

    for (let i = N - 1; i >= 0; i--) {
      if (days[i] > maxSoFar) {
        maxSoFar = days[i];
      } else {
        answer += maxSoFar - days[i];
      }
    }
    out.push(answer);
  }
  console.log(out.join("\n"));
};

solution();
