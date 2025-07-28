// copilot: disable
const fs = require("fs");
//const input = fs.readFileSync("input.txt").toString().trim().split("\n");
// const input2 = fs.readFileSync("input2.txt").toString().trim().split("\n");/
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const solution = () => {
  let answer = 0;
  const [N, S] = input[0].split(" ").map(Number);
  const numbers = input[1].split(" ").map(Number);
  //console.log(N, S, numbers);

  const dfs = (idx, sum) => {
    if (idx === N) {
      if (S === sum) {
        answer += 1;
      }
      return;
    }
    dfs(idx + 1, sum + numbers[idx]);
    dfs(idx + 1, sum);
  };

  dfs(0, 0);

  return S === 0 ? answer - 1 : answer;
};
console.log(solution());
