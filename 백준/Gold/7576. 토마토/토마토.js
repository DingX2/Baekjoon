const fs = require("fs");
//const input = fs.readFileSync("input.txt").toString().trim().split("\n");
//const input = fs.readFileSync("input2.txt").toString().trim().split("\n");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

//Level을 고려하려면, BFS를 사용해서 모두 적용해야함.
solution = () => {
  let answer = 0;
  const [M, N] = input[0].split(" ").map(Number);
  const tomatoes = [];
  const queue = [];
  const dir = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  for (let i = 0; i < N; i++) {
    const tomatoArray = input[i + 1].split(" ").map(Number);
    tomatoes.push(tomatoArray);
    tomatoArray.forEach((x, index) =>
      x === 1 ? queue.push([i, index, 0]) : 0
    );
  }
  // console.log("queue", queue);

  let front = 0;
  while (front < queue.length) {
    const [x, y, level] = queue[front++];
    //const [x, y, level] = queue.shift();
    answer = Math.max(answer, level);
    //console.log("start", x, y, level);

    for (const [dx, dy] of dir) {
      const [nx, ny] = [x + dx, y + dy];
      if (0 <= nx && nx < N && 0 <= ny && ny < M && tomatoes[nx][ny] === 0) {
        tomatoes[nx][ny] = 1;
        queue.push([nx, ny, level + 1]);
      }
    }
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (tomatoes[i][j] === 0) {
        return -1; // 막힌곳
      }
    }
  }
  return answer;
};

console.log(solution());
