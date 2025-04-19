function solution(storage, requests) {
  let N = storage.length;
  let M = storage[0].length;
  let answer = 0;

  const updated = Array(N + 2).fill(0).map((_, i) => {
    if (i === 0 || i === N + 1) return Array(M + 2).fill('0');
    return ['0', ...storage[i - 1].split(''), '0'];
  });

  const direction = [
    [1, 0], [0, 1], [-1, 0], [0, -1]
  ];

  function listForklift(command) {
    // front-rear 기반 큐 구현
    const MAX = (N + 2) * (M + 2);
    const queue = new Array(MAX);
    let front = 0, rear = 0;

    const visited = Array.from({ length: N + 2 }, () => Array(M + 2).fill(false));

    queue[rear++] = [0, 0];
    visited[0][0] = true;

    while (front < rear) {
      const [cx, cy] = queue[front++];

      for (let [dx, dy] of direction) {
        const nx = cx + dx;
        const ny = cy + dy;

        if (nx >= 0 && nx < N + 2 && ny >= 0 && ny < M + 2 && !visited[nx][ny]) {
          const cell = updated[nx][ny];

          if (cell === '0') {
            queue[rear++] = [nx, ny]; // 통과만
          } else if (cell === command) {
            updated[nx][ny] = '0'; // 꺼내기
          }

          visited[nx][ny] = true;
        }
      }
    }
  }

  function listCrain(command) {
    const target = command[0];

    for (let i = 0; i < N + 2; i++) {
      for (let j = 0; j < M + 2; j++) {
        if (updated[i][j] === target) {
          updated[i][j] = '0';
        }
      }
    }
  }

  for (const command of requests) {
    if (command.length === 1) {
      listForklift(command);
    } else {
      listCrain(command);
    }
  }

  for (let i = 0; i < N + 2; i++) {
    for (let j = 0; j < M + 2; j++) {
      if (updated[i][j] !== '0') {
        answer++;
      }
    }
  }

  return answer;
}
