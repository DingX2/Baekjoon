solution = (t, p) => {
    let result = 0;
    for (let i =0; i <= t.length-p.length; i++){
        if(p >= [...t].slice(i,i+p.length).join('')){
            result++;
        }
    }
    return result;
}