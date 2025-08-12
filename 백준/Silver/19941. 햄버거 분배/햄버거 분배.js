// copilot: disable
const fs = require("fs");
//const input = fs.readFileSync("input2.txt").toString().trim().split("\n");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const solution = () => {
  const [N, K] = input[0].split(" ").map(Number);
  const table_string = input[1];

  let max_count = 0;
  visited = Array(table_string.length).fill(false);

  for (let i = 0; i < table_string.length; i++) {
    if (table_string[i] === "P") {
      for (let j = i - K; j <= i + K; j++) {
        if (table_string[j] === "H" && !visited[j]) {
          visited[j] = true;
          max_count += 1;
          break;
        }
      }
    }
  }
  return max_count;
};

console.log(solution());
