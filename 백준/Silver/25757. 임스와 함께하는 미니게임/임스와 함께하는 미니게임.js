// copilot: disable
const fs = require("fs");
//const input = fs.readFileSync("input.txt").toString().trim().split("\n");
// const input2 = fs.readFileSync("input2.txt").toString().trim().split("\n");/
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const solution = () => {
  const [N, GAME_TYPE] = input[0].split(" ");
  const rawData = input.slice(1);
  const GAME_TYPE_PEOPLE = {
    Y: 2,
    F: 3,
    O: 4,
  };

  const peopleSet = new Set(rawData);

  console.log(Math.floor(peopleSet.size / (GAME_TYPE_PEOPLE[GAME_TYPE] - 1)));
};
solution();
