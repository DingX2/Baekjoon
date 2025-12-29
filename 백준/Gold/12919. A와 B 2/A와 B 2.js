const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(/\r?\n/);

const solution = (input) => {
  const S = input[0];
  const T = input[1];
  let answer = 0;

  const dfs = (current) => {
    if (current === S) {
      answer = 1;
      return;
    }
    if (current.length === 0) return;

    const last = current[current.length - 1];
    if (last === "A") {
      dfs(current.slice(0, -1));
    }

    if (current[0] === "B") {
      dfs(current.slice(1).split("").reverse().join(""));
    }
  };

  dfs(T);
  return answer;
};
console.log(solution(input));

