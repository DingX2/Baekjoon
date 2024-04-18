solution = (start, end_num) => {
    let answer = [];
    for (let i=start; end_num <= i; i--){
        answer.push(i)
    }
    return answer
}