const solution = (maps, level=0) => {
    //bfs
    const queue = [[0,0,0]];
    const dir = [ [0,1], [-1,0], [0,-1], [1,0] ];
    //const visited = Array.from({ length: maps.length }, () => Array(maps[0].length).fill(false));
    let front = 0, rear = 0;
    queue[rear++] = [0, 0, 0];
    // level check
    while (front < rear) {
        const [x, y, level] = queue[front++];
        
        if (x === maps.length-1 && y === maps[0].length-1){
            return level+1;
        }
        
        for (const [dx, dy] of dir){
            const [nx, ny] = [dx+x, dy+y];
            if (nx >= 0 && ny >= 0 && nx < maps.length && ny < maps[0].length && maps[nx][ny] === 1){
                maps[nx][ny] = 0;
                queue[rear++] = [nx, ny, level+1];
            }
        }
    }
    return -1;
}

// const validation = (nx, ny, maps) => {
//     return 0<=nx && nx<maps.length && 0<=ny && ny<maps[0].length && maps[nx][ny] === 1;
// }