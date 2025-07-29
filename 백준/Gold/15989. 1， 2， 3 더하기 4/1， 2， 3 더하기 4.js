// copilot: disable
const fs = require("fs");
//const input = fs.readFileSync("input.txt").toString().trim().split("\n");
// const input2 = fs.readFileSync("input2.txt").toString().trim().split("\n");/
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const solution = () => {
  const N = +input[0];
  const nums = input.slice(1).map(Number);

  const MAX = Math.max(...nums);
  const MOD = 1e9 + 9;
 
  const dp = Array(MAX + 1).fill(0);
  dp[0] = 1;

  for (let num of [1, 2, 3]) {
    for (let i = num; i <= MAX; i++) {
      dp[i] = (dp[i] + dp[i - num]) % MOD;
    }
  }

  nums.forEach((n) => {
    console.log(dp[n]);
  });
};
solution();
