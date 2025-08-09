function solution(array, commands) {
    const answer = [];
    for (cmd of commands) {
        const [i,j,k] = cmd;
        answer.push(array.slice(i-1,j).sort((a,b)=> (a-b))[k-1]);
    }
    return answer;
}