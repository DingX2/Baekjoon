// copilot: disable
const fs = require("fs");
//const input = fs.readFileSync("input.txt").toString().trim().split("\n");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const solution = () => {
  const [N, X] = input[0].split(" ").map(Number);
  const visit_list = input[1].split(" ").map(Number);

  let total_sum = visit_list.slice(0, X).reduce((a, b) => a + b, 0);
  let max_sum = total_sum;
  let length = 1;

  for (let i = X; i < N; i++) {
    total_sum = -visit_list[i - X] + total_sum + visit_list[i];
    if (max_sum < total_sum) {
      length = 1;
      max_sum = total_sum;
    } else if (max_sum === total_sum) {
      length += 1;
    }
  }

  return { max_sum, length };
};

const { max_sum, length } = solution();
if (max_sum === 0) {
  console.log("SAD");
} else {
  console.log(max_sum);
  console.log(length);
}
