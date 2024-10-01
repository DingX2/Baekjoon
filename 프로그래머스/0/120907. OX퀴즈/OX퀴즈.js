function solution(quiz) {
    const answer = [];
    for(let i =0; i<quiz.length; i++){
        const temp = quiz[i].split(" ");
        switch(temp[1]){
            case '+':
                answer.push(+temp[0] + +temp[2] === +temp[4] ? "O" : "X"); break;   
            case '-':
                answer.push(+temp[0] - +temp[2] === +temp[4] ? "O" : "X");
        }
    }
    return answer;
}