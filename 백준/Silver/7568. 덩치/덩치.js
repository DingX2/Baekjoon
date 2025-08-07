// copilot: disable
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const solution = () => {
  const N = +input[0];
  const answer = [];
  const dataArray = input.slice(1).map((line) => line.split(" ").map(Number));
  const data = input
    .slice(1)
    .map((line) => line.split(" ").map(Number))
    .map(([x, y], index) => ({
      index,
      x,
      y,
    }));

  for (let i = 0; i < N; i++) {
    let rank = 1;
    for (let j = 0; j < N; j++) {
      if (i === j) continue;
      if (
        dataArray[i][0] < dataArray[j][0] &&
        dataArray[i][1] < dataArray[j][1]
      ) {
        rank += 1;
      }
    }
    answer.push(rank);
  }

  console.log(answer.join(" "));
};
solution();
