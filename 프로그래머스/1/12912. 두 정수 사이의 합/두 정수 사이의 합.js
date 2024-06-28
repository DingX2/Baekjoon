const solution = (a, b) => {
    const [min, max] = [a,b].sort((a,b) => a-b);
    return Array.from({length: max-min+1}, (_, i)=> min+i).reduce((acc,cur)=>acc+cur, 0);
}