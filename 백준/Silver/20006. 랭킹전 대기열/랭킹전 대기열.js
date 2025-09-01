const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const solution = () => {
  const [p, m] = input[0].split(" ").map(Number);
  let nextId = 0;

  const rooms = [];
  const MAX = 500;
  const buckets = Array.from({ length: MAX + 1 }, () => []);
  const dead = new Set();

  for (let i = 0; i < p; i++) {
    const [l, n] = input[1 + i].split(" ");
    const level = +l;

    // 방을 생성해야하는 경우
    const createRoom = (level, cap) => {
      const id = nextId++;
      const lo = Math.max(0, level - 10);
      const hi = Math.min(level + 10, MAX);
      rooms[id] = { min: lo, max: hi, cap, size: 0, players: [] };
      for (let L = lo; L <= hi; L++) buckets[L].push(id);
      return id;
    };

    const joinRoom = (level) => {
      const q = buckets[level];
      while (q.length && dead.has(q[0])) q.shift();
      if (!q.length) return -1;
      const id = q[0];
      const r = rooms[id];

      if (r.size >= r.cap || level < r.min || level > r.max) {
        dead.add(id);
        q.shift();
        return joinRoom(level);
      }
      return id;
    };

    let id = joinRoom(level);
    if (id === -1) {
      id = createRoom(level, m);
    }

    const r = rooms[id];
    r.players.push({ level, n });
    r.size++;
    if (r.size === r.cap) {
      dead.add(id);
    }
  }

  const out = [];

  for (const room of rooms) {
    if(!room) continue;
    room.size === room.cap ? out.push("Started!") : out.push("Waiting!");

    room.players
      .sort((a, b) => a.n.localeCompare(b.n))
      .forEach((value) => out.push(`${value.level} ${value.n}`));
  }
  console.log(out.join("\n"));
};

solution();
