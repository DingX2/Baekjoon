// copilot: disable
const fs = require("fs");
//const input = fs.readFileSync("input.txt").toString().trim().split("\n");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const solution = () => {
  const SWITCH_COUNT = +input[0];
  const switch_state = input[1].split(" ").map(Number);

  const STUDENTS_LENGTH = +input[2];
  const students = [];

  for (let i = 0; i < STUDENTS_LENGTH; i++) {
    students.push(input[3 + i].split(" ").map(Number));
  }

  for (const student of students) {
    const [gender, get_num] = student;
    if (gender === 1) {
      // 남학생
      for (let i = get_num; i <= SWITCH_COUNT; i += get_num) {
        switch_state[i - 1] = 1 - switch_state[i - 1];
      }
    } else {
      // 여학생
      switch_state[get_num - 1] = 1 - switch_state[get_num - 1];
      let i = 1;
      while (1 <= get_num - i && get_num + i <= SWITCH_COUNT) {
        const L = get_num - i - 1;
        const R = get_num + i - 1;
        if (switch_state[L] !== switch_state[R]) break;
        switch_state[L] = 1 - switch_state[L];
        switch_state[R] = 1 - switch_state[R];
        i += 1;
      }
    }
  }

  for (let i = 0; i < SWITCH_COUNT; i += 20) {
    console.log(switch_state.slice(i, i + 20).join(" "));
  }
};
solution();
