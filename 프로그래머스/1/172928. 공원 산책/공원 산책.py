# 행과 열을 뒤바꿔서 슬라이싱 최적화
def solution (park, routes):
    matrix = [list(row) for row in park]
    rotated = list(map(list, zip(*matrix)))
    print(matrix, rotated);
    
    direction = {
        'E' : [0,1],
        'N' : [-1,0],
        'W' : [0,-1],
        'S' : [1,0]
    }
    
    for i, row in enumerate(park):
        if('S' in row):
            currentX, currentY = i, row.index('S');
            break;
    
    for route in routes:
        [dir, count] = route.split(" ");
        int_count = int(count);
        [dx, dy] = direction[dir]
        nx = currentX+dx*int_count;
        ny = currentY+dy*int_count;
        
        if not(0<=nx< len(park) and 0<=ny<len(park[0])):
            continue

        if dir in ('E','W'):
            y1, y2 = sorted([currentY, ny]);
            if('X' in park[nx][y1:y2+1]): 
                continue;
        else:
            x1, x2 = sorted([currentX, nx]);
            if('X' in rotated[currentY][x1:x2+1] ): 
                continue;
        
        currentX, currentY = nx, ny;

    return [currentX, currentY];