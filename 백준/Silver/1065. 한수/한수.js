// copilot: disable
const fs = require("fs");
// input = fs.readFileSync("input.txt").toString().trim().split("\n");
// const input2 = fs.readFileSync("input2.txt").toString().trim().split("\n");/
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const Solution = () => {
  const number = String(input[0]);
  let count = 0;

  for (let i = 1; i <= +number; i++) {
    if (i < 100) {
      count += 1;
      continue;
    }
    const numberArray = String(i).split("").map(Number);
    let flag = true;
    for (let i = 0; i < numberArray.length - 2; i++) {
      if (numberArray[i] + numberArray[i + 2] !== numberArray[i + 1] * 2) {
        flag = false;
        break;
      }
    }
    if (flag) count += 1;
  }
  return count;
};

console.log(Solution());
