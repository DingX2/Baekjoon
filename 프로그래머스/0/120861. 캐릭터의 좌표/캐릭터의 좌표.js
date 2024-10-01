const solution = (keyinput, b) => {
    let answer = [0, 0];
    const [x,y] = [b[0]/2-1, b[1]/2-1];
    for (const dir of keyinput) {
        switch(dir){
            case "left" : if (answer[0] > -x) answer[0] -= 1; break;
            case "right" : if (answer[0] < x) answer[0] += 1; break;
            case "up" : if (answer[1] < y) answer[1] += 1; break;
            case "down" : if (answer[1] > -y) answer[1] -= 1;
        }
    }
    return answer;
};
