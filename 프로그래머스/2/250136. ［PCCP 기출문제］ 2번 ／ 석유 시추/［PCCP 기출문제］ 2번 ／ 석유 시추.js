const solution = (land) => {
    const n = land.length;
    const m = land[0].length;
    
    visited = Array.from({length: n}, () => Array(m).fill(false));
    const oilLand = Array.from({length: n}, () => Array(m).fill(0));;
    const groupMap = new Map();
    const direction = [
        [1,0],
        [0,1],
        [-1,0],
        [0,-1]
    ]
    let groupId = 1;
    
    const BFS = (cx, cy) => {
        if (visited[cx][cy] === true || land[cx][cy] === 0) return 0;    
        let [count,front] = [1,0];   
        const queue = [[cx, cy]];  
        const group = [[cx, cy]];
        visited[cx][cy] = true;
        
        while (front < queue.length){
            const [x, y] = queue[front++];
        
            for (const [dx, dy] of direction){
                const [nx, ny] = [dx+x, dy+y];
                
                if(0<=nx && nx<n && 0<= ny && ny<m && land[nx][ny] === 1 && !visited[nx][ny]){
                    visited[nx][ny] = true;
                    group.push([nx, ny]);
                    queue.push([nx, ny]);
                    count += 1;
                }
            }   
        }
        for (const [px, py] of group){
            if (px >= 0 && px < n && py >= 0 && py < m) {
                oilLand[px][py] = groupId;
            }
        }
        groupMap.set(groupId, count);
        groupId += 1;
        return count;
    }
    
    for (let i=0; i<n; i++){
        for (let j=0; j<m; j++){
            if (!visited[i][j] && land[i][j] === 1) {
                BFS(i, j);
            }
        }
    }
    
    //console.table(oilLand);
    //console.log(groupMap);
    
    const colSums = Array(m).fill(0);
    for (let j=0; j<m; j++){
        const seen = new Set();
        for (let i=0; i<n; i++){
            const groupId = oilLand[i][j]; 
            if (groupId === 0 || seen.has(groupId)) continue;
            colSums[j] += groupMap.get(groupId);
            seen.add(groupId);
        }
    }
    
    // console.table(oilLand);
    const maxSum = Math.max(...colSums);
    return maxSum;
}