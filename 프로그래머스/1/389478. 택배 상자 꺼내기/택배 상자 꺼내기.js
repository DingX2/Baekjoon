const solution = (n, w, num) => {
    const maxfloor = Math.floor(n/w)+1
    const padding = num % w;
    let gap = n - num;
    let count = 1;
    const floors = Math.floor(gap/(w*2))*2;
    gap -= floors*w;
    count += floors;
    console.log("num, padding, maxfloor, floors", num, padding, maxfloor, floors, gap);
    if(gap > (w-padding)*2 || padding === 0 && gap > 0){
        count += 1;
    }
    return count;
}