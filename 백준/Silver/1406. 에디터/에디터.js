const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const solution = () => {
  const leftStack = input[0].split("");
  const rightStack = [];
  const commandCount = +input[1];

  for (let i = 0; i < commandCount; i++) {
    const [cmd, str] = input[2 + i].split(" ");

    if (cmd === "L" && leftStack.length) {
      rightStack.push(leftStack.pop());
    } else if (cmd === "D" && rightStack.length) {
      leftStack.push(rightStack.pop());
    } else if (cmd === "B" && leftStack.length) {
      leftStack.pop();
    } else if (cmd === "P") {
      leftStack.push(str);
    }
  }

  console.log(leftStack.join("") + rightStack.reverse().join(""));
};

solution();
