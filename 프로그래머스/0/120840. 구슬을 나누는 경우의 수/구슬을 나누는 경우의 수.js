// const factorial = (n) => Array.from({ length: n }, (v, i) => i+1).reduce((a,c)=>a*c)

const factorial = (n) => {
    let result = 1;
    for (let i = 1; i <= n; i++) {    
        result *= i; 
    }
    return result;
}  


solution = ($, _) => Math.round(factorial($) / (factorial($-_) * factorial(_)), 0)