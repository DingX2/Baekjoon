solution = (b, $, a = 0) => {
    for (let i = 0; i<b.length; i++){
        for(let j =0; j<b[0].length; j++){
            i+j <= $ ? a+= b[i][j] : 0
        }
    }
    return a
}