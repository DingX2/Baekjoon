// copilot: disable
const fs = require("fs");
//const input = fs.readFileSync("input3.txt").toString().trim().split("\n");
// const input2 = fs.readFileSync("input2.txt").toString().trim().split("\n");/
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const solution = () => {
  const N = +input[0];
  const TEAM_SIZE = N / 2;
  const teams_skill = [];
  for (let i = 0; i < N; i++) {
    teams_skill.push(input[i + 1].split(" ").map(Number));
  }

  //console.log(teams_skill);
  let answer = Infinity;

  // 조합으로 N개 구하기

  const combination = (arr, N) => {
    if (N === 0) return [[]];
    if (arr.length < N) return [];

    const result = [];

    for (let i = 0; i < arr.length; i++) {
      const fixed = arr[i];
      const returnArray = combination(arr.slice(i + 1), N - 1);

      for (const combo of returnArray) {
        result.push([fixed, ...combo]);
      }
    }

    return result;
  };

  const teams = Array.from({ length: N }, (el, i) => i);
  const comboArray = combination(teams, TEAM_SIZE);
  //console.log(comboArray);

  for (let i = 0; i < comboArray.length / 2; i++) {
    //[1,3,5] [ 2,4,5]
    // 최대가 10개의 > 100개 100*100*(100)
    const startTeam = comboArray[i];
    let [startTeamSum, linkTeamSum] = [0, 0];
    const startSet = new Set(startTeam);
    const linkTeam = teams.filter((el) => !startSet.has(el));

    for (let i = 0; i < startTeam.length; i++) {
      for (let j = i + 1; j < startTeam.length; j++) {
        const s1 = startTeam[i];
        const s2 = startTeam[j];
        startTeamSum += teams_skill[s1][s2] + teams_skill[s2][s1];
      }
    }
    for (let i = 0; i < linkTeam.length; i++) {
      for (let j = i + 1; j < linkTeam.length; j++) {
        const s1 = linkTeam[i];
        const s2 = linkTeam[j];
        linkTeamSum += teams_skill[s1][s2] + teams_skill[s2][s1];
      }
    }

    //console.log("startTeamSum", startTeam, linkTeam, startTeamSum, linkTeamSum);

    answer = Math.min(Math.abs(startTeamSum - linkTeamSum), answer);
    if (answer === 0) break;
  }
  return answer;
};

console.log(solution());
