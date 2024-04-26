solution = (s, m, c, arr = []) => {
    for(let i = 0; i <[...s].length; i+=m){
        arr.push([...s].slice(i, i+m))
    }
    return arr.map(item=>item[c-1]).join('')
}