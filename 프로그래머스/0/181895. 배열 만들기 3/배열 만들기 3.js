solution = (arr, intervals) => {
    let answer = [];
    intervals.map((item)=>{
        [start, end] = item;
        answer.push(arr.slice(start, end+1));
    })
    return answer.flat()
}