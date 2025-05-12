function solution(board) {
  const ROW_SIZE = board.length;
  const COL_SIZE = board[0].length;

  const stone = new Set();
  let start = null;
  let goal = null;

  const dir = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0]
  ];

  for (let i = 0; i < ROW_SIZE; i++) {
    const row = board[i].split("");
    for (let j = 0; j < COL_SIZE; j++) {
      const el = row[j];
      if (el === 'D') stone.add(`${i},${j}`);
      if (el === 'R') start = [i, j];
      if (el === 'G') goal = [i, j];
    }
  }

  const isInBounds = (x, y) => 0 <= x && x < ROW_SIZE && 0 <= y && y < COL_SIZE;
  const isStone = (x, y) => stone.has(`${x},${y}`);

  const visited = Array.from({ length: ROW_SIZE }, () => Array(COL_SIZE).fill(false));
  const queue = [[...start, 0]]; 

  visited[start[0]][start[1]] = true;

  while (queue.length > 0) {
    const [cx, cy, depth] = queue.shift();

    if (cx === goal[0] && cy === goal[1]) {
      return depth;
    }

    for (const [dx, dy] of dir) {
      let [nx, ny] = [cx, cy];

      while (true) {
        const nextX = nx + dx;
        const nextY = ny + dy;

        if (!isInBounds(nextX, nextY)) break;
        if (isStone(nextX, nextY)) break;

        nx = nextX;
        ny = nextY;
      }

      if ((nx !== cx || ny !== cy) && !visited[nx][ny]) {
        visited[nx][ny] = true;
        queue.push([nx, ny, depth + 1]);
      }
    }
  }

  return -1; 
}