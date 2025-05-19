// copilot: disable
const fs = require("fs");
//const input = fs.readFileSync("input7.txt").toString().trim().split("\n");
// const input2 = fs.readFileSync("input2.txt").toString().trim().split("\n");/
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const solution = () => {
  const [N, M] = input[0].split(" ").map(Number);
  const chess_board = input.slice(1);
  let answer = 64;

  const count_check_board = (startRow, startCol) => {
    let mismatchW = 0;
    let mismatchB = 0;

    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        const expectedW = (i + j) % 2 === 0 ? "W" : "B";
        const expectedB = (i + j) % 2 === 0 ? "B" : "W";

        const actual = chess_board[startRow + i][startCol + j];
        if (actual !== expectedW) mismatchW++;
        if (actual !== expectedB) mismatchB++;
      }
    }
    return Math.min(mismatchW, mismatchB);
  };

  for (let i = 0; i <= N - 8; i++) {
    for (let j = 0; j <= M - 8; j++) {
      let current_count = count_check_board(i, j);
      answer = Math.min(current_count, answer);
    }
  }

  //console.log(N, M, chess_board);
  return answer;
};

console.log(solution());
