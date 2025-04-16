from collections import deque

def solution(maps):
    start, end, level, leverFlag = 0, 0, 0, False;
    n, m = len(maps), len(maps[0])
    visitedtoL = [ [False] * m for _ in range(n)]
    visitedtoE = [ [False] * m for _ in range(n)]
    direction = [(1,0), (0,1), (0,-1), (-1,0)]
    
    for i, row in enumerate(maps):
        for j, s in enumerate(row):
            if s == 'S':
                start = [i, j]
            elif s == 'E':
                end = [i, j]
            elif s == 'L':
                lever = [i, j]
    
    def BFS(sx, sy):
        queue = deque()
        queue.append((sx, sy, 0, False))
        visitedtoL[sx][sy] = True
        
        while (len(queue) > 0):
            cx, cy, level, leverFlag = queue.popleft()
            if not leverFlag and maps[cx][cy] == 'L':  
                queue.append((cx, cy, level, True)) 
                visitedtoE[cx][cy] = True 
                continue 
            if leverFlag and maps[cx][cy] == 'E': return level;
            
            for dx, dy in direction:
                nx, ny = cx + dx, cy + dy
                if(0<=nx<n and 0<=ny<m and not maps[nx][ny] == 'X'):
                    if leverFlag and not visitedtoE[nx][ny]:
                        visitedtoE[nx][ny] = True 
                        queue.append((nx, ny, level+1, leverFlag))
                    elif not leverFlag and not visitedtoL[nx][ny]:
                        visitedtoL[nx][ny] = True
                        queue.append((nx, ny, level+1, leverFlag))
        return -1
    
    return BFS(start[0], start[1])