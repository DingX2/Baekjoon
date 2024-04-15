solution = (num_str) => {
    let s = 0;
    Array.from(num_str, a => {s += +a});
    return s;
}