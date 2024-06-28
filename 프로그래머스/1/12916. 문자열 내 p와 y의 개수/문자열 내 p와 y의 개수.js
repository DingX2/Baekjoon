const solution = (s) => {
    const count = [...s.toLowerCase()].reduce((acc, char) => {
        if(char === "p") return acc + 1;
        if(char === "y") return acc - 1;
        return acc;
    }, 0)
    return count === 0;
}