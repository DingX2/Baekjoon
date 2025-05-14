// copilot: disable
const fs = require("fs");
//const input = fs.readFileSync("input.txt").toString().trim().split("\n");
// const input2 = fs.readFileSync("input2.txt").toString().trim().split("\n");/
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const Solution = (test) => {
  const N = test ? +test : +input[0];
  let answer = 0;

  const cols = Array(N).fill(false); 
  const diag1 = Array(2 * N - 1).fill(false); 
  const diag2 = Array(2 * N - 1).fill(false); 

  const dfs = (row) => {
    if (row === N) {
      answer++;
      return;
    }

    for (let col = 0; col < N; col++) {
      const d1 = row + col;
      const d2 = row - col + N - 1;

      if (cols[col] || diag1[d1] || diag2[d2]) continue;

      cols[col] = diag1[d1] = diag2[d2] = true;
      dfs(row + 1);
      cols[col] = diag1[d1] = diag2[d2] = false;
    }
  };

  dfs(0);
  return answer;
};

console.log(Solution());