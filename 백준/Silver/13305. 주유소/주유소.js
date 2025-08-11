// copilot: disable
const fs = require("fs");
//const input = fs.readFileSync("input.txt").toString().trim().split("\n");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const solution = () => {
  const N = +input[0];
  const dist = input[1].split(" ").map((x) => BigInt(x));
  const price = input[2]
    .split(" ")
    .map((x) => BigInt(x))
    .slice(0, N - 1);

  let total_cost = 0n;
  let min_cost = price[0];

  for (let i = 0; i < N - 1; i++) {
    if (price[i] < min_cost) {
      min_cost = price[i];
    }
    total_cost += dist[i] * min_cost;
  }

  return total_cost.toString();
};
console.log(solution());
