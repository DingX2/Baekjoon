const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const solution = () => {
  const T = +input[0];
  let count = 0;

  for (let i = 0; i < T; i++) {
    let chapter = 1 + i + count;
    const [N, K, id, M] = input[chapter].split(" ").map(Number);
    count += M;

    // 객체 설계
    const createScore = (id, K) => ({
      id: id,
      best: Array.from({ length: K + 1 }, () => 0),
      total: 0,
      submits: 0,
      lastTime: 0,
    });

    const teams = Array.from({ length: N + 1 }, (_, i) =>
      i === 0 ? null : createScore(i, K)
    );

    for (let i = 1; i <= M; i++) {
      const [I, J, S] = input[chapter + i].split(" ").map(Number);
      const tNow = i;
      const team = teams[I];

      team.submits += 1;
      team.lastTime = tNow;

      if (S > team.best[J]) {
        team.total += S - team.best[J];
        team.best[J] = S;
      }
    }

    const byRank = (a, b) => {
      if (a.total !== b.total) return b.total - a.total;
      if (a.submits !== b.submits) return a.submits - b.submits;
      return a.lastTime - b.lastTime;
    };

    const sorted = teams.slice(1).sort(byRank);
    const rank = sorted.findIndex((team) => team.id === id) + 1;
    console.log(rank);
  }
};

solution();
