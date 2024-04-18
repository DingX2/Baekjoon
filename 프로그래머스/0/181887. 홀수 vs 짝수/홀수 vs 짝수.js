solution = (l) => Math.max(l.reduce((a, c, i)=>  a + (i%2?c:0), 0)
    , l.reduce((a, c, i)=> a + (i%2?0:c), 0))