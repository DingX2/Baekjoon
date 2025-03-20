const fs = require("fs");
//const input = fs.readFileSync("input3.txt").toString().trim().split("\n");
//const input = fs.readFileSync("input2.txt").toString().trim().split("\n");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// 3차원 배열의 BFS
solution = () => {
  const [M, N, H] = input[0].split(" ").map(Number);
  const box = [];
  //const box = input.slice(1).map((row) => row.split(" ").map(Number));
  for (let i = 0; i < H; i++) {
    const tempBox = [];
    for (let j = 0; j < N; j++) {
      tempBox.push(input[1 + i * N + j].split(" ").map(Number));
    }
    box.push(tempBox);
  }
  // const box = Array.from({ length: H }, (_, h) =>
  //   Array.from({ length: N }, (_, n) =>
  //     input[1 + h * N + n].split(" ").map(Number)
  //   )
  // );
  //console.log(box);
  const tomatoes = [];
  const dir = [
    [1, 0, 0],
    [-1, 0, 0],
    [0, 1, 0],
    [0, -1, 0],
    [0, 0, 1],
    [0, 0, -1],
  ];

  for (let i = 0; i < H; i++) {
    for (let j = 0; j < N; j++) {
      for (let k = 0; k < M; k++) {
        if (box[i][j][k] === 1) {
          tomatoes.push([i, j, k]);
        }
      }
    }
  }
  // console.log(box);

  const validation = (nx, ny, nz) => {
    return (
      0 <= nx &&
      nx < H &&
      0 <= ny &&
      ny < N &&
      0 <= nz &&
      nz < M &&
      box[nx][ny][nz] === 0
    );
  };

  const BFS = (start) => {
    const queue = [...start];
    let level = 0;
    let [front, rear] = [0, start.length];

    while (front < rear) {
      const queueSize = rear - front;
      for (let i = 0; i < queueSize; i++) {
        const [x, y, z] = queue[front++];
        for (const [dx, dy, dz] of dir) {
          const [nx, ny, nz] = [x + dx, y + dy, z + dz];
          if (validation(nx, ny, nz)) {
            box[nx][ny][nz] = 1;
            queue[rear++] = [nx, ny, nz];
          }
        }
      }

      level++;
    }
    return level - 1;
  };

  // console.log(tomatoes);
  const answer = BFS(tomatoes);

  // 0이 남아 있으면 -1
  // 날짜는 곧 BFS level

  const hasZero = box.flat(2).includes(0);
  console.log(hasZero ? -1 : answer);
};

solution();
