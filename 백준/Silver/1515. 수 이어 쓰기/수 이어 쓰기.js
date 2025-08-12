// copilot: disable
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const solution = () => {
  const subsequence = input[0];

  let p = 0;
  for (let i = 1; ; i++) {
    const s = i.toString();

    for (let c of s) {
      if (p < subsequence.length && subsequence[p] === c) {
        p += 1;
      }
    }

    if (p === subsequence.length) return i;
  }
};

console.log(solution());
