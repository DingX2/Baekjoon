const solution = (score, rank=1, prevScore=0) => {
    const makeArray = score.map(([Eng, Math], i) => [(Eng+Math)/2, i]);
    const ary = makeArray.sort((a, b) => b[0] - a[0]).map((item, index) =>{
        const temp = (item[0] === prevScore) ? rank : rank=index+1;
        prevScore = item[0];
        return [item, temp].flat()
    });
    return ary.sort((a,b) => a[1]-b[1]).map((item)=>item[2]);
}