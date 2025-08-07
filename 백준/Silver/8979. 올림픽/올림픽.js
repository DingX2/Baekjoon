// copilot: disable
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const solution = () => {
  const [N, K] = input[0].split(" ").map(Number);
  const data = input
    .slice(1)
    .map((line) => line.split(" ").map(Number))
    .map(([index, gold, silver, bronze]) => ({
      index,
      gold,
      silver,
      bronze,
    }));

  data.sort((a, b) => {
    if (b.gold !== a.gold) return b.gold - a.gold;
    if (b.silver !== a.silver) return b.silver - a.silver;
    return b.bronze - a.bronze;
  });

  for (let i = 0; i < N; i++) {
    if (
      i > 0 &&
      data[i].gold === data[i - 1].gold &&
      data[i].silver === data[i - 1].silver &&
      data[i].bronze === data[i - 1].bronze
    ) {
      data[i].rank = data[i - 1].rank;
    } else {
      data[i].rank = i + 1;
    }
  }

  const NationMap = new Map();
  data.forEach((nation) => {
    NationMap.set(nation.index, nation);
  });

  console.log(NationMap.get(K).rank);
};
solution();
