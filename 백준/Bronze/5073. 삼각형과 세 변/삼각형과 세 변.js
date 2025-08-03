// copilot: disable
const fs = require("fs");
//const input = fs.readFileSync("input.txt").toString().trim().split("\n");
// const input2 = fs.readFileSync("input2.txt").toString().trim().split("\n");/
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const solution = () => {
  let i = 0;
  const triangleMap = new Map([
    [3, "Equilateral"],
    [2, "Isosceles"],
    [1, "Scalene"],
    [0, "Invalid"],
  ]);

  do {
    const [a, b, c] = input[i]
      .split(" ")
      .map(Number)
      .sort((a, b) => a - b);
    if (a === 0 && b === 0 && c === 0) break;
    i += 1;

    let type = 0;

    //console.log(a, b, c);
    type = 0;
    if (a + b > c) {
      if (a === b && b === c) type = 3;
      else if (a === b || b === c) type = 2;
      else type = 1;
    }
    console.log(triangleMap.get(type));
  } while (true);
};

// console.time("Execution Time");
solution();
// console.timeEnd("Execution Time");
