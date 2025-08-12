// copilot: disable
const fs = require("fs");
//const input = fs.readFileSync("input.txt").toString().trim().split("\n");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const solution = () => {
  const N = +input[0];
  const areas = input[1].split(" ").map(Number);
  const COST = +input[2];

  let L = 0;
  let R = Math.max(...areas);
  let answer = 0;

  if (areas.reduce((a, b) => a + b, 0) <= COST) {
    return R;
  }

  const isPossible = (limit) => {
    let sum = 0;
    for (const area of areas) {
      sum += Math.min(area, limit);
    }
    return sum <= COST;
  };

  while (L <= R) {
    const mid = Math.floor((L + R) / 2);
    if (isPossible(mid)) {
      answer = mid;
      L = mid + 1;
    } else {
      R = mid - 1;
    }
  }

  return answer;
};
console.log(solution());
