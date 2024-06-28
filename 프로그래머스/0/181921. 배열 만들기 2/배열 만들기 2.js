const solution = (l, r, answer = []) => {
    for (let i=l; i<=r; i+=1){
        if([...(i+"")].every(char => char ==='0' || char ==='5')){
            answer = [...answer, i];
        }
    }
    return answer.length ? answer : [-1];
}