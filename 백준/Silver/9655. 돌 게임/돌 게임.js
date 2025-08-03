const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const solution = () => {
  const M = +input[0];
  let win = true;

  // const DP = Array(1001).fill(0);
  // DP[1] = 1;
  // DP[2] = 0;
  // DP[3] = 1;
  // DP[4] = DP[1] + [3];
  // DP[5] = DP[1

  console.log(M % 2 ? "SK" : "CY");
};

solution();
