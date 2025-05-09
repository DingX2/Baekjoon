// copilot: disable
const fs = require("fs");
//const input = fs.readFileSync("input.txt").toString().trim().split("\n");
// const input2 = fs.readFileSync("input2.txt").toString().trim().split("\n");/
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const Solution = () => {
  const N = input[0];
  const fond = input.slice(1).map((el) => el.split(" ").map(Number));
  const maxHeight = Math.max(...fond.flat());

  const direction = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];

  const DFS = (i, j, rainlevel) => {
    visited[i][j] = true;

    for (const [dx, dy] of direction) {
      nx = i + dx;
      ny = j + dy;
      if (
        0 <= nx &&
        nx < N &&
        0 <= ny &&
        ny < fond[0].length &&
        fond[nx][ny] > rainlevel &&
        !visited[nx][ny]
      ) {
        DFS(nx, ny, rainlevel);
      }
    }
  };

  let maxSafeArea = 0;

  for (let rain = 0; rain <= maxHeight; rain++) {
    visited = Array.from({ length: N }, () =>
      Array(fond[0].length).fill(false)
    );
    let safeCount = 0;

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < fond[0].length; j++) {
        if (!visited[i][j] && fond[i][j] > rain) {
          DFS(i, j, rain);
          safeCount++;
        }
      }
      maxSafeArea = Math.max(maxSafeArea, safeCount);
    }
  }
  console.log(maxSafeArea);
};

Solution();
