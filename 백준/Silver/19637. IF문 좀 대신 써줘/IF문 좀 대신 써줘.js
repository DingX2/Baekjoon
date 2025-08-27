const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const solution = () => {
  const [N, M] = input[0].split(" ").map(Number);

  const titles = [];
  const limits = [];
  const used = new Set();
  let answer = [];

  for (let i = 0; i < N; i++) {
    const [TITLE, SCORE] = input[1 + i].split(" ");
    if (!used.has(SCORE)) {
      titles.push(TITLE);
      used.add(SCORE);
      limits.push(Number(SCORE));
    }
  }

  for (let i = 0; i < M; i++) {
    const user = { score: +input[1 + N + i], title: titles[0] };

    //이진탐색
    let left = 0,
      right = limits.length - 1;

    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (user.score <= limits[mid]) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }

    answer.push(titles[left]);
  }
  return answer.join("\n");
};

console.log(solution());
