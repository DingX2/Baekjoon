const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const solution = () => {
  const N = +input[0];
  const memory_bigger_count = input[1].split(" ").map(Number);

  let answer = [];

  for (let i = N - 1; i >= 0; i--) {
    answer.splice(memory_bigger_count[i], 0, i + 1);
  }
  return answer;
};

console.log(solution().join(" "));
