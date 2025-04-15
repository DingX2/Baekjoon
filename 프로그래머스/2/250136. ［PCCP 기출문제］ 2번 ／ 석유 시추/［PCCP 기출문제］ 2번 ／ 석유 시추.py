def solution(land):
    
    # 가로열의 최소열 최대열만 구하면 세로로 더하지 않아도 된다.
    n, m = len(land), len(land[0]);
    visited = [[False] * m for _ in range(n)]
    direction = [
        [0,1],
        [1,0],
        [0,-1],
        [-1,0]
    ];
    
    def BFS(sx, sy) :
        queue = [(sx, sy)]
        visited[sx][sy] = True;
        values = [0,500,0];
        count = 1;
        
        while len(queue) > 0:
            cx, cy = queue.pop();
            if(cy<values[1]): values[1] = cy;
            if(cy>values[2]): values[2] = cy;
            
            for [dx, dy] in direction:
                nx, ny = dx+cx, dy+cy;
                if(0<=nx<n and 0<=ny<m and not visited[nx][ny] and land[nx][ny] == 1):
                    visited[nx][ny] = True;
                    count+=1;
                    queue.append((nx, ny))
        values[0] = count;
        return values;
    
    answer = [0]*m;
    for i in range(n):
        for j in range(m):
            if not visited[i][j] and land[i][j] == 1:
                value, start, end = BFS(i, j);
                for idx in range(start, end+1):
                    answer[idx] += value;
                    
    return max(answer);
        