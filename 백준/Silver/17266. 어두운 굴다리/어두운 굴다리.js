// copilot: disable
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const solution = () => {
  const N = +input[0];
  const M = +input[1];
  const light_position = input[2].split(" ").map(Number);

  let ans = light_position[0] - 0;
  for (let i = 0; i < M - 1; i++) {
    const gap = light_position[i + 1] - light_position[i];
    ans = Math.max(ans, Math.ceil(gap / 2));
  }
  ans = Math.max(ans, N - light_position[M - 1]);

  console.log(ans);
};
solution();
