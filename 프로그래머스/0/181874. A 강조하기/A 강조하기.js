solution = (s) => {
    return [...s].map((c)=>{
        if (c !=='A'){ 
            return c.toLowerCase();
        }else return c
    }).join('').replaceAll('a','A');
}