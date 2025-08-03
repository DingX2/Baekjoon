// copilot: disable
const fs = require("fs");
//const input = fs.readFileSync("input.txt").toString().trim().split("\n");
// const input2 = fs.readFileSync("input2.txt").toString().trim().split("\n");/
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const solution = () => {
  const [H, W, N, M] = input[0].split(" ").map(Number);
  let answer = 0;

  answer = (Math.floor((H - 1) / (N + 1)) + 1) * (Math.floor((W - 1) / (M + 1)) + 1);

  return answer;
};

console.log(solution());
