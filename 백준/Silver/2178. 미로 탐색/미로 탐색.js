const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const MazeArray = [];
let queue = [];
let level = 2;

const direction = [
  [0, 1],
  [-1, 0],
  [0, -1],
  [1, 0],
];
let current = {
  x: 0,
  y: 0,
};

for (let i = 1; i < N + 1; i++) {
  MazeArray.push(input[i].split("").map(Number));
}
let visited = Array.from({ length: N }, () => Array(M).fill(false));

const moveValidation = (x, y) => {
  return (
    x >= 0 &&
    x < N &&
    y >= 0 &&
    y < M &&
    MazeArray[x][y] === 1 &&
    !visited[x][y]
  );
};

const solution = () => {
  queue.push({ x: 0, y: 0 });
  visited[0][0] = true;

  while (queue.length > 0) {
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      current = queue.shift();
      for (const [dx, dy] of direction) {
        let [nx, ny] = [dx + current.x, dy + current.y];
        if (nx === N - 1 && ny === M - 1) {
          return level;
        }
        if (moveValidation(nx, ny)) {
          queue.push({ x: nx, y: ny });
          visited[nx][ny] = true;
        }
      }
    }
    level += 1;
  }
};
console.log(solution());
