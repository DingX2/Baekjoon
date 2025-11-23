const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const solution = () => {
  const [N, d, k, c] = input[0].split(" ").map(Number);
  let answer = 0;
  let unique = 0;

  const count = Array(d + 1).fill(0);
  const arr = input.slice(1).map(Number);

  for (let i = 0; i < k; i++) {
    if (count[arr[i]] === 0) unique++;
    count[arr[i]]++;
  }

  answer = unique + (count[c] === 0 ? 1 : 0);

  for (let start = 1; start < N; start++) {
    const left = arr[start - 1];
    const right = arr[(start + k - 1) % N];

    count[left]--;
    if (count[left] === 0) unique--;

    if (count[right] === 0) unique++;
    count[right]++;

    answer = Math.max(answer, unique + (count[c] === 0 ? 1 : 0));
  }

  return answer;
};

console.log(solution());
