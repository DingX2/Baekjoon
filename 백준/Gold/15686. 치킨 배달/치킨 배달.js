// copilot: disable
const { dirxml } = require("console");
const fs = require("fs");
const path = require("path");
//const input = fs.readFileSync("input4.txt").toString().trim().split("\n");
// const input2 = fs.readFileSync("input2.txt").toString().trim().split("\n");/
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const solution = () => {
  const [N, M] = input[0].split(" ").map(Number);
  const houses = [];
  const chickens = [];
  for (let i = 0; i < N; i++) {
    const chicken_row = input[i + 1].split(" ").map(Number);
    for (let j = 0; j < chicken_row.length; j++) {
      switch (chicken_row[j]) {
        case 1:
          houses.push([i, j]);
          break;
        case 2:
          chickens.push([i, j]);
          break;
      }
    }
  }

  //console.log("chickens", chickens);
  //console.log("houses", houses);

  //최대 M개의 조합으로 골라서
  //각 치킨거리를 구함

  const getCombination = (array, M) => {
    const result = [];

    const dfs = (start, path) => {
      if (path.length === M) {
        result.push([...path]);
        return;
      }

      for (let i = start; i < array.length; i++) {
        path.push(array[i]);
        dfs(i + 1, path);
        path.pop();
      }
    };

    dfs(0, []);
    return result;
  };

  const getDistance = (x1, y1, x2, y2) => {
    return Math.abs(x1 - x2) + Math.abs(y1 - y2);
  };

  const chicken_distance = (choices, houses) => {
    let sum_of_chicken_distance = 0;

    for (house of houses) {
      const [x1, y1] = house;
      let lower_distance = Infinity;
      for (choice of choices) {
        const [x2, y2] = choice;
        const distance = getDistance(x1, y1, x2, y2);
        lower_distance = Math.min(lower_distance, distance);
      }
      sum_of_chicken_distance += lower_distance;
    }
    return sum_of_chicken_distance;
  };

  const comb = getCombination(chickens, M);
  //console.log(comb, chickens, M, "개 선택");

  let answer = Infinity;
  for (const choice of comb) {
    const distance = chicken_distance(choice, houses);
    answer = Math.min(distance, answer);
  }

  return answer;
};

console.log(solution());
