const fs = require("fs");
//const input = fs.readFileSync("input.txt").toString().trim().split("\n");
//const input = fs.readFileSync("input2.txt").toString().trim().split("\n");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

solution = () => {
  const N = +input[0];
  const BG_same = [];
  const BG_different = [];
  const dir = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  let [BG_same_count, BG_different_count] = [0, 0];

  for (let i = 0; i < N; i++) {
    const temp = input[i + 1];
    BG_different.push(temp.split(""));
    // BG_same.forEach(str => str.replace())
    BG_same.push(temp.replace(/R/g, "G").split(""));
  }
  const M = BG_different[0].length;
  const BG_same_visited = Array.from({ length: N }, () => Array(M).fill(false));
  const BG_different_visited = Array.from({ length: N }, () =>
    Array(M).fill(false)
  );

  const BFS = (start, visited, arr) => {
    const queue = [start];
    const str = arr[start[0]][start[1]];

    while (queue.length > 0) {
      const [x, y] = queue.shift();
      for (const [dx, dy] of dir) {
        const [nx, ny] = [dx + x, dy + y];
        if (
          0 <= nx &&
          nx < N &&
          0 <= ny &&
          ny < M &&
          !visited[nx][ny] &&
          arr[nx][ny] === str
        ) {
          visited[nx][ny] = true;
          queue.push([nx, ny]);
        }
      }
    }
  };

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (!BG_same_visited[i][j]) {
        BFS([i, j], BG_same_visited, BG_same);
        BG_same_count += 1;
      }
      if (!BG_different_visited[i][j]) {
        BFS([i, j], BG_different_visited, BG_different);
        BG_different_count += 1;
      }
    }
  }

  return [BG_different_count, BG_same_count];
};

console.log(solution().join(" "));
