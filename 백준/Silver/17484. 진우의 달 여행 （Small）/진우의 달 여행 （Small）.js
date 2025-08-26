const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const solution = () => {
  const [N, M] = input[0].split(" ").map(Number);
  const space = [];
  let count = 0;

  const best = new Map();

  for (let i = 0; i < N; i++) {
    const line = input[i + 1].split(" ").map(Number);
    space.push(line);
  }

  const chapter = space[N - 1];

  const queue = [];
  let min = Infinity;
  const keyOf = (x, y, dir) => `${x},${y},${dir}`;

  chapter.forEach((el, i) => {
    queue.push([el, -9, N - 1, i]);
    best.set(keyOf(N - 1, i, -9));
  });

  while (queue.length > 0) {
    const [currentValue, prevDir, cx, cy] = queue.shift();
    const currentKey = keyOf(cx, cy, prevDir);
    if (cx === 0) min = Math.min(min, currentValue);
    if (currentValue > (best.get(currentKey) ?? Infinity)) continue;

    //세방향 탐색
    for (const dy of [-1, 0, 1]) {
      if (prevDir === dy) continue; //이전과 동일한 방향 패스
      const [nx, ny] = [cx - 1, cy + dy];
      if (0 > nx || nx > N - 1 || 0 > ny || ny > M - 1) continue;

      const newValue = currentValue + space[nx][ny];
      let nextDir = dy;
      const nextKey = keyOf(nx, ny, nextDir);

      if (newValue < (best.get(nextKey) ?? Infinity)) {
        best.set(nextKey, newValue);
        queue.push([newValue, nextDir, nx, ny]);
      }
    }
  }
  return min;
};

console.log(solution());
