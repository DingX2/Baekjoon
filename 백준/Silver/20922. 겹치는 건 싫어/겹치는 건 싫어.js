const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const solution = () => {
  const [N, K] = input[0].split(" ").map(Number);
  const a = input[1].split(" ").map(Number);

  //console.log(N, K, a);

  const keyMap = new Map();

  let l = 0;
  let r = 0;
  let answer = 0;
  while (r < a.length && l <= r) {
    let check = a[r];
    let count = keyMap.get(check) === undefined ? 0 : keyMap.get(check);

    //console.log(keyMap.get(check), check);
    if (count < K) {
      keyMap.set(check, count + 1);
      r += 1;
    } else {
      // l 줄이기
      const lValue = keyMap.get(a[l]) === undefined ? 0 : keyMap.get(a[l]);
      keyMap.set(a[l], lValue - 1);
      l += 1;
    }

    //console.log("***current:", l, r, keyMap);

    answer = Math.max(answer, r - l);
  }
  return answer;
};

console.log(solution());
