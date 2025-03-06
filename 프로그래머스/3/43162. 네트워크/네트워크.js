solution = (n, computers) => {
    const parent = Array.from({length: n}, (_, i) => i);
    
    const find = (x) =>{
        if(parent[x] !== x){
            parent[x] = find(parent[x]);
        }
        return parent[x];
    }
    
    const union = (a, b) =>{
        const rootA= find(a);
        const rootB = find(b);
        if (rootA !== rootB){
            parent[rootB] = rootA;
        }
    }
    
    for (let i=0; i<n; i++){
        for (let j=0; j<n; j++){
            if(computers[i][j] ===1){
                union(i,j);
            }
        }
    }
    const networks = new Set();
    for (let i = 0; i < n; i++) {
        networks.add(find(i));
    }

    return networks.size;
}
