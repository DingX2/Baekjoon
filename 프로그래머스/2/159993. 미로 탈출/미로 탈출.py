def solution(maps):
    start, end, lever = 0, 0, 0;
    visited = [ [False] * (len(maps[0])) for _ in range(len(maps))]
    direction = [[1,0], [0,1], [0,-1], [-1,0]]
    
    for i, row in enumerate(maps):
        for j, s in enumerate(row):
            if s == 'S':
                start = [i, j]
            elif s == 'E':
                end = [i, j]
            elif s == 'L':
                lever = [i, j]
    
    print(start, end, lever)
    
    def BFS(sx, sy):
        queue = [(sx, sy)]
        while (len(queue) > 0):
            cx, cy = queue.shift()
            
            
    answer = BFS(start[0], start[1])
    
    return answer