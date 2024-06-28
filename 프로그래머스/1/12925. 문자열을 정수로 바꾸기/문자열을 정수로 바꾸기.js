const solution = (s) => {
    if ([...s][0] === '-' || [...s][0] === '+'){
        return Number(s);
    }
    return +s;
}