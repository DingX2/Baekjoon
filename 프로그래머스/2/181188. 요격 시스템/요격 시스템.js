const sortFunction = (compareFn = (a, b) => a - b) => {
    return (array) => array.slice().sort(compareFn);
}

function solution(targets) {
    const sortTargets = sortFunction((a, b) => {
        if  (a[0] === b[0]){ return a[1] - b[1]} return a[1] - b[1];
    });
    const sortArray = sortTargets(targets);
    
    let MissileCount = 0;
    let MissleLastPos = -Infinity;
    
    for (const target of sortArray){
        const [s, e] = target;
            if (MissleLastPos <= s){
                MissileCount += 1;
                MissleLastPos= e;   
            }
    }
    return MissileCount;
}