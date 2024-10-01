const solution = (keyinput, b) => {
    let answer = [0, 0];
    for (const dir of keyinput) {
        if (dir === "left" && answer[0] > -Math.floor(b[0] / 2)) {
            answer[0] -= 1;
        } else if (dir === "right" && answer[0] < Math.floor(b[0] / 2)) {
            answer[0] += 1;
        } else if (dir === "down" && answer[1] > -Math.floor(b[1] / 2)) {
            answer[1] -= 1;
        } else if (dir === "up" && answer[1] < Math.floor(b[1] / 2)) {
            answer[1] += 1;
        }
    }
    return answer;
};
