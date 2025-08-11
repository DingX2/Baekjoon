// copilot: disable
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const solution = () => {
  const N = +input[0];
  let cards = Array.from({ length: N }, (_, i) => i + 1);

  let p = 1;
  while (p << 1 <= N) {
    p <<= 1;
  }
  return N === p ? N : 2 * (N - p);
};
console.log(solution());
