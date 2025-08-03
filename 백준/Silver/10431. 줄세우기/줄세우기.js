const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const solution = () => {
  const M = +input[0];

  for (let i = 1; i < M + 1; i++) {
    const students = input[i].split(" ").slice(1).map(Number);
    const line = [];
    let answer = 0;

    for (child of students) {
      line.push(child);
  
      for (let j = line.length; j >= 0; j--) {
        if (line[j] > line[j + 1]) {
          const temp = line[j];
          line[j] = line[j + 1];
          line[j + 1] = temp;
          answer += 1;
        }
      }
    }
    console.log(i, answer);
  }
};

solution();
