const fs = require("fs");
//const input = fs.readFileSync("input3.txt").toString().trim().split("\n");
//const input = fs.readFileSync("input2.txt").toString().trim().split("\n");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// BFS 3가지의 경우의 수로 그리디 찾기
solution = () => {
  const [N, M] = input[0].split(" ").map(Number);
  const labs = input.slice(1).map((row) => row.split(" ").map(Number));
  const empty = [];
  const virus = [];
  const dir = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1],
  ];
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (labs[i][j] === 0) empty.push([i, j]);
      else if (labs[i][j] === 2) virus.push([i, j]);
    }
  }

  const testCombination = (arr, selectNum) => {
    const results = [];
    if (selectNum === 1) {
      return arr.map((er) => [er]);
    }

    arr.forEach((fixed, index, origin) => {
      const remained = origin.slice(index + 1);
      const combinations = testCombination(remained, selectNum - 1);
      const attached = combinations.map((combo) => [fixed, ...combo]);
      results.push(...attached);
    });
    return results;
  };

  const virus_simulate = (labs, virus) => {
    const visited = Array.from({ length: N }, () => Array(M).fill(false));
    const queue = [...virus];
    virus.forEach(([x, y]) => {
      visited[x][y] = true;
    });
    while (queue.length > 0) {
      const [x, y] = queue.shift();
      for (const [dx, dy] of dir) {
        const nx = x + dx;
        const ny = y + dy;

        if (
          0 <= nx &&
          nx < N &&
          0 <= ny &&
          ny < M &&
          !visited[nx][ny] &&
          labs[nx][ny] !== 1
        ) {
          visited[nx][ny] = true;
          queue.push([nx, ny]);
        }
      }
    }

    let max_safe_area = 0;
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (labs[i][j] === 0 && !visited[i][j]) {
          max_safe_area += 1;
        }
      }
    }
    return max_safe_area;
  };
  let answer = 0;
  for (const walls of testCombination(empty, 3)) {
    // brute-force로 탐색
    const labsCopy = labs.map((row) => row.slice());
    walls.forEach((item) => (labsCopy[item[0]][item[1]] = 1));
    const safeAreas = virus_simulate(labsCopy, virus);
    answer = Math.max(answer, safeAreas);
  }

  return answer;
};

console.log(solution());
