// copilot: disable
const fs = require("fs");
//const input = fs.readFileSync("input4.txt").toString().trim().split("\n");
// const input2 = fs.readFileSync("input2.txt").toString().trim().split("\n");/
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const Solution = () => {
  const N = +input[0];
  const consults = input.slice(1).map((line) => line.split(" ").map(Number));

  let maxPrice = 0;

  const backtrack = (index, currentPrice) => {
    if (index >= N) {
      maxPrice = Math.max(maxPrice, currentPrice);
      return;
    }

    const [duration, price] = consults[index];

    if (index + duration <= N) {
      backtrack(index + duration, currentPrice + price);
    }
    backtrack(index + 1, currentPrice);
  };

  backtrack(0, 0);
  return maxPrice;
};

console.log(Solution());
