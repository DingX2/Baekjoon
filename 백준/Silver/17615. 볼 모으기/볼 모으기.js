const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const solution = () => {
  const N = +input[0];
  const balls = input[1].split("");

  const totalR = balls.filter((b) => b === "R").length;
  const totalB = N - totalR;

  // 왼쪽에 연속된 R
  let leftR = 0;
  while (leftR < N && balls[leftR] === "R") leftR++;

  // 오른쪽에 연속된 R
  let rightR = 0;
  while (rightR < N && balls[N - 1 - rightR] === "R") rightR++;

  // 왼쪽에 연속된 B
  let leftB = 0;
  while (leftB < N && balls[leftB] === "B") leftB++;

  // 오른쪽에 연속된 B
  let rightB = 0;
  while (rightB < N && balls[N - 1 - rightB] === "B") rightB++;

  const case1 = totalR - leftR; // 빨강 왼쪽
  const case2 = totalR - rightR; // 빨강 오른쪽
  const case3 = totalB - leftB; // 파랑 왼쪽
  const case4 = totalB - rightB; // 파랑 오른쪽

  return Math.min(case1, case2, case3, case4);
};

console.log(solution());
