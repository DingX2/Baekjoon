from collections import deque

def solution(storage, requests):
    answer = 0
    N, M = len(storage), len(storage[0])
    updated = [['0'] * (M+2)];
    updated.extend([['0']+list(str)+['0'] for str in storage]);
    updated.append(['0'] * (M+2));
    
    direction = [[1,0],[0,1],[-1,0],[0,-1]]
    
    def list_forklift(command):
        # print("지게차", command)
        #BFS
        def BFS (x, y):
            nonlocal updated
            visited = [[False]*(M+2) for i in range(N+2)]
            
            queue = deque()
            queue.append((x, y))
            visited[x][y] = True
            
            while(len(queue) > 0):
                cx, cy = queue.popleft()
                for dx, dy in direction:
                    nx,ny = cx+dx, cy+dy;
                    if(0<=nx<N+2 and 0<=ny<M+2 and not visited[nx][ny]):
                        # print("way", cx, cy ,"=>", nx, ny)
                        if(updated[nx][ny] == '0'):
                            queue.append((nx, ny))
                        elif(updated[nx][ny] == command):
                            updated[nx][ny] = '0' # 꺼내기
                        visited[nx][ny] = True
                            # print("Right way", cx, cy ,"=>", nx, ny)
                    
        BFS(0,0);
            
        return 1
        
    def list_crain(command):
        nonlocal updated
        temp = []
        updated = [
            ['0' if c ==command[0] else c for c in row]
            for row in updated
        ]
        # print("크레인", command[:1])
        return 2
    
    for command in requests:
        if(len(command) == 1):
            list_forklift(command)
        else :
            list_crain(command)
            
        # print(updated)

    for row in updated:
        for str in row:
            if(not str == '0'):
                answer += 1
    return answer