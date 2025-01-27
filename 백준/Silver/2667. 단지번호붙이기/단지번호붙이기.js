const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0];
const houseMap = [];
for (let i = 0; i < N; i++) {
  houseMap.push(input[1 + i].split("").map(Number));
}
const houseMapVisited = houseMap.map((row) => row.map(() => false));

const direction = [
  [-1, 0], //left
  [0, -1], //up
  [1, 0], //right
  [0, 1], // down
];

const Move = (x, y) => {
  const moves = [];
  for (let [dx, dy] of direction) {
    let [nx, ny] = [dx + x, dy + y];
    if (nx >= 0 && nx < N && ny >= 0 && ny < N) {
      moves.push([nx, ny]);
    }
  }
  return moves.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    return a[0] - b[0];
  });
};

const dfs = (row, col) => {
  let count = 1;
  houseMapVisited[row][col] = true;
  const moves = Move(row, col);

  for (let [nx, ny] of moves) {
    if (!houseMapVisited[nx][ny] && houseMap[nx][ny] === 1) {
      count += dfs(nx, ny);
    }
  }
  return count;
};

let result = [];
for (let row = 0; row < N; row++) {
  for (let col = 0; col < N; col++) {
    if (!houseMapVisited[row][col] && houseMap[row][col] === 1)
      result.push(dfs(row, col));
  }
}

result.sort((a, b) => a - b);
console.log(result.length);
for (let answer of result) {
  console.log(answer);
}
