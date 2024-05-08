solution = ($) => {
    const a = Array.from({ length: 52 }).fill(0);

    [...$].forEach((_, item)=>{
        let c = $.charCodeAt(item);
        65 <= c && c <=90 ? a[c - 65] += 1 : a[c - 71] += 1;
    })

    return a;
}
