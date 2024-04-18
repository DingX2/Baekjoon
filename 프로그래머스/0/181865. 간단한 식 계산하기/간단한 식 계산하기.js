solution = (b) => {
    const p = b.split(" ");
    switch(p[1]){
        case '+': return +p[0] + +p[2];
        case '-': return +p[0] - p[2];
        case '*': return +p[0] * p[2];
    }
}
