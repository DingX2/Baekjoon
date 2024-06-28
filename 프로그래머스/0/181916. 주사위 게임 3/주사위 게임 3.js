const indexOfAll = (array, value) => {
    return array.map((item, index) => item === value ? index : -1).filter(index => index !== -1)
}

const solution = (a, b, c, d) => {
    const $ = Array(7).fill(0);
    $[a] += 1;
    $[b] += 1;
    $[c] += 1;
    $[d] += 1;
    
    const nonZero = $.filter(item=> item !== 0).length;
    switch(nonZero){
        case 1: return 1111*a;
        case 2: if($.indexOf(3) !== -1){
            return Math.pow((10*$.indexOf(3)+$.indexOf(1)), 2)
        }else{
            const [p, q] = indexOfAll($, 2);
            return (p + q) * Math.abs(p - q);
        };
        case 3: return indexOfAll($, 1).reduce((a,c) => a*c);
        case 4: return $.indexOf(1);
    }
}