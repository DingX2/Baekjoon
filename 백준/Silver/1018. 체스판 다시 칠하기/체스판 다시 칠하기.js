// copilot: disable
const fs = require("fs");
//const input = fs.readFileSync("input7.txt").toString().trim().split("\n");
// const input2 = fs.readFileSync("input2.txt").toString().trim().split("\n");/
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const solution = () => {
  const [N, M] = input[0].split(" ").map(Number);
  const chess_board = input.slice(1);
  let answer = 64;

  const count_check_board = (i, j) => {
    let IsStartB = 0;
    let IsStartW = 0;

    const sliced_chess_board = chess_board.slice(i, i + 8);
    //console.log("sliced_chess_board", sliced_chess_board);

    for (const [i, chess_row] of sliced_chess_board.entries()) {
      const sliced_chess = chess_row.slice(j, j + 8);
      for (const [j, el] of [...sliced_chess].entries()) {
        if (i % 2 == 0) {
          //첫행
          if (j % 2 === 0) {
            //첫시작 WBW
            el === "B" ? (IsStartW += 1) : (IsStartB += 1);
          } else {
            el === "W" ? (IsStartW += 1) : (IsStartB += 1);
          }
        } else {
          if (j % 2 === 0) {
            //첫시작 BWB
            el === "W" ? (IsStartW += 1) : (IsStartB += 1);
          } else {
            el === "B" ? (IsStartW += 1) : (IsStartB += 1);
          }
        }
      }
    }
    //console.log(IsStartB, IsStartW);
    return Math.min(IsStartB, IsStartW);
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
