solution = (arr) => {
    answer = []
    let pos = arr.indexOf(2);
    while(pos !== -1){
        answer.push(pos)
        pos = arr.indexOf(2, pos+1)
    }
    return answer.length !== 0 ? arr.slice(Math.min(...answer), Math.max(...answer)+1) : [-1]
}