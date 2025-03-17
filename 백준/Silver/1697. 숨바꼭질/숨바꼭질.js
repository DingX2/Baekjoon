const fs = require("fs");
//const input = fs.readFileSync("input.txt").toString().trim().split("\n");
//const input = fs.readFileSync("input2.txt").toString().trim().split("\n");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// BFS 3가지의 경우의 수로 그리디 찾기
solution = () => {
  const [N, K] = input[0].split(" ").map(Number);
  //console.log(N, K);
  const queue = [];
  const visited = Array(100001).fill(false);

  queue.push([N, 0]);
  visited[N] = true;
  while (queue.length > 0) {
    let [position, level] = queue.shift();
    //console.log(position, level, queue);
    if (position === K) {
      return level;
      break;
    }
    const nextPositions = [position * 2, position + 1, position - 1];
    for (const nextPosition of nextPositions) {
      if (
        nextPosition >= 0 &&
        nextPosition <= 100000 &&
        !visited[nextPosition]
      ) {
        visited[nextPosition] = true;
        queue.push([nextPosition, level + 1]);
      }
    }
  }
};

console.log(solution());
