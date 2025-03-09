const fs = require("fs");
//const input = fs.readFileSync("input.txt").toString().trim().split("\n");
//const input = fs.readFileSync("input2.txt").toString().trim().split("\n");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

solution = () => {
  // console.log(input);
  const T = +input[0];
  let [N, M, K] = [0, 0, 0];
  const dir = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  const validation = (arrayTemp, nx, ny) => {
    return 0 <= nx && nx < N && 0 <= ny && ny < M && arrayTemp[nx][ny] === 1;
  };

  const dfs = (x, y, arrayTemp) => {
    arrayTemp[x][y] = 0;
    for (const [dx, dy] of dir) {
      const [nx, ny] = [x + dx, y + dy];
      if (validation(arrayTemp, nx, ny)) {
        dfs(nx, ny, arrayTemp);
      }
    }
    return 1;
  };

  let totalCount = 1;
  for (let i = 0; i < T; i++) {
    let answer = 0;
    [M, N, K] = input[totalCount].split(" ").map(Number);
    const arrayTemp = Array.from({ length: N }, () => Array(M).fill(0));

    for (let j = 0; j < K; j++) {
      const [y, x] = input[1 + totalCount + j].split(" ").map(Number);
      arrayTemp[x][y] = 1;
    }

    // 모두 dfs 돌려서 dfs의 개수가 정답
    for (let x = 0; x < N; x++) {
      for (let y = 0; y < M; y++) {
        if (arrayTemp[x][y] === 1) {
          answer += dfs(x, y, arrayTemp);
        }
      }
    }
    totalCount += K + 1;
    console.log(answer);
  }
};

solution();
