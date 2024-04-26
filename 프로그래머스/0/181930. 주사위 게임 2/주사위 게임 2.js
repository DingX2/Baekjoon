solution = (a, b, c) => {
    const sets = new Set([a, b, c]);
    if (sets.size === 1){
        return (a+b+c)*(a**2+b**2+c**2)*(a**3+b**3+c**3)
    }else if (sets.size === 2){
        return (a+b+c)*(a**2+b**2+c**2)
    }else{
        return a+b+c
    }
}