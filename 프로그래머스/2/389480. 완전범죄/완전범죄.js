const solution = (info, n, m) => {
    const dp = Array.from({ length: n }, () => Array(m).fill(Infinity));
    let count = 1;
    dp[0][0] = 0; 
    for (const [index, value] of info.entries()){
        const [a, b] = value;
        
        for (let A = n-1; A>=0; A--){
            for (let B = m-1; B>=0; B--){
                if (dp[A][B] === Infinity) continue;
                // A에 넣는다.
                if (A+a < n && dp[A][B] == index ){
                    console.log(A+a, A, B);
                    dp[A+a][B] = Math.max(index+1, dp[A][B]);
                }
                // B에 넣는다.
                if (B+b < m && dp[A][B] == index ){
                    dp[A][B+b] = Math.max(index+1, dp[A][B]);
                }
            }
        }
    }
    const target = info.length;
    const set = new Set(dp.flat());
    const indexs = Math.floor(dp.flat().indexOf(target));
    if(set.has(target) === false) {return -1};
    if (indexs < m) return 0;
    return Math.floor(indexs/m);
};
