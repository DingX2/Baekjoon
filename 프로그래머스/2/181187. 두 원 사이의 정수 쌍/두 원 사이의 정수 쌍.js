const solution = (r1, r2) => {
    let answer = 0;
    
    const getDots = (r1, r2, isBoundaryIncluded) =>{
        let count = 0;
        for (let x=1; x <= r2; x++){
            const max_Y = Math.floor(Math.sqrt(r2*r2 - x*x));
            const min_Y = r1 > x ? Math.ceil(Math.sqrt(r1 * r1 - x * x)) : 0;
            //console.log(x, r2, max_Y, min_Y);
            count += max_Y-min_Y+1;
        }
        return count;
    }
    
    const getDistance = (x1 , y1, x2, y2) => {
        return Math.pow(x2-x1, 2) + Math.pow(y2-y1, 2);
    }
    
    //const outerCircle = getDots(0, r2, true);
    //const innerCircle = getDots(0, r1, false);
    const dots = getDots(r1, r2, true);
    
    // const filterCircle = [...outerCircle].filter((dot) => {
    //     return !innerCircle.has(dot)
    // })
    
//     console.log(innerCircle);
//     console.log(outerCircle);
     //console.log(dots);
    
    return dots*4;
}