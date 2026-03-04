const solution = (n, results) => {
    
    let answer = 0;
    const winGraph = Array.from({length: n+1}, () => []);
    const loseGraph = Array.from({length: n+1}, () => []);
    
    for (const result of results){
        const [v, w] = result;
        winGraph[v].push(w);
        loseGraph[w].push(v);
    }
    
    const dfs = (start, graph, visited) => {
        visited[start] = true;
        let count = 0;
        
        for(const neighbor of graph[start]){
            if (!visited[neighbor]){
               count += 1+dfs(neighbor, graph, visited, count);
            }
        }
        return count;
    }
    
    for(let i=1; i<=n; i++){
        
        let visited = Array(n).fill(false);
        let winCount = dfs(i, winGraph, visited);
        
        visited = Array(n).fill(false);
        let loseCount = dfs(i, loseGraph, visited);
            
        if(winCount+loseCount === n-1) {
            answer+=1;
        }
    }

    return answer;
}