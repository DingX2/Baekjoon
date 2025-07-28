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

  const combination = (origin) => {
    const result = [];

    const dfs = (idx, temp) => {
      if (idx === origin.length) {
        if (temp.length > 0) {
          result.push([...temp]);
        }
        return;
      }

      temp.push(origin[idx]);
      dfs(idx + 1, temp);
      temp.pop();
      dfs(idx + 1, temp);
    };

    dfs(0, []);
    return result;
  };

  const comb_arrays = combination(numbers);
  //console.log(comb_arrays);
  for (const comb of comb_arrays) {
    if (S === comb.reduce((a, b) => a + b, 0)) {
      answer += 1;
    }
  }

  return answer;
};
console.log(solution());
