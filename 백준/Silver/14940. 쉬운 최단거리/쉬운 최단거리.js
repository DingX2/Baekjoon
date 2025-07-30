// copilot: disable
const fs = require("fs");
//const input = fs.readFileSync("input.txt").toString().trim().split("\n");
// const input2 = fs.readFileSync("input2.txt").toString().trim().split("\n");/
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const solution = () => {
  const [N, M] = input[0].split(" ").map(Number);
  const map = input.slice(1, N + 1).map((line) => line.split(" ").map(Number));

  const visited = Array.from({ length: N }, () => Array(M).fill(-1));
  const start = [];
  map.forEach((arr, i) =>
    arr.forEach((e, j) => {
      if (e === 2) {
        start.push(i, j);
      } else if (e === 0) {
        visited[i][j] = 0;
      }
    })
  );

  const [startX, startY] = start;
  visited[startX][startY] = 0;
  //console.log(N, M, map, visited);
  //2에서부터 BFS depth를 저장하면됨
  //console.log(start);
  //

  const dir = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];

  const queue = [start];

  while (queue.length > 0) {
    const [cx, cy] = queue.shift();

    for (const [dx, dy] of dir) {
      const [nx, ny] = [cx + dx, cy + dy];
      //console.log(nx, ny, "nx,ny", level);
      if (
        0 <= nx &&
        nx < N &&
        0 <= ny &&
        ny < M &&
        map[nx][ny] === 1 &&
        visited[nx][ny] === -1
      ) {
        //console.log(nx, ny, "도착")
        visited[nx][ny] = visited[cx][cy] + 1;
        queue.push([nx, ny]);
      }
    }
  }

  for (let i = 0; i < N; i++) {
    console.log(visited[i].join(" "));
    //console.log(visited[i]);
  }
};
solution();
