const solution = (n, costs) => {
    let answer = 0;

    costs.sort((a,b) =>a[2]-b[2])
    parent_node = Array.from({length:n}, (_,v)=>v);
    
    //find
    const find = (a) => {
         if(parent_node[a] !== a){
            parent_node[a] = find(parent_node[a]);   
        }
        return parent_node[a];
    }
    
    //union
    const union = (a, b) => {
        const rootA = find(a);
        const rootB = find(b);
        
        if(rootA !== rootB){
            parent_node[rootB] = rootA;
            return true
        }
        return false; // 이미 연결되어 사이클 생성됨
        
    }
    
    for (cost of costs){
        const [a, b, v] = cost;
        
        if(union(a,b)){
            answer += v;
        }
    }
    
    return answer;
}