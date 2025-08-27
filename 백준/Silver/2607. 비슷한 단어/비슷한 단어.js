const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const solution = () => {
  const N = +input[0];
  const TARGET = input[1];
  let answer = 0;

  const getCountArr = (str) => {
    const count = Array(26).fill(0);
    for (const ch of str) {
      count[ch.charCodeAt(0) - 65]++;
    }
    return count;
  };

  const targetCount = getCountArr(TARGET);

  for (let i = 2; i <= N; i++) {
    const word = input[i];
    const wordCount = getCountArr(word);

    let diff = 0;
    for (let j = 0; j < 26; j++) {
      diff += Math.abs(targetCount[j] - wordCount[j]);
    }

if (
  diff === 0 || // 같은 구성
  diff === 1 || // 추가/삭제
  (diff === 2 && TARGET.length === word.length) // 변경
) {
  answer++;
}

  }

  return answer;
};

console.log(solution());
