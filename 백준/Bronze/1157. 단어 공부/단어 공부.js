// copilot: disable
const fs = require("fs");
//const input = fs.readFileSync("input.txt").toString().trim().split("\n");
// const input2 = fs.readFileSync("input2.txt").toString().trim().split("\n");/
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const solution = () => {
  const maxCharFrequency = (str) => {
    const freq = {};
    for (const char of str) {
      const key = char.toLowerCase();
      freq[key] = (freq[key] || 0) + 1;
    }

    let max = 0;
    let result = "?";
    for (const key in freq) {
      if (max === freq[key]) {
        result = "?";
      } else if (freq[key] > max) {
        result = key.toUpperCase();
      }
      max = Math.max(max, freq[key]);
    }
    return { freq, max, result };
  };
  return maxCharFrequency(input[0]).result;
};

// console.time("Execution Time");
console.log(solution());
// console.timeEnd("Execution Time");
