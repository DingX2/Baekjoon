// copilot: disable
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const solution = () => {
  const N = +input[0];
  const rawData = input.slice(1).map((line) => line.split(""));

  const position = new Set();
  const heart = [];

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (rawData[i][j] === "*") {
        position.add(`${i},${j}`);
        if (
          0 < i &&
          i < N - 1 &&
          0 < j &&
          j < N - 1 &&
          rawData[i - 1][j] === "*" &&
          rawData[i + 1][j] === "*" &&
          rawData[i][j - 1] === "*" &&
          rawData[i][j + 1] === "*"
        ) {
          heart.push(i, j);
        }
      }
    }
  }

  const getDistance = (x, y, dx, dy) => {
    let count = 0;
    while (true) {
      x += dx;
      y += dy;
      if (x < 0 || y < 0 || x >= N || y >= N) break;
      if (!position.has(`${x},${y}`)) break;
      count += 1;
    }
    return count;
  };

  const leftArm = getDistance(heart[0], heart[1], 0, -1);
  const rightArm = getDistance(heart[0], heart[1], 0, 1);
  const waist = getDistance(heart[0], heart[1], 1, 0);
  const leftLeg = getDistance(heart[0] + waist, heart[1] - 1, 1, 0);
  const rightLeg = getDistance(heart[0] + waist, heart[1] + 1, 1, 0);

  console.log(heart.map((n) => n + 1).join(" "));
  console.log(leftArm, rightArm, waist, leftLeg, rightLeg);
};
solution();
