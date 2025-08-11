// copilot: disable
const fs = require("fs");
//const input = fs.readFileSync("input2.txt").toString().trim().split("\n");
 const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const solution = () => {
  const N = +input[0];
  const dist = input[1].split(" ").map(Number);
  const cities = input[2]
    .split(" ")
    .map(Number)
    .slice(0, N - 1);

  let total_cost = 0;
  let min_cost_city = Infinity;

  for (const [index, city] of cities.entries()) {
    min_cost_city = Math.min(min_cost_city, cities[index]);
    total_cost += dist[index] * min_cost_city;
  }

  return total_cost;
};
console.log(solution());
